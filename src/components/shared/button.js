import styled, {css} from 'styled-components';

//The Button component receives props.variant = 1, 2 or 3. And as optional a props|.block 

const Button = styled.button`
    min-width: 171px;
    height: 3.5rem;
    border-radius: 28px;
    text-align: center;
    line-height: 3.5px;
    font-size: 1rem;
    font-weight: 700;  
    border: none; 
    ${props =>
        props.block &&
            css`
            display: block;
            width: 100%;`
    }
    &:hover {
            cursor: pointer;
        }
    ${props => {
        switch(props.variant){
            case(1):
                return css`
                    background-color: ${props.theme.colorPrimary};
                    color: ${props.theme.colorPrimaryContrast};
                    &:hover {
                        background-color: ${props.theme.colorPrimaryLight};
                    }`
            case(2):
                return css`
                    background-color: ${props => props.theme.colorPrimary15};
                    color: ${props => props.theme.colorPrimary};
                    &:hover {
                        background-color: ${props => props.theme.colorPrimary25};
                    }`
            case(3):
                return css`
                    background-color: ${props => props.theme.colorPrimaryContrast};
                    color: ${props => props.theme.colorPrimary};
                    &:hover {
                        color: ${props => props.theme.colorPrimaryLight};
                    }`
            default:
                    return null;
        }
    }};
    ${props =>
        props.disabled &&
            css`
            background-color: ${props => props.theme.colorPrimary40};
            &:hover {
                background-color: ${props => props.theme.colorPrimary40};
            }`}
`;

export default Button;