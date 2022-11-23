// css
import styles from './Bebidas.module.css'

// router 
import { Link } from 'react-router-dom'

// imagems
import ImgLimao from './imagem/limao - bebidas.png'
import ImgAcai from './imagem/acai - bebidas.png'
import ImgOvomal from './imagem/ovomaltine - bebidas.png'

const Bebidas = () => {
  return (
    <div>
        <p className={styles.inf_cardapio}>Cardápio - <span>Bebidas</span></p>
        <p>Temos <span>refrigerante</span>, <span>sucos</span> e <span>milkshakes</span>.</p>
        <p><span>Açai</span> acompanha uma granola.</p>

      {/* Buttons navegation */}

      <div className={styles.box_btns}>
          <button className={styles.btn_lanches}><Link to='/sanduiches'><h4>Sanduíches</h4></Link></button>
          <button className={styles.btn_lanches} ><Link to='/combos'><h4>Combos</h4></Link></button>
          <button className={styles.btn_lanches}><Link to='/bebidas'><h4 style={{color: 'yellow'}}>Bebidas</h4></Link></button>
          <button className={styles.btn_lanches}><Link to='/adicionais'><h4>Adicionais</h4></Link></button>    
      </div>

      {/* Menu bebidas */}
      <div className={styles.menu_bebidas}>

        <div className={styles.box_bebidas}>
          <h2>Sucos</h2>
          <div className={styles.bebidas}>
            <div>
              <h4>Maracujá</h4>
              <h4>Morango</h4>
              <h4>Cupuaçú</h4>
              <h4>Laranja</h4>
              <h4>Caju</h4>
              <h4>Goiaba</h4>
              <h4>Manga</h4>
              <h4>Abacaxi</h4>
              <h4>Graviola</h4>
              <h4>Acerola</h4>
              <h4>Uva</h4>
              <h4>Tamarindo</h4>
            </div>
            <div>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
              <h4>8,00</h4>
            </div>
          </div>
        </div>

        <div className={styles.box_bebidas}>
          <h2>Sucos combinados</h2>
          <div className={styles.bebidas}>
            <div>
              <h4>Abacaxi com<p>Hortelã</p></h4>
              <h4>Abacaxi com<p>Laranja</p></h4>
              <h4>Acerola com<p>Laranja</p></h4>
              <h4>Mamão com <p>Laranja</p></h4>
              <h4>Morango com <p>Laranja</p></h4>
            </div>
            <div className={styles.price_bebidas}>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
            </div>
          </div>
        </div>

        <div className={styles.box_bebidas}>
          <h2>MilkShakes</h2>
          <div className={styles.bebidas}>
            <div>
              <h4>Açai</h4>
              <h4>Maracujá</h4>
              <h4>Morango</h4>
              <h4>Cupuaçú</h4>
              <h4>Goiaba</h4>
              <h4>Acerola</h4>
              <h4>Graviola</h4>
              <h4>Manga</h4>
              <h4>Mamão papaya</h4>
              <h4>Uva</h4>
              <h4>Tamarindo</h4>
            </div>
            <div>
              <h4>18,00</h4>
              <h4>11,00</h4>
              <h4>11,00</h4>
              <h4>11,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
              <h4>9,00</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.outras_bebidas}>
        <div className={styles.box_outras_bebidas}>
            <h2>Ovomaltine</h2>
            <h4>20,00</h4>
          <div>
            <img src={ImgOvomal} alt="Ovomaltine" />
          </div>
        </div>
        <div className={styles.box_outras_bebidas}>
          <h2>Açai</h2>
          <h4>20,00</h4>
          <div>
            <img src={ImgAcai} alt="Açai" />
          </div>
        </div>
        <div className={styles.box_outras_bebidas}>
          <h2>Limão</h2>
          <h4>20,00</h4>
          <div>
            <img src={ImgLimao} alt="Milkshake de Limão" />
          </div>
        </div>
      </div>

      {/* Refrigerantes */}
      <div className={styles.refrigerantes}>
        <h2>Refrigerantes</h2>
        <p>Temos os refrigerantes: <span>Coca-Cola</span>, <span>Guaraná</span> e <span>Fanta</span>.</p>
        <div className={styles.refri_product}>
          <div>
            <h4>Refrigerante 1,5 L</h4>
            <h4>Refrigerante 600 ML</h4>
            <h4>Refrigerante lata</h4>
            <h4>H2O limoneto</h4>
            <h4>Água Mineral com <p>Gás</p></h4>
            <h4>Água Mineral sem <p>Gás</p></h4>
          </div>
          <div>
            <h4>9,00</h4>
            <h4>6,00</h4>
            <h4>5,00</h4>
            <h4>5,00</h4>
            <h4>3,50</h4>
            <h4 style={{paddingTop: '23px'}}>3,00</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bebidas