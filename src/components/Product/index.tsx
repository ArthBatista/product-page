import React from 'react';

import foneImage from '../../assets/fone.png'
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { Container, Row, Panel, Column, Gallery, Section, Description  } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row> {/*Row: Linha*/}
       <a href="https://github.com/ArthBatista">Compartilhar</a>
       <a href="https://github.com/ArthBatista">Vender um igual</a>
      </Row>

      <Panel>
        <Column>{/*Coluna da esquerda*/}
           <Gallery>
             {/*Galeria de fotos do produto*/}
               <img alt="T-Shirt" src={foneImage} />
             </Gallery> 

             <Info /> {/*Descrição do produto*/} {/*Coponentes criado ali me baixo*/}
        </Column>

        <Column> {/*Coluna da direita*/}
          <ProductAction /> {/*Info de pagamento e compra */}
         <SellerInfo /> {/*Informações do vendedor*/}

        <WarrantySection /> {/*Sessão de garantia*/}
        <WarrantySection /> 
        <WarrantySection /> 
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => ( 
  <Section> {/*Criada no styles-components*/}
  <h4>Garantia</h4>
  <div>
    <span> {/*texto da garatina*/}
      <p className="title">Compra garantia com o Irineu</p>
      <p className="description">Receba o produto que voce esta espereando ou devolvemos o seu dinheiro</p>
    </span>
    <span> {/*texto da garatina*/}
      <p className="title">Garantia do vendedor</p>
      <p className="description">Sem garantia</p>
    </span>
    </div>   

    <a href="https://github.com/ArthBatista" target="_blank" >Saiba mais sobre a garantia</a>
  </Section>
)

const Info = () => (
  // Preenchendo valor(informações) do componente Info
  <Description> {/*Descrição do produto*/} {/*Description: criado no styles-components*/}
       <h2>Loren inpsun</h2>

     <p>
     ------------------------------------------------------------
     -------------------------------------------------------------
     -------------------------------------------------------------
     ------------------------------------------------------------- 
     
     <br />
     <br />
    Itens inclusos: <br />
    - Microfone <br />
    - Adesivo <br />
    - ultimate gerantion <br />
    - sorry <br />
    <br />
    ------------------------------------------------------------------
    ------------------------------------------------------------------
    ------------------------------------------------------------------
    ------------------------------------------------------------------
    </p>
  </Description>
)

export default Product;
