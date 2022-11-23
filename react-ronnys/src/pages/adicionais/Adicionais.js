// css
import styles from './Adicionais.module.css'

// router
import { Link } from 'react-router-dom'

const Adicionais = () => {
  return (
    <div>
        <p className={styles.inf_cardapio}>Cardápio - <span>Adicionais</span></p>
        <p>Confira todas as adicionais para <span>sanduíches</span> e <span>açai</span>.</p>

      {/* Buttons navegation */}

      <div className={styles.box_btns}>
          <button className={styles.btn_lanches}><Link to='/sanduiches'><h4>Sanduíches</h4></Link></button>
          <button className={styles.btn_lanches} ><Link to='/combos'><h4 >Combos</h4></Link></button>
          <button className={styles.btn_lanches}><Link to='/bebidas'><h4>Bebidas</h4></Link></button>
          <button className={styles.btn_lanches}><Link to='/adicionais'><h4 style={{color: 'yellow'}}>Adicionais</h4></Link></button>    
      </div>

      {/* Menu adicionais */}
      <div>
        <h2>Carnes</h2>
        <p>Todos os sanduiches já vem com <span>hambúrgue</span> de carne tradicional.</p>
        <p>Você pode efetuar a <span>troca</span> da carne por pouca <span>diferença</span>.</p>
        <div className={styles.carnes}>
            <div>
                <h4>Fíle de frango</h4>
                <h4>Fíle suino</h4>
                <h4>Hambúrguer de Picanha 90g</h4>
                <h4>Max Burguer de 120g</h4>
                <h4>Fíle mignom</h4>
            </div>
            <div>
                <h4>1,00</h4>
                <h4>1,00</h4>
                <h4>2,50</h4>
                <h4>4,00</h4>
                <h4>5,00</h4>
            </div>
        </div>
        <p>Lembrando que esses <span>valores são referentes a troca de carne do sanduiche</span>.</p>
      </div>

      <div>
        <h2>Adicionais para Açai</h2>
        <p>O <span>açai</span> já acompanha uma <span>granola</span>.</p>
        <div className={styles.acai}>
          <div>
              <h4>Morango</h4>
              <h4>Leite Condesado</h4>
              <h4>Banana picada</h4>
              <h4>Granola</h4>
          </div>
          <div>
              <h4>2,00</h4>
              <h4>2,50</h4>
              <h4>1,00</h4>
              <h4>2,00</h4>
          </div>
        </div>
      </div>

      <div>
        <h2>Adicionais para sanduíches</h2>
        <p>No <span>pão sírio</span> para 2 pessoas e cobrado o <span>valor duplo de adicionais</span>.</p>
        <p>Adicionais de <span>Abacaxi, Cebola, Batata Palha e Milho</span> são <span>gratis</span>.</p>
        <div className={styles.adc_sanduiches}>
          <div>
              <h4>Catupiry</h4>
              <h4>Cheddar Fatiado</h4>
              <h4>Linguiça Defumada</h4>
              <h4>Fíle Suino</h4>
              <h4>Salsicha</h4>
              <h4>Hambúrguer Bovino</h4>
              <h4>Hambúrguer Picanha 90g</h4>
              <h4>Max Burguer 120g</h4>
              <h4>Fíle de Frango</h4>
              <h4>Fíle Mignom</h4>
              <h4>Mussarela</h4>
              <h4>Presunto</h4>
              <h4>Bacon</h4>
              <h4>Ovo</h4>
              <h4>Pão de Hambúrguer</h4>
              <h4>Pão Sírio Pequeno</h4>
              <h4>Pão Sírio Grande</h4>
          </div>
          <div>
              <h4>5,00</h4>
              <h4>5,00</h4>
              <h4>4,00</h4>
              <h4>7,50</h4>
              <h4>2,00</h4>
              <h4>6,50</h4>
              <h4>9,50</h4>
              <h4>11,00</h4>
              <h4>7,50</h4>
              <h4>11,50</h4>
              <h4>4,00</h4>
              <h4>1,50</h4>
              <h4>4,00</h4>
              <h4>1,50</h4>
              <h4>4,50</h4>
              <h4>4,50</h4>
              <h4>9,00</h4>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Adicionais