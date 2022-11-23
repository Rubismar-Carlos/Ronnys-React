// css
import styles from './Sanduiches.module.css'

// router
import { Link } from 'react-router-dom'

// imagem
import ImgMolho from './imagem/molho-x.png'

const Sanduiches = () => {
  return (
    <div>
       <p className={styles.inf_cardapio}>Cardápio - <span>Sanduíches</span></p>
       <p>Temos sanduíches e pão sírio <span>que serve até 2 pessoas</span>.</p>
       <p>Você pode <span>troca o pão do sanduíche pelo pão de sirío</span>.</p>

        {/* Buttons navegation */}

      <div className={styles.box_btns}>
        <button className={styles.btn_lanches}><Link to='/sanduiches'><h4 style={{color: 'yellow'}}>Sanduíches</h4></Link></button>
        <button className={styles.btn_lanches}><Link to='/combos'><h4>Combos</h4></Link></button>
        <button className={styles.btn_lanches}><Link to='/bebidas'><h4>Bebidas</h4></Link></button>
        <button className={styles.btn_lanches}><Link to='/adicionais'><h4>Adicionais</h4></Link></button>    
      </div>

      {/* Menus lanche */}
      <div className={styles.box_products}>
        

        <div className={styles.products}>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Infantil</h4></div>
            <div className={styles.product_price}><h4>10,00</h4></div>
          </div>
          <h5>Pão, hambúrguer, mussarela, alface e tomate..</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Simples</h4></div>
            <div className={styles.product_price}><h4>15,00</h4></div>
          </div>
          <h5>Pão, carne, mussarela, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Especial</h4></div>
            <div className={styles.product_price}><h4>16,00</h4></div>
          </div>
          <h5>Pão, carne, mussarela, ovo, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Bacon Simples</h4></div>
            <div className={styles.product_price}><h4>18,50</h4></div>
          </div>
          <h5>Pão, carne, mussarela, bacon, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Bacon Especial</h4></div>
            <div className={styles.product_price}><h4>19,50</h4></div>
          </div>
          <h5>Pão, carne, mussarela, bacon, ovo, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Catupiry Simples</h4></div>
            <div className={styles.product_price}><h4>19,00</h4></div>
          </div>
          <h5>Pão, carne, mussarela, catupiry, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Catupiry Especial</h4></div>
            <div className={styles.product_price}><h4>20,00</h4></div>
          </div>
          <h5>Pão, carne, mussarela, catupiry, ovo, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Cheddar Simples</h4></div>
            <div className={styles.product_price}><h4>19,00</h4></div>
          </div>
          <h5>Pão, carne, cheddar fatiado, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Cheddar Especial</h4></div>
            <div className={styles.product_price}><h4>20,00</h4></div>
          </div>
          <h5>Pão, carne, cheddar fatiado, ovo, alface, tomate, milho e batata palha.</h5>

          <div className={styles.product}>
            <div className={styles.product_name}><h4>Tudo</h4></div>
            <div className={styles.product_price}><h4>22,50</h4></div>
          </div>
          <h5>Pão, carne, mussarela, presunto, bacon, ovo, salsicha, alface, tomate, milho e batata palha.</h5>
          
          <div className={styles.product}>
            <div className={styles.product_name}><h4>Ronny's</h4></div>
            <div className={styles.product_price}><h4>23,50</h4></div>
          </div>
          <h5>Pão, Hamburguer, mussarela, presunto, ovo, bacon, linguiça defumada, alface, tomate, milho e batata.</h5>
        </div>

      </div>

      <div className={styles.sanduiche_sirio}>
        <h2>Pão sírio</h2>
        <p>Pão sírio e partido em 4 pedaços e <span>serve 2 pessoas</span>.</p>


        <div className={styles.box_products}>
          <div className={styles.products}>
            <div className={styles.product}>
                <div className={styles.product_name}><h4>Simples</h4></div>
                <div className={styles.product_price}><h4>30,00</h4></div>
              </div>
              <h5>Pão sírio, 2 carne, 2 mussarela, alface e tomate.</h5>
          
              <div className={styles.product}>
                <div className={styles.product_name}><h4>Especial</h4></div>
                <div className={styles.product_price}><h4>32,00</h4></div>
              </div>
              <h5>Pão sírio, 2 carne, 2 mussarela, 2 ovo, alface e tomate.</h5>
          </div>
        </div>
        
      </div>

    <div className={styles.molho}>
      <h2>Molho de Ervas</h2>
      <p>Otimo acompanhamento para <span>sanduiches e batatas fritas</span>.</p>
      <h4>2,50</h4>
      <div>
        <img src={ImgMolho} alt="Molho de ervas" />
      </div>
    </div>

    </div>
  )
}

export default Sanduiches