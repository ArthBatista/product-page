import React from 'react';

import { Container, Title, LocationCard, LocationIcon, ReputationCard, ReputationThermometer, ReputationRow, SupportIcon, ClockIcon, /*More*/ } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

    <LocationCard> {/*cartão de localização do vendedor*/}
       <LocationIcon /> {/*Icone de localização*/}

       <div>
         <p>Localização</p>
         <strong>Goiania, Goias</strong>
       </div>
    </LocationCard>

     <ReputationCard>{/*Cartão de reputação*/}
       <ReputationThermometer>    {/*termometro de reputão*/}
         <li />
         <li />
         <li />
         <li />
         <li className="active" /> {/*nivel verde (ultimo nivel)*/}
         
       </ReputationThermometer> {/*Cartão de reputação do vendedor*/}
         <ReputationRow>            {/*descrição da reputação*/}
         <div>
           <strong>561</strong>
           <span>Vendas nos ultimos 4 meses</span>
         </div>

          <div>
          <strong><SupportIcon /></strong>
          <span>Presta um bom antedimento</span>
        </div>
        
         <div>
         <strong><ClockIcon /></strong>
         <span>vendas nos ulitmos 4 meses</span>
       </div>
         
         </ReputationRow>
     </ReputationCard>
     
      {/* <More href="https://github.com/ArthBatista">Ver mais dados do vendedor</More> */}

    </Container>
  );
};

export default SellerInfo;
