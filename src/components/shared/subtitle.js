import styled from 'styled-components';
import devices from '../../assets/breakpoints';

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    text-align: center;
    color: ${props => props.theme.colorSecondaryLight};
    @media ${devices.tablet} {
        text-align: start;
    } 
    @media ${devices.pc} {
        text-align: start;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`

export default Subtitle;