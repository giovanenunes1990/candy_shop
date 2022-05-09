import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-height: 100vh;

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
     
    }
`;
export const Menu = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    background: #f00202;

    @media screen and (max-width: 768px){
        position: fixed;
        bottom: 0;
        flex-direction: row;
        width: 100%;
        padding-top: 10px;
        justify-content: space-around;
        background: #f00202;
    }
   
`;

export const PageBody = styled.div`
    display:flex;
    background-color:#ededeb;
    flex: 1;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background: gray;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 80px;
    }
   
`;