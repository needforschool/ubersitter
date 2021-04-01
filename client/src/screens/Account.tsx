import { useRouter } from "next/router";
import accountStyles from '@styles/Account.module.scss';

import Navbar from "@components/Navbar";
import Loading from "./Loading";

const Account = ({ session }) => {
    const router = useRouter();
    if (!session || !session.id) {
        router.push('/', null, { shallow: true });
        return <Loading />
    }

    return (
        <>
            <Navbar session={session} />
        Account Page

            <label for="name">Nom :</label>

            <input type="text" id="name" name="name" placeholder="Dupont"/>

            <label for="prenom">Prénom :</label>

                <input type="text" id="prenom" name="prenom" placeholder="Jean"/>

            <label for="mail">Mail :</label>

                <input type="mail" id="mail" name="mail" placeholder="exemple@mail.fr"/>

            <label for="loca">Adresse :</label>

                <input type="text" id="loca" name="loca" placeholder="24 place Saint Marc"/>

            <label for="tel">Téléphone :</label>

                <input type="tel" id="tel" name="tel" required
                    minlength="4" maxlength="10" size="10" placeholder="0123456789"/>

            <label for="name">Mot de passe :</label>

                <input type="password" id="password" name="password" required
                    minlength="4"/>


                <input type="button" id="bouton" value="Enregistrer"/>
        </>
    )
}

export default Account