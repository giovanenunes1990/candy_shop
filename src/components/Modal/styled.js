import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.status ? 'flex' : 'none'};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    z-index: 5;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    width: 100%;
    max-width: 768px;
    max-height: 90%;

    @media screen and (max-width: 768px){
        margin: 0 10px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background: gray;
        border-radius: 10px;
    }

`;