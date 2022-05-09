import styled from 'styled-components';
// #f00202
export const Container = styled.div`
   
    border-radius: 10px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`;

export const Logo = styled.img`
    width 230px;

`;

export const SearchInput = styled.input`
    border: 1px solid gray;
    outline: 0;
    border-radius: 25px;
    width: ${props => props.active ? 300 : 0}px;
    height: 50px;
    background: white;
    background-image: url('/assets/search.png');
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 50px;
    transition: all ease .4s;
    font-size: 16px;
    font-style: italic;
    cursor: pointer; 

    &:focus{
        cursor: text;
    }

    @media screen and (max-width: 768px){
        margin-top: 20px;
        width: 90%;
        max-width: 300px;
        height: 45px;
    }
`; 