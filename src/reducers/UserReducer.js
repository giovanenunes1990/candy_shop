const initialState = {
    tax: 5.29,
    name: '',
    address: {},
    order: [],
    total: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_NAME':
            return { ...state, name: action.payload.name };
            break;
        case 'SET_TAX':
            return { ...state, tax: action.payload.tax };
            break;
        case 'SET_ADDRESS':
            return { ...state, address: action.payload.address };
            break;
        case 'SET_ORDER':
            return { ...state, order: action.payload.order };
            break;
        case "CHANGE_TOTAL":
            return { ...state, total: action.payload.total };
            break;
    }

    return state;
} 