import React from 'react';
import styled from 'styled-components';

import devices from '../assets/breakpoints';
import LOGO from '../assets/img/logo.svg';

import Title from './shared/title';
import Subtitle from './shared/subtitle';
import ComingSoon from './comingSoon';
import Form from './form';
import BACKFOOTER from '../assets/img/bg-pattern-footer.svg';

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-image: url(${BACKFOOTER});
    background-repeat: no-repeat;
    background-size: 1202px;
    background-position: bottom -474px left 50%;
    @media ${devices.tablet} {
      background-size: 1454px;
      background-position: bottom -537px left 50%;
    }  
    @media ${devices.pc} {
      background-size: max(2036px, 100%);
      background-position: top -781px right -853px;
    }
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${props => props.theme.colorSecondaryDark};
    height: 320px;
    @media ${devices.tablet} {
      height: 380px;
    }  
    @media ${devices.pc} {
      width: max(420px, 30vw);
      height: 100%;
      top: 0;
      left: calc(100% - max(420px, 30vw));
    }
  }
`

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

const SignUpMain = styled.div`
  display: flex;
  flex-direction: column;
  width: min(90vw, 327px);
  align-items: center;
  margin-top: 64px;
  align-content: center;
  @media ${devices.tablet} {
    width: 573px;
    margin-top: 104px;
  }
  @media ${devices.pc} {
    flex-direction: row;
    width: 1110px;
    gap: 125px; 
    margin-top: 80px;
    align-items: flex-start;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  margin-bottom: 64px;
  @media ${devices.tablet} {
    gap: 40px;
    margin-bottom: 104px;
  }
  @media ${devices.pc} {
    gap: 40px;  padding-bottom: 100px;
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const HeaderText = styled.div`
  max-width: 335px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @media ${devices.tablet} {
    max-width: 573px;
  }
  @media ${devices.pc} {
    max-width: 540px;
  }
`

function SignUp(props){
    return(
      <SignUpContainer>
        <Logo>
          <img src={LOGO} alt="officelite logo"/>
        </Logo>
        <SignUpMain>
            <Header>
                <HeaderText>
                    <Title>Work smarter. Save time.</Title>
                    <Subtitle>Easily manage your projects. Get on the list and receive 
                        in-app perks available only to early subscribers. We are moving into 
                        final development and getting ready for official launch soon.
                    </Subtitle>
                </HeaderText>
                <ComingSoon type="dark"/>
            </Header>
            <Form pack={props.pack}/>
        </SignUpMain>
      </SignUpContainer>
    );
}

export default SignUp;