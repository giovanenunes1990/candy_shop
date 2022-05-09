import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${props => props.active === props.id ? '#c5c6c7' : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .3s

    @media screen and (max-width: 768px){
        width: calc(100% / 5);
    }

    @media screen and (max-width: 500px){
        width: 30%;
    }
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;