import React from 'react';

import {Container,Condition,Row,HeartIcon,DispatchTag,PriceCard,PriceRow,InstallmentsInfo,StockStatus,MethodCard,CheckIcon,
  Actions,Button,Benefits,ShieldIcon, } from './styles';

// Informações de pagamento
const ProductAction: React.FC = () => {
  return (
    <Container>
          {/*Condição do item*/}
     <Condition>Novo |  3 Vendidos</Condition>


    <Row>
      <h1>Fone reazer</h1>
      <HeartIcon />
    </Row>
     
     <DispatchTag>Enviando normalmente</DispatchTag>

    <PriceCard> {/*carde de preço*/}
      <PriceRow> {/*Linha de preço*/}
        <span className="symbol">R$</span>
        <span className="franction">35</span>
        <span className="franction">9</span>
      </PriceRow>

      <InstallmentsInfo>em 3x de R$ 119,66</InstallmentsInfo>
    </PriceCard>

    <StockStatus>Estoque disponivel</StockStatus>

    <MethodCard> {/*Metodos de pagamento*/}
    <CheckIcon />
     <div>
       <span className="title">Frete gratis</span>
       <span className="details">Beneficio Lorem Ipsum</span>
       <a href="/" className="more">
       Ver mais Sobre
       </a>
     </div>
    </MethodCard>

    <Actions>
      <Button>Comprar agora</Button>
      <Button>Adicionar ao carrinho</Button>
    </Actions>

    <Benefits>
      <li>
        <ShieldIcon />
        <p>
          ---------------------------
        </p>
      </li>
    </Benefits>
    </Container>
  );
};

export default ProductAction;
