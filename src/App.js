import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ReactTooltip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import OrderScreen from './pages/OrderScreen';

import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import ProfileScreen from './pages/ProfileScreen';


export default () => {


    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Início" icon="/assets/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route path="/orders">
                            <OrderScreen />
                        </Route>
                        <Route path="/profile">
                            <ProfileScreen />
                        </Route>

                    </Switch>
                </PageBody>
                <Cart />
                <ReactTooltip id="tip-top" place="top" effect="solid" />
                <ReactTooltip id="tip-right" place="right" effect="solid" />
            </Container>
        </BrowserRouter>
    );
} 