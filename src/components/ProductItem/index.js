import React from 'react';
import {
    Container,
    ProductPhotoArea,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductIngredients,
    ProductButtonArea,
    ProductButton,
} from './styled';

export default ({ data, onClick }) => {
    const handleClick = () => {
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} alt="IMG" />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price.toFixed(2)}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );

}