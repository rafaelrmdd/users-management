import "@fontsource/roboto";
import "@fontsource/arimo";
import styled from "styled-components"

export const UserItemsContainer = styled.table` 
    color: #FFFFFF;
    font-family: "Arimo", sans-serif;
    text-align: left;

    width: 100%;
    height: 75px;
    padding-left: 10px;
    padding-right: 15px;

    margin-top: 20px;

        .removeButton{
        background: #FF000050;
        height: 25px;
        width: 60px;
        border-radius: 10px;
        border: none;
    
        font-family: "Arimo", sans-serif;

        &:hover{
            cursor: pointer;
        }

    }


    th:nth-child(1), td:nth-child(1) { width: 20%; }
    th:nth-child(2), td:nth-child(2) { width: 20%; }
    th:nth-child(3), td:nth-child(3) { width: 30%; }
    th:nth-child(4), td:nth-child(4) { width: 30%; }
    th:nth-child(5), td:nth-child(5) { width: 30%; }
`

export const ItemsPositionContainer = styled.div`
    height: 16px;
    min-width: 0px;
`