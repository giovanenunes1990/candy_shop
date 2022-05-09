import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import OldOrderItem from '../../components/OldOrderItem';

import {
    Container,
    Logo,
    OrderActualArea,
    OrderInfoArea,
    LineArea,
    Line,
    LineProgress,
    StatusCircleArea,
    CircleArea,
    CircleAreaR,
    CircleAreaL,
    Circle,
    CircleText,


    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    InfoOrder,
    InfoPrice,
    TextPrice,
    Text,
    Price,
    TextAddress,
    OldOrdersArea,


} from './styled';

export default () => {


    var tax = useSelector(state => state.user.tax);
    const address = useSelector(state => state.user.address);
    var total = useSelector(state => state.user.total);

    tax = (tax != undefined) ? parseFloat(tax) : 5.29;

    total = (parseFloat(total) + tax).toFixed(2);



    const [date, setDate] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [addr, setAddr] = useState('');

    const products = useSelector(state => state.user.order);


    const verify = () => {
        if (address.logradouro != '' && address.bairro && address.cidade) {
            setAddr(`${address.logradouro} N° ${address.numero}, ${address.bairro} - ${address.cidade} - ${address.estado}`);
        } else {
            setAddr('Avenida Paulista N° 1234 - Bela Vista, São Paulo - SP ');
        }

        if (products.length > 0) {
            setShowStatus(true);
        }
    }
    useEffect(() => {
        verify();

    }, [products]);


    const dateNow = () => {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        setDate(day + '/' + month + '/' + year);
    }

    useEffect(() => {
        dateNow();
    }, [date]);

    return (
        <Container>
            <Logo src="assets/logo.png" />
            {showStatus &&
                <OrderActualArea>
                    <LineArea>
                        <Line><LineProgress></LineProgress></Line>
                        <StatusCircleArea>
                            <CircleAreaL>
                                <Circle green></Circle>
                                <CircleText green>Pedido Recebido</CircleText>
                            </CircleAreaL>


                            <CircleArea>
                                <Circle></Circle>
                                <CircleText >Pedido Enviado</CircleText>
                            </CircleArea>

                            <CircleAreaR>
                                <Circle></Circle>
                                <CircleText>Pedido Entregue</CircleText>
                            </CircleAreaR>
                        </StatusCircleArea>
                    </LineArea>
                    <OrderInfoArea>
                        <ProductsArea>
                            {products.map((item, index) => (
                                <ProductItem key={index}>
                                    <ProductPhoto src={item.image} />
                                    <ProductInfoArea>
                                        <ProductName>{item.name}</ProductName>
                                        <ProductPrice>R$ {(item.price * item.qt).toFixed(2)}</ProductPrice>
                                    </ProductInfoArea>
                                </ProductItem>
                            ))}
                        </ProductsArea>
                        <InfoOrder>
                            <TextPrice column>
                                <Text>Data do pedido:</Text>
                                <Price>{date}</Price>
                            </TextPrice>
                            <TextPrice column>
                                <Text>Endereço de entrega:</Text>
                                <TextAddress>{addr} </TextAddress>
                            </TextPrice>

                        </InfoOrder>
                        <InfoPrice>
                            <TextPrice>
                                <Text>Taxa de entrega</Text>
                                <Price>R$ {tax}</Price>
                            </TextPrice>
                            <TextPrice>
                                <Text>Total</Text>
                                <Price>R$ {total}</Price>
                            </TextPrice>
                        </InfoPrice>
                    </OrderInfoArea>
                </OrderActualArea>
            }

            <OldOrdersArea>
                <OldOrderItem date="27/04/2022" value={128.30} />
                <OldOrderItem date="04/04/2022" value={73.96} />
                <OldOrderItem date="16/03/2022" value={24.78} />
                <OldOrderItem date="02/03/2022" value={62.12} />
                <OldOrderItem date="22/02/2022" value={159.21} />
                <OldOrderItem date="09/02/2022" value={45.85} />
            </OldOrdersArea>

        </Container>
    );
}