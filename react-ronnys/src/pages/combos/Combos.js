import styles from './Combos.module.css'

// router
import { Link } from 'react-router-dom'

// imagems
import ImgBatatas from './imagem/batata-combos.png'

const Combos = () => {
  return (
    <div>
        <p className={styles.inf_cardapio}>Cardápio - <span>Combos</span></p>
        <p>O combo acompanha refrigerante lata e batata pequena.</p>
        <p><span>Refrigerantes</span>: Coca-Cola, Guarana e Fanta.</p>

      {/* Buttons navegation */}

      <div className={styles.box_btns}>
          <button className={styles.btn_lanches}><Link to='/sanduiches'><h4>Sanduíches</h4></Link></button>
          <button className={styles.btn_lanches} ><Link to='/combos'><h4 style={{color: 'yellow'}}>Combos</h4></Link></button>
          <button className={styles.btn_lanches}><Link to='/bebidas'><h4>Bebidas</h4></Link></button>
          <button className={styles.btn_lanches}><Link to='/adicionais'><h4>Adicionais</h4></Link></button>    
      </div>

      {/* Menus lanche */}
      <div className={styles.box_products}>
          <div className={styles.products}>
            <div className={styles.product}>
                <div className={styles.product_name}><h4>Combo Junior</h4></div>
                <div className={styles.product_price}><h4>24,00</h4></div>
              </div>
              <h5>Pão, hambúrguer, mussarela, alface e tomate.</h5>
          
              <div className={styles.product}>
                <div className={styles.product_name}><h4>Combo Burguer</h4></div>
                <div className={styles.product_price}><h4>28,50</h4></div>
              </div>
              <h5>Pão, 2 hambúrguer, mussarela, alface e tomate.</h5>

              <div className={styles.product}>
                <div className={styles.product_name}><h4>Combo Cheddar</h4></div>
                <div className={styles.product_price}><h4>30,00</h4></div>
              </div>
              <h5>Pão, 2 hambúrguer, 2 queijo cheddar, alface e tomate.</h5>

              <div className={styles.product}>
                <div className={styles.product_name}><h4>Combo Picanha</h4></div>
                <div className={styles.product_price}><h4>35,00</h4></div>
              </div>
              <h5>Pão, 2 hambúrguer de picanha, mussarela, alface e tomate.</h5>

              <div className={styles.product}>
                <div className={styles.product_name}><h4>Combo Cheddar Picanha</h4></div>
                <div className={styles.product_price}><h4>36,00</h4></div>
              </div>
              <h5>Pão, 2 hambúrguer de picanha, queijo cheddar, alface e tomate.</h5>
          </div>
        </div>

        <div className={styles.batatas}>
          <h2>Batata Frita</h2>
          <div className={styles.price_batatas}>
            <div>
              <div> <h4>Grande</h4></div>
              <div><h4>Pequena</h4></div>
            </div>
            <div>
              <div><h4>13,00</h4></div>
              <div><h4>11,00</h4></div>
            </div>
          </div>
          <div className={styles.img_batatas}>
            <img src={ImgBatatas} alt="Batatas fritas" />
          </div>
        </div>
    </div>
  )
}

export default Combos