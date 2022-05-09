import styled from 'styled-components';

export const CartArea = styled.div`

    background: rgb(200,7,7);
    background: linear-gradient(180deg, rgba(200,7,7,1) 0%, rgba(255,0,0,1) 100%);
    position: fixed;
    bottom: 0;
    right: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid #a3a2a2;

    @media screen and (max-width: 768px){
        top: 10px;
        right: 18px;
        border: 0;
        bottom:  ${props => props.show ? '0' : '100%'};
        background: ${props => props.show ? '' : 'none'};
        width:  ${props => props.show ? '95%' : ''};
        height: calc(100% - 90px); 
        
    }
`;

export const CartHeader = styled.div`
    height: 50px;
    display:flex;
    width: 290px;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 768px){
       width: 100%;
      
    }
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0 10px;

    @media screen and (max-width: 768px){
        display: ${props => props.car ? 'block' : 'none'};
        background: ${props => props.show ? 'none' : 'rgb(200,7,7)'};
        padding: 10px;
        border-radius: 5px;
        width: 43px;
    }
`;

export const CartIcon2 = styled.img`
    width: 23px;
    height: auto;
    margin: 0 10px;

    @media screen and (max-width: 768px){
        display: ${props => props.mobile ? 'block' : 'none'};
      
    }
`;

export const CartText = styled.div`
    color: white;
    font-size: 17px;
    flex: 1;

    @media screen and (max-width: 768px){
        font-size: 15px;
        width: 100%;
        display: ${props => props.show ? 'block' : 'none'};
    }
`;

export const CartBody = styled.div`
    height: ${props => props.show ? '90vh' : '0px'};
    color: white;
    transition: all ease 0.4s;


    @media screen and (max-width: 768px){
       display: ${props => props.show ? 'block' : 'none'};
       border-bottom: 1px solid white;
    }
`;

export const ProductsArea = styled.div`
    max-height: 50%;
    overflow-y: auto;
    border-bottom: 0.5px solid white;

    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background: white;
        border-radius: 12px;
    }
    @media screen and (max-width: 768px){
        
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
    display: flex;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtImage = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;   
`;

export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
`;

export const AddressArea = styled.div`
padding: 10px 20px;
`;

export const AddressTitle = styled.div`
     font-weight: bold;
`;

export const AddressSide = styled.div`
     display: flex;
     align-items: center;
`;

export const Address = styled.p`
     font-size: 13px;
     max-width: 130px;
`;

export const EditAddress = styled.img`
     margin-left: auto;
     width: 23px;
     cursor: pointer;
`;

export const PriceArea = styled.div`
     margin-top: auto;
`;

export const TextPrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
   
`;

export const Text = styled.span``;

export const Price = styled.span``;

export const ButtonEnd = styled.button`
     border: 0;
     outline: 0;
    cursor: pointer;
     width: 90%;
     padding: 5px 10px;
     border-radius: 8px;
     background: white;
     margin: 10px 5%;
`;

export const CartQtMobile = styled.div`
     display: none;
     background: rgba(26, 26, 26, 0.5);
     color: white;
     width:22px;
     height: 22px;
     border-radius: 50%;
     text-align: center;
     position: relative;
     left: -26px;
     top: -10px;
     padding-bottom: 3px;
    

     @media screen and (max-width: 768px){
         display: flex;
         justify-content: center;
         text-align: center;
     }

`;