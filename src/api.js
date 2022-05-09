

export default {
    getCategories: () => {
        return Category;
    },
    getProducts: (category = '', search = '') => {
        let products = '';

        if (category != '') {
            products = Products.filter((item) => { return item.id_category == category });
            return products;
        }
        if (search != '') {

            products = Products.filter((item) => item.name.toLowerCase().includes(search));
            return products;
        }
        return Products;
    },


}

const Products = [
    { id: 1, id_category: 1, name: 'Torta de Chocolate', image: '/media/tortachocolate.jpg', ingredients: 'ovo, açúcar, farinha e chocolate.', price: 32.29 },
    { id: 2, id_category: 2, name: 'Donut de Flocos', image: '/media/donutflocos.jpg', ingredients: 'ovo, massa, farinha e corante.', price: 7.49 },
    { id: 3, id_category: 1, name: 'Torta de Morango', image: '/media/tortamorango.jpg', ingredients: 'ovo, açúcar, morango, farinha e corante,', price: 35.99 },
    { id: 4, id_category: 2, name: 'Donut de Chocolate', image: '/media/donutchocolate.jpg', ingredients: 'ovo, chocolate, farinha e corante.', price: 6.99 },
    { id: 5, id_category: 3, name: 'Cookies', image: '/media/cookies.jpg', ingredients: 'ovo, gotas de chocolate, farinha e fermento.', price: 1.99 },
    { id: 6, id_category: 3, name: 'Bolinhos', image: '/media/bolinho.jpg', ingredients: 'ovo, massa, farinha e gotas de chocolate.', price: 3.99 },
    { id: 7, id_category: 4, name: 'Brigadeiros', image: '/media/brigadeiros.jpg', ingredients: 'leite condensado e chocolate granulado.', price: 0.49 },
    { id: 8, id_category: 4, name: 'Trufas', image: '/media/trufas.jpg', ingredients: 'leite, leite condensado e farinha.', price: 0.49 },
    { id: 9, id_category: 5, name: 'Bolo de Morango', image: '/media/bolomorango.jpg', ingredients: 'ovo, leite, farinha e morangos.', price: 39.99 },
    { id: 10, id_category: 5, name: 'Bolo de Chocolate', image: '/media/bolochocolate.jpg', ingredients: 'ovo, leite, farinha e barras de chocolate.', price: 37.99 },
];

const Category = [
    { id: 1, name: 'Tortas', image: '/assets/pie.png' },
    { id: 2, name: 'Donuts', image: '/assets/donut.png' },
    { id: 3, name: 'Cookies', image: '/assets/cookies.png' },
    { id: 4, name: 'Brigadeiros', image: '/assets/truffle.png' },
    { id: 5, name: 'Bolos', image: '/assets/cake.png' },
]