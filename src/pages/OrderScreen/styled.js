import styled from 'styled-components';

export const Logo = styled.img`
    width: 230px;
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OrderActualArea = styled.div`

    width: 100%;
    max-width: 90%;
    margin: 10px 20px;
    border-radius: 7px;
    background: white;
    border: 1px solid gray;
`;

export const LineArea = styled.div`
    padding: 10px 20px;
    margin: 20px 0;
`;

export const Line = styled.div`
    height: 10px;
    width: 100%;
    background: lightgray;
    border-radius: 5px;
`;

export const LineProgress = styled.div`
    height: 10px;
    width: 10%;
    background: #0da605;
    border-radius: 5px;
`;

export const StatusCircleArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -23px;

    @media screen and (max-width: 768px){
        margin-top: -19px;
    }
`;

export const CircleAreaL = styled.div`
    display: flex;
    flex-direction: column;
 
`;

export const CircleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CircleAreaR = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Circle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${props => props.green ? '#0da605' : 'lightgray'};

    @media screen and (max-width: 768px){
        width: 27px;
        height: 27px;
    }
   
`;

export const CircleText = styled.div`
    color: ${props => props.green ? '#0da605' : 'gray'};

    @media screen and (max-width: 768px){
        width: 50%;
        font-size: 13px;
        
    }
`;


export const OrderInfoArea = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 20px;

    @media screen and (max-width: 920px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;



export const InfoOrder = styled.div`
    width: 25%;

    @media screen and (max-width: 920px){
        width: 100%;
      
    }
`;

export const InfoPrice = styled.div`
    width: 25%;
    margin-left: auto;

    @media screen and (max-width: 920px){
        width: 100%;
      
    }
`;


export const TextPrice = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5px;
`;

export const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: gray;
`;

export const Price = styled.div`
    font-size: 13px;
    font-weight: bold;
`;

export const TextAddress = styled.p`
    font-size: 13px;
    max-width: 80%;
    font-weight: bold;
`;

export const ProductsArea = styled.div`
    max-height: 200px;
    overflow-y: auto;
    margin-right: auto;
    width: 35%;
    border-left: 1px solid lightgray;

    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background: lightgray;
        border-radius: 12px;
    }
    @media screen and (max-width: 920px){
        width: 100%;
        margin-bottom: 12px;
     }
`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const OldOrdersArea = styled.div`
     display: flex;
     width: 100%;
     flex-wrap: wrap;
     justify-content: center;
     padding-bottom: 50px;
`;


