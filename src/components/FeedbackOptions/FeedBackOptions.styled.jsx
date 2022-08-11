import styled from "styled-components";

export const BtnFeedBack = styled.button`
    width: 80px;
    height: 35px;
    font-size: 17px;
    border-radius: 5px;
    border: 1px solid rgb(128, 126, 126);
&:hover{
    background-color: #31a12e;
    color: #fff;
};
&:not(:last-child){
    margin-right: 20px;
    }
`