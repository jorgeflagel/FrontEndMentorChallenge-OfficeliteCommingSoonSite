import React from 'react';
import styled from 'styled-components';
import { Formik, useField } from 'formik';
import { object, string } from 'yup'
import Button from './shared/button';
import devices from '../assets/breakpoints';
import IconArrowDown from '../assets/img/icon-arrow-down.svg';
import IconCross from '../assets/img/icon-cross.svg';



const FormContainer = styled.form`
    width: min(327px, calc(90vw - 48px));
    margin-bottom: 87px;
    padding: 24px;
    background-color: ${props => props.theme.colorPrimaryContrast};
    border-radius: 13px;
    box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
    @media ${devices.tablet} {
        width: min(445px, 90vw);
        padding: 40px;
    }
    @media ${devices.pc} {
        width: min(445px, 90vw);
        padding: 40px;shared
    }
`;

const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
    color: ${props => props.theme.colorSecondary};
    align-items: center;
`

function Input(props) {
    const [field, meta] = useField(props);

    return(
        <>  
            {meta.touched && meta.error ? (
                <InputError {...props} />
            ) : <InputSucceed {...props} />}
        </>
    );
}

const InputSucceed = styled.input`
    box-sizing: border-box;
    width: 100%;
    min-height: 45px;
    border: none;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colorSecondaryLight50};
    font-size: 1rem;
    line-height: 1.75rem;
    padding-bottom: 17px;
    padding-left: 16px;
    &::placeholder{
        opacity: 50%;
    }
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colorPrimary};
        color: ${props => props.theme.colorPrimary};
    }
`;

const InputError = styled(InputSucceed)`
    color: ${props => props.theme.colorDanger};
    border-bottom: 1px solid ${props => props.theme.colorDanger};
    background-image: url(${IconCross});
    background-repeat: no-repeat;
    background-position: top calc(50% - 6px) right 10px;
    padding-right: 50px;
    &:focus {
        background-image: none;
        padding-right: 0px;
    }
`;

const Select = styled.select`
    width: 100%;
    height: 45px;
    border: none;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colorSecondaryLight50};
    color: ${props => props.theme.colorSecondary};
    font-weight: 700;
    background-color: ${props => props.theme.colorPrimaryContrast};
    font-size: 1rem;
    line-height: 1.75rem;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 17px;
    padding-left: 12px;
    appearance: none;
    background: url(${IconArrowDown}) no-repeat;
    background-position-x: 95%;
    background-position-y: 35%;

`;

const Option = styled.option`
    width: 100%;
    color: ${props => props.theme.colorSecondaryLight};
    background-color: ${props => props.theme.colorPrimaryContrast};    
`;

function Form(props) {

    return(
            <Formik
                initialValues={{ 
                    name: "", 
                    email: "", 
                    pack: props.pack.toLowerCase(),
                    tel: "",
                    company: ""  
                }}
                
                validationSchema={object().shape({
                    name: string()
                        .min(3, 'Must be at least 3 characters')
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: string()
                        .email('Invalid email address')
                        .required('Required'),
                    pack: string(),
                    tel: string(),
                    company: string()
                        .max(15, 'Must be 15 characters or less')
                })}

                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);

                    }, 400);
                }}
                >
                {({

                    values,

                    errors,

                    touched,

                    handleChange,

                    handleBlur,

                    handleSubmit,

                    isSubmitting,

                    }) => (
                        <FormContainer onSubmit={handleSubmit}>
                            <InputsContainer>
                                <Input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur} aria-label="Your name"/>
                                <Input type="text" name="email" placeholder="Email Address" value={values.email} onChange={handleChange} onBlur={handleBlur} aria-label="Your email"/>
                                <Select name="pack" value={values.pack} onChange={handleChange} onBlur={handleBlur} aria-label="Select pack">
                                    <Option value="basic" >Basic Pack Free</Option>
                                    <Option value="pro">Pro Pack $9.99</Option>
                                    <Option value="ultimate">Ultimate Pack $19.99</Option>
                                </Select>
                                <Input type="text" name="tel" placeholder="Phone Number" value={values.tel} onChange={handleChange} onBlur={handleBlur} aria-label="Your phone number"/>
                                <Input type="text" name="company" placeholder="Company" value={values.company} onChange={handleChange} onBlur={handleBlur} aria-label="Your company name"/>
                            </InputsContainer>
                            <Button type="submit" variant={1} disabled={isSubmitting} block>{isSubmitting ? "Is submitting..." : "Get on the list"}</Button>
                        </FormContainer>
                    )}
            </Formik>
    );
}

export default Form;