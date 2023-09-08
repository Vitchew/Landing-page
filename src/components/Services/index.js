import React from "react";
import Icon1 from "../../images/svg-4.svg"
import Icon2 from "../../images/svg-5.svg"
import Icon3 from "../../images/svg-2.svg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>We help reduce sratat tatatat</ServicesP>
        </ServicesCard>
      
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Blabla Expenses</ServicesH2>
          <ServicesP>We help reduce sratat tatatat</ServicesP>
        </ServicesCard>
    
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Sttartarar Expenses</ServicesH2>
          <ServicesP>We help reduce sratat tatatat</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
