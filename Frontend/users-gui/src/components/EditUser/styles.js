import styled from "styled-components";
import "@fontsource/roboto";
import "@fontsource/arimo";

export const UpdateUserContainer = styled.div`

    width: 100%;
    height: 108px;

    padding: 0px 10px;
    display: flex;
    justify-content: space-between;

    form{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input{
            background: #000000;
            border: none;
            height: 50px;
            width: 150px;
            border-radius: 10px;

            padding: 0px 10px;
            font-size: 16px;


            &::placeholder{
                font-family: "Arimo", sans-serif;
            }
        }

        button{
            margin-left: auto;
        }
    }

`

export const ButtonContainer = styled.div`
    background: #1E1E1E;
    width: 100px;
    height: 100%;
    border: none;

    display: flex;
    justify-content: end;
    align-items: center;

    .updateButton{
        background: #FFFF0050;
        height: 25px;
        width: 75px;
        border-radius: 10px;
        
        font-family: "Arimo", sans-serif;

        &:hover{
            cursor: pointer;
        }        
    }
`