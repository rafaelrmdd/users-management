import styled from "styled-components";
import "@fontsource/roboto";
import "@fontsource/arimo";

export const AddUserContainer = styled.div`

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
        
        &[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.8);
        }


        input{
            color: #808080;
            background: #000000;
            border: none;
            height: 50px;
            width: 150px;
            border-radius: 10px;

            padding: 10px 10px;
            font-size: 16px;


            &::placeholder{
                font-family: "Arimo", sans-serif;
                color: #808080;
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

    .addButton{
        background: #39e75f50;
        height: 25px;
        width: 75px;
        border-radius: 10px;
        
        font-family: "Arimo", sans-serif;

        &:hover{
            cursor: pointer;
        }

    }
      
    }
`


