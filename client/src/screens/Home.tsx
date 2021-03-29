import Navbar from '@components/Navbar';
import Container from '@components/Container'
import Image from '@components/Image'
import Link from '@components/Link'
import Button from '@components/Button'

import homeStyles from '@styles/modules/Home.module.scss'
import Footer from '@components/footer';

const Home = ({ session }) => (
    <>
            <Navbar session={session} />
            <Image className={homeStyles.image_font} src="/assets/img/deux-enfants.jpg" alt="cool" />
            <div className={homeStyles.menu_fix_template}>
                <div className={homeStyles.fix_login}>
                    <div className={homeStyles.title_login}>
                        <h2>Garder vos enfants avec l'application Ubersitter</h2>
                    </div>
                    <div className={homeStyles.content_detais}>
                        <div className={homeStyles.detais}>
                            <p>Rejoignez la plateforme bénéficiant du plus grand réseau de passagers actifs.</p>
                        </div>
                    </div>
                    <div className={homeStyles.likn_button}>
                        <div className={homeStyles.click}>
                            {<Button className={homeStyles.boutton} color='black'>S'inscrire</Button>}
                        </div>
                        <div className={homeStyles.click}>
                            <div className={homeStyles.link_click}>
                                <a href=""></a>
                                <div className={homeStyles.content_link}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Container>

            {/* <Link href="https://google.com">Lien incroyable</Link> */}
            {/* <Button className={homeStyles.boutton} color='black'>Vous souhaitez faire garder vos enfants</Button> */}

            <div className={homeStyles.container}>
                <div>
                    <h1 className={homeStyles.title}>Nous sommes là pour garder vos enfants !</h1>
                </div>
                <p className={homeStyles.subtitle}>Avec nous vos enfants sont en sécurité nous allons nous s'en occuper commme nos propre enfants jusquà votre arriver .</p>
                <div className={homeStyles.content}>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} >A l'école </h2>
                        </div>
                        <Image className={homeStyles.quatre_image} src="/assets/img/homme-portant-enfant-small.jpg" alt="cool" />
                        <p className={homeStyles.description}>Nous accompagons et cherchons vos enfants à la sortie de son école, puis le ramenons a votre domicile
                            Nous lui donnons aussi un gouter </p>
                    </div>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} >Les devoirs</h2>
                        </div>
                        <Image className={homeStyles.quatre_image} src="/assets/img/homme-dessine-enfant.jpg" alt="cool" />
                        <p className={homeStyles.description}>Nous aidons l'enfant à faire ces devoirs, et nous prenons du temps à lui expiquer de si il n'a pas bien compris.
                              Nous sommes parfois amenés à refaire tout  </p>
                    </div>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} >Le Repas </h2>
                        </div>
                        <Image className={homeStyles.quatre_image} src="/assets/img/homme__enfant_mange.jpg" alt="cool" />
                        <p className={homeStyles.description}>Nous accompagons et cherchons vos enfants à la sortie de son école, puis le ramenons a votre domicile
                            Nous lui donnons aussi un gouter </p>
                    </div>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} > La sièste </h2>
                        </div>
                        <Image className={homeStyles.quatre_image} src="/assets/img/enfant-dors.jpg" alt="cool" />
                        <p className={homeStyles.description}> Une fois  que tout est accomplie arrive l'heure ou doit se coucher l'enfant pour récupérer de se longue journée . </p>
                    </div>
                </div>
            </div>
            <Footer session={session} />



        </Container>
    </>
)

export default Home