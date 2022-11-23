// css
import styles from './Home.module.css'

// router
import { Link } from 'react-router-dom'

// imagems
import Logo from './imagem/logo-home.png'
import ImgBebidas from './imagem/bebidas-home.png'
import ImgSanduiche from './imagem/sanduiches-home.png'
import ImgCombo from './imagem/combo-home.png'
import ImgSobre from './imagem/katia-home.jpg'
import ImgInstagram from './imagem/instagram.png'

const Home = () => {

  return (
    <div>

        {/* Slogamm */}

        <div className={styles.slogam}>
            <img src={Logo} alt="logo empresa" />
        </div>

        {/* Menu de lanches */}

        <h1>VAMOS <br /> HOJE DE ?</h1>
        <div className={styles.lanches}>
            <Link to='/sanduiches' className={styles.links}>
                <div className={styles.box_lanche}>
                    <div className={styles.img_lanche}>
                        <img src={ImgSanduiche} alt="Sanduiches" />
                    </div>
                    <h3>Sanduíche</h3>
                </div>
            </Link>
            <Link to='/bebidas' className={styles.links}>
                <div className={styles.box_lanche}>
                <div className={styles.img_lanche}>
                    <img src={ImgBebidas} alt="Bebidas" />
                </div>
                    <h3>Açai, Creme e Suco</h3>
                </div>
            </Link>
            <Link to='/combos' className={styles.links}>
                <div className={styles.box_lanche}>
                    <div className={styles.img_lanche}>
                        <img src={ImgCombo} alt="Combos" />
                    </div>
                    <h3>Combos</h3>
                </div>
            </Link>
        </div>

        {/* Sobre a empresa */}

        <div className={styles.informativo_sobre}>
            <h2>SOBRE</h2>
            <div className={styles.sobre}>
                <div className={styles.sobre_img}>
                    <img src={ImgSobre} alt="Sanduicheria katia" />
                </div>
                <div className={styles.sobre_txt}>
                    <p>
                        Somos uma empresa genuinamente goiania criada por Ronir Sanches. Ronir, com apenas 12 anos começou a trabalhar no pit dog de seu tio no interior em sua cidade natal, aprendeu a fazer sanduíche do jeito mais caseiro e tradicional; Amassando bolinhas de almôndegas com o tempo foi gostando e criando amor pelo o que estava fazendo e seu sonho de ter seu próprio negócio foi só crescendo.
                    </p>
                    <p>
                        Quando ele passava enfrente a uma rotátoria havia uma sala comercial onde ali ele imaginava que seria um ótimo ponto para seu primeiro negócio, nesse mesmo lugar hoje está localizada a matriz <span>“RONNY’S”</span>. Com muita dedicação e esforço ele e seu irmão "Roney" se juntaram e conseguiram abrir o próprio negócio entregando o melhor sanduiche de sua região.
                    </p>
                </div>
            </div>
        </div>

        {/* Instagram */}

        <div className={styles.instagram}>
            <h4>
                Siga a gente no instagram <br />
                e fique por dentro das novidades.
            </h4>
            <div className={styles.instagram_logo}>
                <a href="https://www.instagram.com/ronnys.sanduicheria/" without rel="noreferrer" target={'_blank'}>
                    <div>
                        <img src={ImgInstagram} alt="imagem instagram" />
                    </div>
                    <div>
                        <h4>@sanduicheriaronnys</h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home