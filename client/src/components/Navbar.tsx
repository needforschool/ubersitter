import Container from '@components/Container';

import navbarStyles from '@styles/modules/Navbar.module.scss';
import Button from './Button';
import Link from './Link';

const Navbar = ({ className }: { className?: string }) => (
    <nav className={[navbarStyles.navbar, className].join(' ')}>
        <Container className={navbarStyles.navbarContainer}>
            <div className={navbarStyles.titleContainer}>
                <Link href="/">
                    <a className={navbarStyles.navLink}>
                        <h1 className={navbarStyles.title}>UberSitter</h1>
                    </a>
                </Link>
            </div>
            <ul className={navbarStyles.nav}>
                <li className={navbarStyles.navItem}><Link href="/auth"><a className={navbarStyles.navLink}><Button color='porcelain'>Lancer l'application</Button></a></Link></li>
            </ul>
        </Container>
    </nav>
)

export default Navbar