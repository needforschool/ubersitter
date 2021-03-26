import { useRouter } from "next/router";

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
        </>
    )
}

export default Account