import styled from 'styled-components';

export const Container = styled.div`
    width: 28%;
    padding: 10px 20px;
    border-radius: 8px;
    background: lightgray;
    margin: 10px 20px;

    @media screen and (max-width: 1040px){
        width: 42%;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding 10px;
    
`;

export const Text1 = styled.p`
    color: gray;
    width: 60%;
    font-weight: bold;
    font-size: ${props => props.small ? '13px' : '15px'};
`;

export const Text2 = styled.p`
    font-weight: bold;
    color:  ${props => props.green ? '#0da605' : 'gray'};
`;
