import { useRouter } from 'next/router'
import Container from '@components/Container';
import footerStyles from '@styles/modules/Footer.module.scss';

import Button from './Button';
import Link from './Link';
import React from 'react';

const Footer = ({ className, session }: { className?: string, session: any }) => {
    const { pathname } = useRouter();

    return (
        <footer className={[footerStyles.footer, className].join(' ')}>
            <Container className={footerStyles.footerContainer}>
                <div className={footerStyles.titleContainer}>
                    <Link href="/" className={footerStyles.footerLink}>
                        <h1 className={footerStyles.title}>UberSitter</h1>
                    </Link>
                </div>
               
            </Container>
        </footer>
    )
}

export default Footer