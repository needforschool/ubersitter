import Navbar from '@components/Navbar';
import Container from '@components/Container'
import Image from '@components/Image'
import Link from '@components/Link'
import Button from '@components/Button'


import homeStyles from '@styles/modules/Home.module.scss'

const Home = () => (
    <>
        <Navbar />
        <Container>
            <div className={homeStyles.image_font}>
                <Image className={homeStyles.container} src="/assets/img/deux-enfants.jpg" alt="cool" />
            </div>

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
                        <Image src="/assets/img/homme-portant-enfant-small.jpg" alt="cool" />
                        <p>Nous accompagons et cherchons vos enfants à la sortie de son école, puis le ramenons a votre domicile
                                Nous lui donnons aussi un gouter </p>
                    </div>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} >Les devoirs</h2>
                        </div>
                        <Image src="/assets/img/homme-dessine-enfant.jpg" alt="cool" />
                        <p>Nous aidons l'enfant à faire ces devoirs, et nous prenons du temps à lui expiquer de si il n'a pas bien compris.
                              Nous sommes parfois amenés à refaire tout  </p>
                    </div>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} > Les Repas </h2>
                        </div>
                        <Image src="/assets/img/enfant-dors.jpg" alt="cool" />
                        <p> Une fois  que tout est accomplie arrive l'heure ou doit se coucher l'enfant pour récupérer de se longue journée . </p>
                    </div>
                    <div className={homeStyles['content-item']}>
                        <div className={homeStyles.trois_photo}>
                            <h2 className={homeStyles.h2_title} > La sièste </h2>
                        </div>
                        <Image src="/assets/img/enfant-dors.jpg" alt="cool" />
                        <p> Une fois  que tout est accomplie arrive l'heure ou doit se coucher l'enfant pour récupérer de se longue journée . </p>
                    </div>
                </div>
            </div>



            <div>
                <div>
                    <div>
                        <div className={homeStyles.picto}>
