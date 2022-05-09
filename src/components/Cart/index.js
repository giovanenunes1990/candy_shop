import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import {
    CartArea,
    CartHeader,
    CartIcon,
    CartIcon2,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtImage,
    ProductQtText,
    AddressArea,
    AddressTitle,
    AddressSide,
    Address,
    EditAddress,
    PriceArea,
    TextPrice,
    Text,
    Price,
    ButtonEnd,
    CartQtMobile,

} from './styled';

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();


    const products = useSelector(state => state.cart.products);
    const address = useSelector(state => state.user.address);
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState('');
    const [addr, setAddr] = useState('');

    const verify = () => {
        if (address.logradouro != '' && address.bairro && address.cidade) {
            setAddr(`${address.logradouro} N° ${address.numero}, ${address.bairro} - ${address.cidade} - ${address.estado}`);
        } else {
            setAddr('Avenida Paulista N° 1234 - Bela Vista, São Paulo - SP ');
        }
    }
    useEffect(() => {
        verify();

    }, []);

    useEffect(() => {

    }, [total]);

    useEffect(() => {
        if (products.length == 0) {
            setShow(false);
        }

        sum();
    }, [products]);


    const sum = () => {
        let arr = [];
        products.forEach((item) => {
            arr.push(parseFloat(item.price * item.qt));
        });
        const total = arr.reduce((prev, current) => prev + current, 0).toFixed(2);
        setTotal(total);

    }

    const handleCartClick = () => {
        if (products.length > 0) {
            setShow(!show);
        }
    }
    const handleEditAddress = () => {
        history.push('/profile');
        setShow(false);
    }
    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {
                key, type
            }
        })
    }

    const handleEndOrder = () => {

        dispatch({
            type: 'SET_ORDER',
            payload: {
                order: products
            }
        });

        dispatch({
            type: 'CLEAR_CART',
            payload: {
                products: [],
            }
        });

        dispatch({
            type: 'CHANGE_TOTAL',
            payload: {
                total
            }
        });

        setShow(false);


        history.push('/orders');


    }
    return (
        <CartArea show={show}>
            <CartHeader onClick={handleCartClick}>
                <CartIcon show={show} car src="/assets/cart.png" />
                {products.length > 0 &&
                    <CartQtMobile>{products.length}</CartQtMobile>
                }
                <CartText show={show}>Meu carrinho ({products.length})</CartText>
                <CartIcon2 mobile={show} src={show ? '/assets/down.png' : '/assets/up.png'} />
            </CartHeader>
            <CartBody show={show}>

                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ <div className="prices">{(item.price * item.qt).toFixed(2)}</div></ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtImage onClick={() => handleProductChange(index, '-')} src="/assets/minus.png" />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtImage onClick={() => handleProductChange(index, '+')} src="/assets/plus.png" />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>
                <AddressArea>
                    <AddressTitle>Entrega</AddressTitle>
                    <AddressSide>
                        <Address>{addr}</Address>
                        <EditAddress onClick={handleEditAddress} src="/assets/edit.png" alt="IMG" />
                    </AddressSide>
                </AddressArea>
                <PriceArea>
                    <TextPrice>
                        <Text>Taxa de entrega</Text>
                        <Price>R$ 5,29</Price>
                    </TextPrice>
                    <TextPrice>
                        <Text>Total</Text>
                        <Price>R$ {total}</Price>
                    </TextPrice>

                </PriceArea>
                <ButtonEnd onClick={handleEndOrder}>FINALIZAR COMPRA</ButtonEnd>
            </CartBody>
        </CartArea>
    )
}