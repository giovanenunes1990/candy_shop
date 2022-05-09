import styled from 'styled-components';

export const Container = styled.div`
    background-color:  #e0e0e0;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    padding: 10px;
    display:flex;
    cursor: pointer;
    align-items: center;

    &:hover{
        background-color: lightgray;
    }
`;

export const ProductPhotoArea = styled.div`
    width: 100px;
`;

export const ProductPhoto = styled.img`
    width: 100%;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin: 0 10px;
`;

export const ProductName = styled.div`
    font-size: 17px;
    font-weight: bold;

`;

export const ProductPrice = styled.div`
    font-size: 15px;
 
`;

export const ProductIngredients = styled.div`
    font-size: 15px;
`;

export const ProductButtonArea = styled.div``;

export const ProductButton = styled.img`
    width: 25px;
`;
