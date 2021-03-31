import styled from 'styled-components';
import devices from '../../assets/breakpoints';

const Title = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: center;
    color: ${props => props.theme.colorSecondary};
    @media ${devices.tablet} {
        text-align: start;
    }  
    @media ${devices.pc} {
        text-align: start;
        font-size: 3.5rem;
        line-height: 4rem;
    }
`

export default Title;