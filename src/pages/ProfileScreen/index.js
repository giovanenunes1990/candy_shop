
import React, { useState } from 'react';
import InputMask from "react-input-mask";
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";


import {
    Container,
    Form,
    InputText,
    InputTextAlt,
    InputNormal,
    Logo,
    ACep,
    InputsArea,
    ConfirmButton,
    FlexNoWrap,
} from './styled';



export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const name = useSelector(state => state.user.name);
    const address = useSelector(state => state.user.address);

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');



    const getcep = async (value) => {

        fetch(`https://viacep.com.br/ws/${value}/json/`)
            .then(response => response.json())
            .then(data => {

                setLogradouro(data.logradouro);
                setComplemento(data.complemento);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setEstado(data.uf);
            });

    }

    const handleCepChange = (e) => {
        setCep(e.target.value);
    }
    const handleCepBlur = () => {
        if (cep != '') {
            var newcep = cep.replace('-', '');
            var validacep = /^[0-9]{8}$/;

            if (validacep.test(newcep)) {
                getcep(cep);
            }
        }

    }

    const handleChangeName = (e) => {
        dispatch({
            type: 'SET_NAME',
            payload: {
                name: e.target.value
            }
        });
    }

    const handleChangeNumero = (e) => {
        setNumero(e.target.value);
    }

    const handleSaveInfos = () => {

        dispatch({
            type: 'SET_ADDRESS',
            payload: {
                address: { cep: cep, logradouro: logradouro, numero: numero, complemento: complemento, bairro: bairro, cidade: cidade, estado: estado }
            }
        });
        dispatch({
            type: 'SET_TAX',
            payload: {
                tax: (Math.random() * 10.3).toFixed(2)
            }
        });

        history.push('/');

    }


    return (
        <Container>
            <Logo src="assets/logo.png" />

            <Form>
                <InputText type="text" placeholder="Digite seu Nome..." value={name} onChange={handleChangeName} />
                <InputMask className='input__cep' mask="99999-999" placeholder='Digite seu Cep...' value={cep} onChange={handleCepChange} onBlur={handleCepBlur} />
                <ACep target="_blank" href="https://buscacepinter.correios.com.br/app/endereco/index.php">Não sei meu CEP</ACep>
            </Form>
            <InputsArea>

                <FlexNoWrap>
                    <InputTextAlt type="text" placeholder={address.logradouro ? address.logradouro : 'Lougradouro'} defaultValue={logradouro} />
                    <InputTextAlt small type="text" placeholder={address.numero ? address.numero : "Número"} value={numero} onChange={handleChangeNumero} />
                </FlexNoWrap>

                <InputNormal className="half" type="text" placeholder={address.complemento ? address.complemento : 'Complemento'} defaultValue={complemento} />
                <InputNormal className="half" type="text" placeholder={address.bairro ? address.bairro : 'Bairro'} defaultValue={bairro} />

                <FlexNoWrap>
                    <InputTextAlt type="text" placeholder={address.cidade ? address.cidade : "Cidade"} defaultValue={cidade} />
                    <InputTextAlt small type="text" placeholder={address.estado ? address.estado : "Estado"} defaultValue={estado} />
                </FlexNoWrap>

            </InputsArea>
            <ConfirmButton className='save' onClick={handleSaveInfos}>Salvar</ConfirmButton>
        </Container>
    )
}