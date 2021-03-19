import Container from '@components/Container';

import navbarStyles from '@styles/modules/Navbar.module.scss';
import Button from './Button';
import Link from './Link';

const Navbar = ({ className }: { className?: string }) => (
    <nav className={[navbarStyles.navbar, className].join(' ')}>
        <Container className={navbarStyles.navbarContainer}>
            <div className={navbarStyles.titleContainer}>
                <Link href="/" className={navbarStyles.navLink}>
                    <h1 className={navbarStyles.title}>UberSitter</h1>
                </Link>
            </div>
            <ul className={navbarStyles.nav}>
                <li className={navbarStyles.navItem}><Link href="/auth" className={navbarStyles.navLink}><Button color='porcelain'>Lancer l'application</Button></Link></li>
            </ul>
        </Container>
    </nav>
)

export default Navbar