import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Card from './card';
import ComingSoon from './comingSoon';
import Title from './shared/title';
import Subtitle from './shared/subtitle';
import Button from './shared/button';

import SUSCRIPTIONS from '../assets/suscriptions';
import devices from '../assets/breakpoints';
import ILLUSTRATION from '../assets/img/illustration-charts.svg';
import LOGO from '../assets/img/logo.svg';
import BACKHEADER from '../assets/img/bg-pattern-header.svg';
import BACKFOOTER from '../assets/img/bg-pattern-footer.svg';



const { basic, pro, ultimate } = SUSCRIPTIONS;

const HomeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  background-image: url(${BACKHEADER}), url(${BACKFOOTER});
  background-repeat: no-repeat, no-repeat;
  background-size: 458px, 1202px;
  background-position: top -170px left 50%, bottom -100px left 50%;
  @media ${devices.tablet} {
    padding: 0 40px;
    background-size: 666px, 1454px;
    background-position: top -170px right -250px, bottom -450px  left 50%;
  }  
  @media ${devices.pc} {
    padding: 0 165px;
    background-size: 1134px, 2036px;
    background-position: top -419px left 656px, bottom -1018px left -1018px;
  }
  &::after {
    content: "";
    width: 100%;
    background: red;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${props => props.theme.colorSecondaryDark};
    height: 1250px;
    @media ${devices.tablet} {
      height: 1000px;
    }  
    @media ${devices.pc} {
      height: 650px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  padding-top: 46px;
  width: min(327px, 90vw);
  justify-content: center;
  @media ${devices.tablet} {
    width: 695px;
    justify-content: start;
  }  
  @media ${devices.pc} {
    width: 1110px;
    justify-content: start;
  }
`;

const Header = styled.header`
  padding-bottom: 100px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  @media ${devices.tablet} {
    padding-top: 104px;
    padding-bottom: 140px;
    flex-direction: row-reverse;
    gap: 69px;
  }
  @media ${devices.pc} {
    flex-direction: row-reverse;
    gap: 95px;
    padding-top: 102px;
    padding-bottom: 184px;
  }
`;

const HeaderMain = styled.div`
  max-width: 327px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media ${devices.tablet} {
    max-width: 345px;
    align-items: flex-start;
  }
  @media ${devices.pc} {
    max-width: 540px;
    align-items: flex-start;
  }
`
const HeaderImage = styled.img`
  width: 171px;
  height: 192px;
  @media ${devices.tablet} {
    width: 281px;
    height: 314px;
  }  
  @media ${devices.pc} {
    width: 475px;
    height: 531px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media ${devices.tablet} {
    gap: 24px;
  }  
  @media ${devices.pc} {
    gap: 30px;
    flex-direction: row;
  }  
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 0;
  align-items: center;
  max-width: 100%;
  @media ${devices.tablet} {
    gap: 48px;
  }  
  @media ${devices.pc} {
    flex-direction: row;
    justify-content: space-between;
    width: 1110px;
    gap: 0px;
    padding-top: 82px;
    padding-bottom: 91px;
  }  
`;


function Home(props) {
  const history = useHistory();

  return(
    <HomeContainer>
        <Logo>
          <img src={LOGO} alt="officelite logo"/>
        </Logo>
        <Header>
            <HeaderImage src={ILLUSTRATION} alt=""/>
            <HeaderMain>
                <Title>A simple solution to complex tasks is coming soon</Title>
                <Subtitle>Say goodbye to inefficient juggling of multiple apps, teams, 
                and projects. Officelite is the new collaboration platform built with 
                an intuitive interface to improve productivity.</Subtitle>
                <Button variant={1} onClick={() => {
                  props.setPack("basic");
                  history.push("/sign-up");
                  }} 
                  >Get Started</Button>
            </HeaderMain>
        </Header>
        <Cards id="cards">
            <Card secondary {...basic} buttonVariant={2} selectPack={(pack) => props.setPack(pack)}/>
            <Card primary {...pro} buttonVariant={3} selectPack={(pack) => props.setPack(pack)}/>
            <Card secondary {...ultimate} buttonVariant={2} selectPack={(pack) => props.setPack(pack)}/>
        </Cards>
        <Footer>
            <ComingSoon type="light"/>
                <Button variant={1} onClick={() => {
                  props.setPack("basic");
                  history.push("/sign-up");
                  }} 
                  >Get Started</Button>
        </Footer>
    </HomeContainer>
    );
}

export default Home;