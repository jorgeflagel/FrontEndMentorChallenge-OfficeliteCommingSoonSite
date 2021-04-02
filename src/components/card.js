import React from "react";
import { useHistory } from 'react-router-dom';


import styled, { css } from "styled-components";
import devices from "../assets/breakpoints";
import Button from "./shared/button";
import BACKGROUND from '../assets/img/bg-pattern-pricing.svg'

const CardContainer = styled.div`
    box-sizing: border-box;
    padding-top: 40px;
    padding-bottom: 40px;
    min-width: min(327px,90vw);
    min-height: 508px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ${props =>
        (props.primary &&
            css`
            background-color: ${props => props.theme.colorPrimary};
            color: ${props => props.theme.colorPrimaryContrast};
            background-image: URL(${BACKGROUND});
            background-size: 1100px;
            background-repeat: no-repeat;
            background-position: -380px -460px;`)
        || 
        (props.secondary &&
            css`
            background-color: ${props => props.theme.colorSecondaryContrast};
            color: ${props.theme.colorSecondary};`)
    }
    @media ${devices.tablet} {
        min-height: 316px;
        min-width: 689px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 48px;
    }        ;}        

    @media ${devices.pc} {
        min-height: 508px;
        min-width: 350px;
    }
`;

const CardHeader = styled.div`
    display: flex;
    min-height: 168px;
    flex-direction: column;
    align-items: center;    
    margin-bottom: 40px;
    @media ${devices.tablet} {
        width: 50%;
        flex-shrink: 0;
        align-items: flex-start;
        margin-bottom: 24px;
        height: auto;
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
    min-height: 116px;
    padding-bottom: 26px;
    padding-top: 26px;
    opacity: 75%;
    @media ${devices.tablet} {
        width: 50%;
        flex-shrink: 0;
        text-align: start;
        padding-top: 16px;
        justify-content: start;
        padding-bottom: 0;  
        height: auto;
    }
`;

const Suscription = styled.p`
    line-height: 1.75rem;
    font-size: 1.25rem;
    font-weight: 700;
    padding-bottom: 40px;
    @media ${devices.tablet} {
        padding-bottom: 16px;
    }
`;

const Price = styled.p`
    line-height: 4rem;
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0;
`;

const Users = styled.p`
    margin-top: 8px;
    @media ${devices.tablet} {
        margin-top: 4px;
    }
`;


export default function Card(props){
    const history = useHistory();

    return(
        <CardContainer {...props}>
            <CardHeader>
                <Suscription>{props.suscriptionType}</Suscription>
                <Price>{props.price}</Price>
                <Users>{props.users}</Users>
            </CardHeader>
            <CardBody>
                <p>{props.features}</p>
                <p>{props.storage}</p>
                <p>{props.extras}</p>
            </CardBody>
                <Button variant={props.buttonVariant} onClick={() => {
                    props.selectPack(props.suscriptionType);
                    history.push("/sign-up");}}
                    >Try for Free</Button>
        </CardContainer>
    );
}