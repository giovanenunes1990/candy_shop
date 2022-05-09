import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    background:#ededeb;
`;

export const CategoryArea = styled.div`
    color: gray;
    margin-top: 5px;
    font-size: 19px;

    @media screen and (max-width: 768px){
        padding-bottom: 15px;
        text-align: center;
        margin-top: 10px;
    }

`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 768px){
        justify-content: center;
    }
`;

export const ProductArea = styled.div`
    margin: 20px 0;
    padding-bottom: 82px;

    @media screen and (max-width: 768px){
       padding-bottom: 40px;
    }
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @media screen and (max-width: 1040px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

