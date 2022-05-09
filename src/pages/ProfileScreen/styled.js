import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    width: 100% ;
    min-height: 100vh;

   
`;
export const Logo = styled.img`
    width: 230px;
`;

export const Form = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;

    .input__cep{
        outline: 0;
        border: 0;
        font-style: italic;
        padding-left: 10px;
        border-radius: 5px;
        margin-right: 17px;
        height: 32px;
    }

    @media screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`;

export const InputText = styled.input`
    outline: 0;
    border: 0;
    height: 32px;
    max-width: 280px;
    width: 100%;
    font-style: italic;
    padding-left: 10px;
    border-radius: 5px;
    margin-right: 17px;
 

    @media screen and (max-width: 768px){
        margin: 15px 0;
        max-width: 100%;
    }
`;



export const ACep = styled.a`
    text-decoration: none;
    color: blue;
    font-size: 12px;
`;

export const InputsArea = styled.a`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;

    
    .half{
        width: 45%;

        @media screen and (max-width: 920px){
            width: 100%;
            max-width: 100%;
        }
    }
    .small{
        width: 80px;
    }
`;

export const InputNormal = styled.input`
    outline: 0;
    border: 0;
    height: 32px;
    max-width: 700px;
    width: 100%;
    font-style: italic;
    padding-left: 10px;
    border-radius: 5px;
    margin: 12px 0;
    margin-right: 17px;
`;

export const ConfirmButton = styled.button`
    background: ${props => props.fun ? 'lightgray' : '#df1111'};
    color: white;
    outline: 0;
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer; 
    transition: all ease 0.4s;
    margin-bottom: 70px;

    &:hover{
        transform: scale(1.1);
    }
`;

export const FlexNoWrap = styled.div`
    diplay: flex;
    text-align: left;
    width: 100%;

`;


export const InputTextAlt = styled.input`
    outline: 0;
    border: 0;
    height: 32px;

    max-width: 700px;
    width: ${props => props.small ? '90px' : 'calc(100% - 124px)'};

    font-style: italic;
    padding-left: 10px;
    border-radius: 5px;
    margin: 12px 0;
    margin-right: 17px;
`;

