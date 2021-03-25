import { useRouter } from 'next/router'
import Container from '@components/Container';
import navbarStyles from '@styles/modules/Navbar.module.scss';

import Button from './Button';
import Link from './Link';
import React from 'react';

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
                    {pathname === '/' ? <li className={navbarStyles.navItem}><Link href={session?.id ? '/map' : '/auth'} className={navbarStyles.navLink}><Button color='porcelain'>Lancer l'application</Button></Link></li> : null}
                    {session?.id ? <li className={navbarStyles.navItem}><Link href="/account" className={navbarStyles.navLink}>{session?.firstname} {session?.lastname}</Link></li> : null}
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar