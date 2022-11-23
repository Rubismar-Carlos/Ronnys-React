// css
import styles from './Footer.module.css'

// Imagem
import ImgWhats from './imagem/whatsapp.png'
import ImgTelefone from './imagem/telefone.png'

const Footer = () => {
  return (
    <footer>
      <div className={styles.lojas}>
        <div className={styles.box_lojas}>
            <h4>Residencial Katia</h4>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5562981691148&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido."without rel="noreferrer" target={'_blank'}>
                <div className={styles.box_contato}>
                  <img src={ImgWhats} alt="Whatsapp" />
                  <p>62 98169-1148</p>
                </div>
              </a>
              <div className={styles.box_contato}>
                <img src={ImgTelefone} alt="Telefone" />
                <p> 3575-8832</p>
              </div>
            </div>
            <p>Av. Eli Alves Forte Residencial Katia</p>
            <p>Goiânia - GO</p>
            <p>Horário de Funcionamento: 18:00h às 01:00h.</p>
        </div>
        <div className={styles.box_lojas}>
            <h4>Jardim Guanabara</h4>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5562984641697&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." without rel="noreferrer" target={'_blank'}>
                <div className={styles.box_contato}>
                  <img src={ImgWhats} alt="Whatsapp" />
                  <p>62 98464-1697</p>
                </div>
              </a>
              <div className={styles.box_contato}>
                <img src={ImgTelefone} alt="Telefone" />
                <p> 3208-1697</p>
              </div>
            </div>
            <p>Av. Vera Cruz Qd.110 lt.01</p>
            <p>Goiânia - GO</p>
            <p>Horário de Funcionamento: 18:00h às 01:00h.</p>
        </div>
        <div className={styles.box_lojas}>
            <h4>Vila Pedroso</h4>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5562983240276&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." without rel="noreferrer" target={'_blank'}>
                <div className={styles.box_contato}>
                  <img src={ImgWhats} alt="Whatsapp" />
                  <p>62 98324-0276</p>
                </div>
              </a>
              <div className={styles.box_contato}>
                <img src={ImgTelefone} alt="Telefone" />
                <p> 3565-3853</p>
              </div>
            </div>
            <p>Vila Concórdia</p>
            <p>Goiânia - GO</p>
            <p>Horário de Funcionamento: 18:00h às 01:00h.</p>
        </div>
        <div className={styles.box_lojas}>
            <h4>Conjunto Vera Cruz</h4>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5562991908496&text=Ol%C3%A1%2C%20Queria%20fazer%20um%20pedido." without rel="noreferrer" target={'_blank'}>
                <div className={styles.box_contato}>
                    <img src={ImgWhats} alt="Whatsapp" />
                    <p>62 99190-8496</p>
                </div>
              </a>
              <div className={styles.box_contato}>
                  <img src={ImgTelefone} alt="Telefone" />
                  <p> Não disponivel</p>
              </div>
            </div>
            <p>Av. La Paz, 390</p>
            <p>Goiânia - GO</p>
            <p>Horário de Funcionamento: 18:00h às 01:00h.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer