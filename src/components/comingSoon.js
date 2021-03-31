import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import devices from '../assets/breakpoints';
import DEADLINE from '../assets/deadline';

const ComingSoonStyled = styled.div`
    max-width: 328px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 18px;
    @media ${devices.tablet} {
        max-width: 448px;
        gap: 8px;
    }
    @media ${devices.pc} {
        max-width: 448px;
        gap: 8px;
    }
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 1rem;
    line-height: 3rem;
    color: ${props => props.theme.colorPrimaryContrast};
    ${props => {
        switch(props.type){
            case("light"):
                return css`
                    color: ${props => props.theme.colorPrimaryContrast};
                    `
            case("dark"):
                return css`
                    color: ${props => props.theme.colorSecondary};
                   `
            default:
                return null;
        }
    }};
    &> span {
        color: ${props => props.theme.colorPrimary};
    }
    text-transform: uppercase;
    @media ${devices.pc} {
        text-align: start;
`;

const Number = styled.p`
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
`;

const Text = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.75rem;
`;

const Card = ({className, number, text}) => {
    return(
        <div className={className}>
            <Number>{number}</Number>
            <Text>{text}</Text>
        </div>
    );
};

const CardStyled = styled(Card)`
    min-width: 72px;
    min-height: 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    ${props => {
        switch(props.type){
            case("light"):
                return css`
                    background-color: ${props.theme.colorSecondary};
                    color: ${props.theme.colorSecondaryContrast};
                    `
            case("dark"):
                return css`
                    background-color: ${props => props.theme.colorPrimary10};
                    color: ${props => props.theme.colorPrimary};
                    `
            default:
                return null;
        }
    }};
    @media ${devices.tablet} {
        width: 100px;
        height: 128px;
    }
    @media ${devices.pc} {
        width: 100px;
        height: 128px;
    }
} `;

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    justify-content: space-around;
`;

function getTimeRemaining(endtime){
    const total = endtime - new Date().getTime();
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

function ComingSoon(props){

    const deadLine = new Date(DEADLINE).getTime()
    const date = getTimeRemaining(deadLine);
    
    const [remaining, setRemaining] = useState((date.total >= 999 ? date : {days: 0, hours: 0, minutes: 0, seconds: 0}));

    useEffect(() => {
        if (date.total >= 1000) {
            const startInterval = setInterval(() => {
                const t = getTimeRemaining(deadLine);
                setRemaining(t);
                if(t.total <= 999) {
                    clearInterval(startInterval);
                };
            },1000);
        };
    }, [date, deadLine]);

    const options = {  day: 'numeric', year: 'numeric', month: 'short',};
    const commingDate = DEADLINE.toLocaleDateString('en-GB', options);

    return(
        <ComingSoonStyled>
            <Title type={props.type}>Coming <span>{commingDate}</span></Title>
            <Cards>
                <CardStyled type={props.type} number={remaining.days} text={"days"}/>
                <CardStyled type={props.type} number={remaining.hours} text={"hours"}/>
                <CardStyled type={props.type} number={remaining.minutes} text={"min"}/>
                <CardStyled type={props.type} number={remaining.seconds} text={"sec"}/>
            </Cards>
        </ComingSoonStyled>
    );
}

export default ComingSoon;

