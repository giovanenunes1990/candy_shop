import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import {
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,

} from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    const [activeCategory, setActiveCategory] = useState(0);

    const [activeSearch, setActiveSearch] = useState('');

    const getProducts = () => {

        const prods = api.getProducts(activeCategory, activeSearch);
        setProducts(prods);

    }
    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 1000);
    }, [headerSearch]);

    useEffect(() => {
        const getCategories = () => {
            const cat = api.getCategories();
            setCategories(cat);


            ReactTooltip.rebuild();
        };
        getCategories();
    }, []);

    useEffect(() => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activeSearch]);



    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&

                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                name: 'Todas as Categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}

                    </CategoryList>
                </CategoryArea>
            }
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) => (
                            <ProductItem key={index} data={item} onClick={handleProductClick} />
                        ))}
                    </ProductList>
                </ProductArea>
            }


            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus} />
            </Modal>
        </Container>
    );
}