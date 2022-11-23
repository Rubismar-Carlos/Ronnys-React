// css
import styles from './Lojas.module.css'

// Imagem
import ImgKatia from './Imagem/ronnys - katia.jpg'
import ImgGuanabara from './Imagem/ronnys - guanabara.png'
import ImgPedroso from './Imagem/ronnys - pedroso.png'
import ImgVeraCruz from './Imagem/ronnys - vera cruz.png'
import ImgWhats from './Imagem/whatsapp.png'
import ImgTelefone from './Imagem/telefone.png'

const Lojas = () => {
  return (
    <div>
        <h2>Encontre uma de nossas lojas</h2>
        <p>Encontre uma de nossas sanduícherias proximo de você.</p>
        <p>Funcionamento de Segunda a Segunda das 18:00 às 01:00.</p>

        <div className={styles.loja_a}>

          <div className={styles.lojas_ctt}>

            <h2>Residencial Katia</h2>
            <p>Av. Eli Alves Forte Residencial Katia</p>
            <p>Goiânia - GO</p>
            <a 
              href="https://www.google.com/maps/place/Ronnys+Sanduicheria+-+Residencial+Katia/@-16.734475,-49.357759,18z/data=!4m12!1m6!3m5!1s0x0:0x7aa305f8d7ddecd0!2sRonnys+Sanduicheria+-+Residencial+Katia!8m2!3d-16.734483!4d-49.3585963!3m4!1s0x0:0x7aa305f8d7ddecd0!8m2!3d-16.734483!4d-49.3585963?hl=pt-BR" 
              without rel="noreferrer" 
              target={'_blank'}>
              <h4>Clique aqui para abrir a Localização</h4>
            </a>

            <a 
              href="https://api.whatsapp.com/send?phone=5562981691148&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." 
              without rel="noreferrer" 
              target={'_blank'}>
                <div className={styles.box_contato}>
                    <img src={ImgWhats} alt="Whatsapp" />
                    <h4>62 98169-1148</h4>
                </div>
              </a>
              <div className={styles.box_contato}>
                  <img src={ImgTelefone} alt="Telefone" />
                  <h4>3575-8832</h4>
              </div>

          </div>
          <div className={styles.box_img}>
              <img src={ImgKatia} alt="Sanduicheria Katia" />
          </div>
        </div>

        <div className={styles.loja_b}>

          <div className={styles.lojas_ctt}>

            <h2>Jardim Guanabara</h2>
            <p>Av. Vera Cruz Qd.110 lt.01</p>
            <p>Goiânia - GO</p>
            <a 
              href="https://www.google.com/maps/place/Ronny+sanduicheira/@-16.620707,-49.21191,20z/data=!4m12!1m6!3m5!1s0x0:0xfb214c1fbc1f4e23!2sRonny+sanduicheira!8m2!3d-16.6207435!4d-49.2118957!3m4!1s0x0:0xfb214c1fbc1f4e23!8m2!3d-16.6207435!4d-49.2118957?hl=pt-BR" 
              without rel="noreferrer" 
              target={'_blank'}>
            <h4>Clique aqui para abrir a Localização</h4>
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=5562984641697&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." 
            without rel="noreferrer" 
            target={'_blank'}>
                <div className={styles.box_contato}>
                    <img src={ImgWhats} alt="Whatsapp" />
                    <h4>62 98464-1697</h4>
                </div>
              </a>
              <div className={styles.box_contato}>
                  <img src={ImgTelefone} alt="Telefone" />
                  <h4>3208-1697</h4>
              </div>

          </div>
          <div className={styles.box_img}>
              <img src={ImgGuanabara} alt="Sanduicheria Guanabara" />
          </div>
        </div>

        <div className={styles.loja_a}>

          <div className={styles.lojas_ctt}>

            <h2>Vila Pedroso</h2>
            <p>Vila Concórdia</p>
            <p>Goiânia - GO</p>
            <a 
              href="https://www.google.com/maps/place/Ronny's+Sanduicheria/@-16.659584,-49.18445,16z/data=!4m12!1m6!3m5!1s0x0:0x15099258400df2cb!2sRonny's+Sanduicheria!8m2!3d-16.6596044!4d-49.1844356!3m4!1s0x0:0x15099258400df2cb!8m2!3d-16.6596044!4d-49.1844356?hl=pt-BR" 
              without rel="noreferrer" 
              target={'_blank'}>
              <h4>Clique aqui para abrir a Localização</h4>
            </a>

            <a 
              href="https://api.whatsapp.com/send?phone=5562983240276&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." 
              without rel="noreferrer" 
              target={'_blank'}>
                <div className={styles.box_contato}>
                    <img src={ImgWhats} alt="Whatsapp" />
                    <h4>62 98324-0276</h4>
                </div>
              </a>
              <div className={styles.box_contato}>
                  <img src={ImgTelefone} alt="Telefone" />
                  <h4> 3565-3853</h4>
              </div>

          </div>
          <div className={styles.box_img}>
              <img src={ImgPedroso} alt="Sanduicheria Pedroso" />
          </div>
        </div>

        <div className={styles.loja_b}>

          <div className={styles.lojas_ctt}>
            <h2>Conjunto Vera Cruz</h2>
            <p>Av. La Paz, 390</p>
            <p>Goiânia - GO</p>
            <a 
              href="https://www.google.com/maps?ll=-16.685411,-49.372766&z=12&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=16670327136268014492" 
              without rel="noreferrer" 
              target={'_blank'}>
              <h4>Clique aqui para abrir a Localização</h4>
            </a>

              <a 
                href="https://api.whatsapp.com/send?phone=5562991908496&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." 
                without rel="noreferrer" 
                target={'_blank'}>
                <div className={styles.box_contato}>
                    <img src={ImgWhats} alt="Whatsapp" />
                    <h4>62 99190-8496</h4>
                </div>
              </a>
              <div className={styles.box_contato}>
                  <img src={ImgTelefone} alt="Telefone" />
                  <h4> Não disponivel</h4>
              </div>
          </div>

          <div className={styles.box_img}>
              <img src={ImgVeraCruz} alt="Sanduicheria Vera Cruz" />
          </div>
        </div>

    </div>
  )
}

export default Lojas