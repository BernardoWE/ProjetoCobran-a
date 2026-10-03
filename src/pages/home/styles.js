import styled from "styled-components";
import Select from 'react-select'

export const Container = styled.div`
    min-height: 100vh;
    /* width: 100%; */
   
`
export const Header = styled.header`
    border-bottom: 1px solid #000;
    padding:20px;
    line-height: 5px;
    display: flex;
    gap: 20px;
    align-items: center;
    
    span{
        background-color: #2c64ff;
        padding: 20px 10px;
        border-radius: 40%;
        color: #fff;
        font-weight: 900;
    }
`
export const Page = styled.main`
    background-color: #e4f2ff;
    min-height: 100vh;
    /* width: 100%; */
    padding-inline: 20px;
    padding-top: 20px;
`
export const Resume = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr );
    gap: 10px;
`
export const ResumeCard = styled.div`
    background-color: #fff;
    border: 1px solid #03030321;
    border-collapse: collapse;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    p{
        line-height: 0;
        color: #110f0f;
        font-size: 2em;
        font-weight: bolder;
    }
    transition: box-shadow ease-in .2s;
    &:hover{
       /* -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.53);  */
        box-shadow: 0px 2px 20px -10px rgba(0,0,0,0.33);
    }

`
export const SpanResumeCard = styled.span`
    background-color: ${({ $status }) => {
    if ($status === "pending") return "#f0e4c4";
    if ($status === "delivered") return "#98c7d683";
    if ($status === "paid") return "#acd698a2";
    if ($status === "cancelled") return "#d69c9870";
  }};
    border-radius: 10px;
    padding-inline: 8px;
    width: fit-content;
    font-size: smaller;

`
export const AddNota = styled.section`
    background-color: #fff;
    border: 1px solid #03030321;
    border-collapse: collapse;
    border-radius: 10px;
    padding: 15px;
    /* display: flex; */
    /* flex-direction: column; */
    margin-top: 20px;
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    label{
        font-weight: bolder;
    }

`
export const Input = styled.input`
    border: 1px solid #03030321;
    background-color: #2cc6ec13;
    border-radius: 10px;
    padding: 10px;
`
export const Button = styled.button`
    background-color: #1969b4de;
    color: #fff;
    font-weight: bolder;
    border: none;
    border-radius: 10px;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        opacity: .9;
    }
`
export const SelectCompanies = styled(Select)`
   
`
export const ContainerNotasCadastrada = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const CardNotaCadastrada = styled.div`
    background-color: #fff;
    border: 1px solid #03030321;
    border-collapse: collapse;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p, h2{
        margin: 0;
    }
    div:nth-child(2){
        display: flex;
        gap: 5px;
    }
    textarea{
        border: 1px solid #03030321;
        background-color: #2cc6ec13;
        border-radius: 10px;
        padding: 10px;
        resize: none;
    }
`
export const SelectNotas = styled(Select)`
    
`
export const SpanErrorMessage = styled.span`

`