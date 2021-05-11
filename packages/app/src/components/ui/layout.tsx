import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #eeeeee;
    position: relative;
    display: grid;
    width: 100%;
    min-height: 100%;
    overflow: auto;

    // mobile
    @media screen and (max-width: 768px) {
        
    }

    // desktop
    @media screen and (min-width: 768px) {
        grid-template-columns: 260px 1fr;
        grid-template-rows: 65px 1fr
    }
`;

export const Header = styled.div`
    background-color: #aaaaaa;
    position: relative;
    display: flex;
    
    // mobile
    @media screen and (max-width: 768px) {
        
    }

    // desktop
    @media screen and (min-width: 768px) {
        grid-row: 1;
        grid-column: 2;
    }
`;

export const Menu = styled.div`
    background-color: #bbbbbb;
    position: relative;
    display: flex;
    
    // mobile
    @media screen and (max-width: 768px) {
        
    }

    // desktop
    @media screen and (min-width: 768px) {
        grid-row: 1 / 3;
        grid-column: 1;
    }
`;

export const Content = styled.div`
    background-color: #ccc;
    position: relative;
    display: flex;
    
    // mobile
    @media screen and (max-width: 768px) {
        
    }

    // desktop
    @media screen and (min-width: 768px) {
        grid-row: 2;
        grid-column: 2;
    }
`;