<img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NTQuOTc2NTYyIDk0LjUzOTA2MmMwIDM0LjQ2ODc1LTI3Ljk0MTQwNiA2Mi40MTAxNTctNjIuNDA2MjUgNjIuNDEwMTU3LTM0LjQ2ODc1IDAtNjIuNDEwMTU2LTI3Ljk0MTQwNy02Mi40MTAxNTYtNjIuNDEwMTU3IDAtMzQuNDY0ODQzIDI3Ljk0MTQwNi02Mi40MDYyNSA2Mi40MTAxNTYtNjIuNDA2MjUgMzQuNDY0ODQ0IDAgNjIuNDA2MjUgMjcuOTQxNDA3IDYyLjQwNjI1IDYyLjQwNjI1em0wIDAiLz48cGF0aCBkPSJtMjg0LjU1MDc4MSAxNzUuMzc4OTA2LTI5LjYyMTA5My00NC40MTc5Njh2LTc1Ljc4OTA2M2MwLTMwLjI0MjE4Ny0yNC4zOTA2MjYtNTUuMTcxODc1LTU1LjE2MDE1Ny01NS4xNzE4NzVoLTE0NC41OTc2NTZjLTMwLjYxMzI4MSAwLTU1LjE3MTg3NSAyNC43ODEyNS01NS4xNzE4NzUgNTUuMTcxODc1djg4LjM1OTM3NWMwIDMwLjMyMDMxMiAyNC40Njg3NSA1NS4xNjc5NjkgNTUuMTcxODc1IDU1LjE2Nzk2OWgyMTYuODk4NDM3YzExLjk0OTIxOSAwIDE5LjEyMTA5NC0xMy4zNTkzNzUgMTIuNDgwNDY5LTIzLjMyMDMxM3ptLTE1Ny41MDM5MDYtMzIuOTEwMTU2aC00Ny4zNTkzNzVjLTguMDc4MTI1IDAtMTUuMDI3MzQ0LTYuMjE0ODQ0LTE1LjQwMjM0NC0xNC4yODUxNTYtLjM5NDUzMS04LjYxNzE4OCA2LjQ1NzAzMi0xNS43MTQ4NDQgMTQuOTg0Mzc1LTE1LjcxNDg0NGg0OC4yMDMxMjVjOC41MTE3MTkgMCAxNS4zNzg5MDYgNy4wOTc2NTYgMTQuOTgwNDY5IDE1LjcxMDkzOC0uMzcxMDk0IDguMDc0MjE4LTcuMzI0MjE5IDE0LjI4OTA2Mi0xNS40MDYyNSAxNC4yODkwNjJ6bTQ4LjYyNS01Ni4yMzgyODFoLTk1Ljk3NjU2M2MtOC4wNzQyMTggMC0xNS4wMTk1MzEtNi4xOTkyMTktMTUuNDA2MjUtMTQuMjYxNzE5LS40MTQwNjItOC42MTcxODggNi40NDUzMTMtMTUuNzM4MjgxIDE0Ljk4MDQ2OS0xNS43MzgyODFoOTUuOTc2NTYzYzguMDgyMDMxIDAgMTUuMDM1MTU2IDYuMjE0ODQzIDE1LjQwNjI1IDE0LjI4OTA2Mi4zOTg0MzcgOC42MTMyODEtNi40Njg3NSAxNS43MTA5MzgtMTQuOTgwNDY5IDE1LjcxMDkzOHptMCAwIi8+PHBhdGggZD0ibTExNi40ODQzNzUgMzcyLjE1MjM0NGMtNjQuNjA1NDY5LjIyMjY1Ni0xMTYuNDg0Mzc1IDUzLjU1ODU5NC0xMTYuNDg0Mzc1IDExOC4xNjQwNjJ2My4yODkwNjNjMCAxMC4xNjAxNTYgOC4yMzQzNzUgMTguMzk0NTMxIDE4LjM5NDUzMSAxOC4zOTQ1MzFoMTk3LjAwMzkwN2MxMC4xNjAxNTYgMCAxOC4zOTQ1MzEtOC4yMzQzNzUgMTguMzk0NTMxLTE4LjM5NDUzMXYtNC41NTg1OTRjMC02NC42OTkyMTktNTIuNTU4NTk0LTExNy4xMjEwOTQtMTE3LjMwODU5NC0xMTYuODk0NTMxem0wIDAiLz48cGF0aCBkPSJtMTkwLjUwNzgxMiAyOTguNTQyOTY5YzAgNDAuNjUyMzQzLTMyLjk1MzEyNCA3My42MDkzNzUtNzMuNjA5Mzc0IDczLjYwOTM3NS00MC42NTIzNDQgMC03My42MDkzNzYtMzIuOTU3MDMyLTczLjYwOTM3Ni03My42MDkzNzUgMC00MC42NTIzNDQgMzIuOTU3MDMyLTczLjYwOTM3NSA3My42MDkzNzYtNzMuNjA5Mzc1IDQwLjY1NjI1IDAgNzMuNjA5Mzc0IDMyLjk1NzAzMSA3My42MDkzNzQgNzMuNjA5Mzc1em0wIDAiLz48cGF0aCBkPSJtNDg3LjIzMDQ2OSAyNDFoLTE4OS4zMzIwMzFjNS41ODIwMzEtNDcuMzI4MTI1IDQ1LjgzMjAzMS04NC4wNTA3ODEgOTQuNjcxODc0LTg0LjA1MDc4MSA0OC44MjgxMjYgMCA4OS4wNzgxMjYgMzYuNzIyNjU2IDk0LjY2MDE1NyA4NC4wNTA3ODF6bTAgMCIvPjxwYXRoIGQ9Im00OTcgMjcyYzguMjg1MTU2IDAgMTUgNi43MTQ4NDQgMTUgMTV2MTc3Ljg3MTA5NGMwIDguNTE5NTMxLTcuMTA5Mzc1IDE1LjM5MDYyNS0xNS43MzA0NjkgMTQuOTgwNDY4LTguMDU4NTkzLS4zODI4MTItMTQuMjY5NTMxLTcuMzMyMDMxLTE0LjI2OTUzMS0xNS40MTAxNTZ2LTE2LjcxMDkzN2gtMjI0LjEyODkwNmMtMTAuMDgyMDMyLTM0LjMyMDMxMy0zMi4zNzEwOTQtNjMuNDgwNDY5LTYxLjgzOTg0NC04Mi4zOTA2MjUgMTUuMjU3ODEyLTE4LjA1MDc4MiAyNC40ODA0NjktNDEuMzcxMDk0IDI0LjQ4MDQ2OS02Ni44MDA3ODIgMC05LjE2Nzk2OC0xLjIwMzEyNS0xOC4wNTg1OTMtMy40NTMxMjUtMjYuNTM5MDYyem0wIDAiLz48L3N2Zz4=" />                        </div>
                        <div>
                            <h3>A propos de nous</h3>
                        </div>
                        <p className={homeStyles.paragraph}> Découvrer qui nous sommes </p>
                        <Link href="https://google.com">En savoir plus</Link>
                    </div>
                </div>

            </div>
        </Container>
    </>
)
export default Home