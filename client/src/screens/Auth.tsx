import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Image from '@components/Image'
import Link from '@components/Link'
import Button from '@components/Button'
import Loading from '@screens/Loading'

import authStyles from '@styles/modules/Auth.module.scss'
import { endpoint } from '@services/mvc'

const Auth = ({ session }) => {

    const router = useRouter();

    if (session?.id) {
        router.push('/');
        return <Loading />;
    }

    const [state, setState] = useState({
        step: authType.Welcome,
        message: null,
        firstname: '',
        lastname: '',
        password: '',
        role: 'customer',
        docUrl: '',
        email: ''
    })

    const handleChange = event => {
        event.preventDefault();
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleRadioChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const submitHandler = async event => {
        event.preventDefault();
        let formData = new FormData();
        switch (state.step) {
            case authType.Welcome:
                formData.append('email', state.email)
                axios.post(`${endpoint}auth/account`, formData)
                    .then(res => {
                        if (res.data.exist) setState({ ...state, step: authType.SignIn })
                        else setState({ ...state, step: authType.SignUp })
                    })
                    .catch(error => {
                        //something
                    });
                break;
            case authType.SignUp:
                formData.append('email', state.email)
                formData.append('firstname', state.firstname)
                formData.append('lastname', state.lastname)
                formData.append('password', state.password)
                formData.append('roles', state.role)
                axios.post(`${endpoint}auth/signup`, formData)
                    .then(res => {
                        if(res.data.success) router.push('/map');
                    })
                    .catch(error => {
                        //something
                    });
                break;
            default:
                setState({ ...state, step: authType.Welcome })
                break;
        }
        console.log(state)
    }


    return (
        <section className={authStyles.auth}>
            <div className={authStyles.authContainer}>
                <Link href="/" className={authStyles.imgLink}>
                    <Image className={authStyles.img} src="/assets/img/logo/logo-bg-transparent.png" alt="Logo UberSitter" />
                </Link>

                {
                    {
                        [authType.Welcome]: <h2 className={authStyles.title}>Gardez vos enfants avec UberSitter</h2>,
                        [authType.SignIn]: <h2 className={authStyles.title}>Heureux de vous revoir ! Connectez-vous pour continuer</h2>,
                        [authType.SignUp]: <h2 className={authStyles.title}>Heureux de vous accueillir ! Enregistrez vous pour continuer</h2>
                    }[state.step]
                }

                <form action="" onSubmit={submitHandler}>
                    {
                        {
                            [authType.Welcome]: (
                                <>
                                    <div className={authStyles.inputContainer}>
                                        <label htmlFor="email">Saisissez votre adresse mail</label>
                                        <input id="email" name="email" type="email" autoFocus onChange={handleChange} />
                                    </div>
                                </>
                            ),
                            [authType.SignIn]: (
                                <>
                                    <div className={authStyles.inputContainer}>
                                        <label htmlFor="password">Saisissez votre mot de passe</label>
                                        <input id="password" name="password" type="password" autoFocus onChange={handleChange} />
                                    </div>
                                </>
                            ),
                            [authType.SignUp]: (
                                <>
                                    <div className={authStyles.radioRow}>
                                        <div className={authStyles.radioContainer}>
                                            <input type="radio" id="customer" name="role" value="customer" defaultChecked onClick={handleRadioChange} />
                                            <label htmlFor="customer">Parent</label>
                                        </div>
                                        <div className={authStyles.radioContainer}>
                                            <input type="radio" id="professional" name="role" value="professional" onClick={handleRadioChange} />
                                            <label htmlFor="professional">Professionnel</label>
                                        </div>
                                    </div>
                                    <div className={authStyles.inputContainer}>
                                        <label htmlFor="firstname">Saisissez votre prénom</label>
                                        <input id="firstname" name="firstname" type="firstname" autoFocus onChange={handleChange} />
                                    </div>
                                    <div className={authStyles.inputContainer}>
                                        <label htmlFor="lastname">Saisissez votre nom</label>
                                        <input id="lastname" name="lastname" type="lastname" onChange={handleChange} />
                                    </div>
                                    <div className={authStyles.inputContainer}>
                                        <label htmlFor="password">Saisissez votre mot de passe</label>
                                        <input id="password" name="password" type="password" autoFocus onChange={handleChange} />
                                    </div>
                                    {(state.role == 'professional') ?
                                        <>
                                            <div className={authStyles.inputContainer}>
                                                <label htmlFor="lastname">Saisissez le nom de votre enseigne</label>
                                                <input id="lastname" type="lastname" defaultValue={state.firstname} onChange={handleChange} />
                                            </div>
                                            <div className={authStyles.inputContainer}>
                                                <label htmlFor="lastname">Ajoutez vos justificatif de professionnalisme</label>
                                                <input id="docUrl" type="file" name="docUrl" accept="image/*" onChange={(event) => {
                                                    setState({ ...state, [event.target.name]: event.target.files[0] });
                                                }} />
                                            </div>
                                        </>
                                        : null
                                    }
                                </>
                            )
                        }[state.step]
                    }
                    <Button className={authStyles.btn} color="porcelain" type="submit">Suivant</Button>
                </form>
            </div>
        </section>
    )
}

export let authType = {
    Welcome: 0,
    SignIn: 1,
    SignUp: 2,
    Recovery: 3,
    RecoveryChange: 4
}

export default Auth