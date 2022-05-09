import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    padding: 20px;
    
    @media screen and (max-width: 768px){
       padding: 15px;
       width: 100%;
    }
`;

export const ProductArea = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ProductButtons = styled.div`
    margin-top: 10px;
    display flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px){
        justify-content: center;
    }

    @media screen and (max-width: 500px){
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const ProductPhoto = styled.img`
    max-width: 310px;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const ProductDetails = styled.div`
   
@media screen and (max-width: 500px){
    text-align: center;
    margin-bottom: 10px;
}
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px){
        flex-direction: column;
    }

`;
export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
`;

export const ProductButton = styled.button`
    border: 0;
    outline: 0;
    padding: ${props => props.small ? '10px 10px' : '10px 20px'};
    background: ${props => props.small ? 'gray' : '#f00202'};
    color: white;
    font-size: ${props => props.small ? 16 : 22}px;
    border-radius: 6px;
    box-shadow: 0px 4px 0px ${props => props.small ? '#333333' : '#630301'};
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;

    @media screen and (max-width: 500px){
        margin: 10px;
    }
 
`;

export const ProductQuantity = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const ProductQtImage = styled.img`
    width: 24px;
    cursor: pointer;   
`;

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 0 10px;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;

    @media screen and ( max-width: 500px){
        margin-top: 10px;
    }
`;
