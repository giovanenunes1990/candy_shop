import React, { useEffect, useState } from 'react';
import { Container, InfoArea, Text1, Text2 } from './styled';
import { useSelector } from "react-redux";

export default ({ value, date, }) => {
    const address = useSelector(state => state.user.address);

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

    return (
        <Container>
            <InfoArea>
                <Text1>{date}</Text1>
                <Text2 green>Entregue</Text2>
            </InfoArea>

            <InfoArea>
                <Text1 small>{addr}</Text1>
                <Text2>R$ {value.toFixed(2)}</Text2>
            </InfoArea>

        </Container>
    );
}