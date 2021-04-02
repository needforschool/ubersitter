import { useRouter } from "next/router";
import accountStyles from '@styles/modules/Account.module.scss';

import Navbar from "@components/Navbar";
import Loading from "./Loading";
import Head from "next/head";

const Account = ({ session }) => {
    const router = useRouter();
    if (!session || !session.id) {
        router.push('/', null, { shallow: true });
        return <Loading />
    }

    return (
        <>
            <Head>
                <title>Compte | UberSitter</title>
            </Head>
            <Navbar session={session} />

            <section className={accountStyles.container}>
                <form action="" className={accountStyles.form}>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" placeholder="Dupont" />

                    <label htmlFor="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" placeholder="Jean" />

                    <label htmlFor="mail">Mail :</label>
                    <input type="mail" id="mail" name="mail" placeholder="exemple@mail.fr" />

                    <label htmlFor="loca">Adresse :</label>
                    <input type="text" id="loca" name="loca" placeholder="24 place Saint Marc" />

                    <label htmlFor="tel">Téléphone :</label>
                    <input type="tel" id="tel" name="tel" required
                        minLength={4} maxLength={10} size={10} placeholder="0123456789" />

                    <label htmlFor="name">Mot de passe :</label>
                    <input type="password" id="password" name="password" required
                        minLength={4} />

                    <input type="button" id="bouton" value="Enregistrer" />
                </form>
            </section>


        </>
    )
}

export default Account