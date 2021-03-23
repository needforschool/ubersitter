import { useRouter } from 'next/router'
import Container from '@components/Container';
import navbarStyles from '@styles/modules/Navbar.module.scss';

import Button from './Button';
import Link from './Link';

const Navbar = ({ className, session }: { className?: string, session: any }) => {
    const { pathname } = useRouter();

    return (
        <nav className={[navbarStyles.navbar, className].join(' ')}>
            <Container className={navbarStyles.navbarContainer}>
                <div className={navbarStyles.titleContainer}>
                    <Link href="/" className={navbarStyles.navLink}>
                        <h1 className={navbarStyles.title}>UberSitter</h1>
                    </Link>
                </div>
                <ul className={navbarStyles.nav}>
                    {session?.id ? <li className={navbarStyles.navItem}><Link href="/account" className={navbarStyles.navLink}>{session?.id}</Link></li> : null}
                    {pathname === '/' ? <li className={navbarStyles.navItem}><Link href={session?.id ? '/map' : '/auth'} className={navbarStyles.navLink}><Button color='porcelain'>Lancer l'application</Button></Link></li> : null}
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar