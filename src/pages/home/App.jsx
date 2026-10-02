 import { Controller, useForm } from "react-hook-form";
import { AddNota, Button, CardNotaCadastrada, Container, Header, Input, InputWrapper, Page, Resume, ResumeCard, SelectCompanies, SelectNotas, SpanResumeCard } from "./styles"
import { NumericFormat } from "react-number-format";
import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const options = [
  { value: 'Odontomaster', label: 'Odontomaster' },
  { value: 'Bhdental', label: 'Bhdental' },
  { value: 'Dentemed', label: 'Dentemed' },
  { value: 'Miamimed', label: 'Miamimed' },
  { value: 'Betaniamed', label: 'Betaniamed' },
  { value: 'Odontoprime', label: 'Odontoprime' },
]
const status = [
  {value: 'Pendente entrega', label: 'Pendente entrega'},
  {value: 'Entregue', label: 'Entregue'},
  {value: 'Paga', label: 'Paga'},
  {value: 'Devolvida', label: 'Devolvida'}
]
const { register, handleSubmit, reset, control } = useForm();

const [notas, setNotas] = useState([]);
console.log(notas)
const onSubmit = (data) => {
   const novasNotas = [...notas, data];

  setNotas(novasNotas);

  localStorage.setItem("notas", JSON.stringify(novasNotas));
  reset();
};
useEffect(() => {
  const notasSalvas = JSON.parse(localStorage.getItem("notas")) || [];

  setNotas(notasSalvas);
}, []);
  return (
    <>
    
      <Container>
          <Header>
            <span>
              NF
            </span>
            <div>
              <h1>Controle de Notas Fiscais</h1>
              <p>Cadastre e acompanhe o status de cada nota</p>
            </div>
          </Header>
          <Page>
            <Resume>
              <ResumeCard>
                <p>3</p>
                <SpanResumeCard $status='pending'>{status[0].value}</SpanResumeCard>
              </ResumeCard>
              <ResumeCard>
                <p>2</p>
                <SpanResumeCard $status='delivered'>{status[1].value}</SpanResumeCard>
              </ResumeCard>
              <ResumeCard>
                <p>0</p>
                <SpanResumeCard $status='paid'>{status[2].value}</SpanResumeCard>
              </ResumeCard>
              <ResumeCard>
                <p>1</p>
                <SpanResumeCard $status='cancelled'>{status[3].value}</SpanResumeCard>
              </ResumeCard>
            </Resume>
            <AddNota>
              <form onSubmit={handleSubmit(onSubmit)}> {/* Ver se da para usar o react hook form */}
                <h2>Adicionar nota fiscal</h2>
                <InputWrapper>
                  <label htmlFor="">Numero da nota*</label>
                  <Input type="number" placeholder="Ex: 123"  {...register("numero")}/>
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Cliente*</label>
                  <Input type="text" placeholder="Nome do Cliente"  {...register("cliente")}/>
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Empresa*</label>
                  <SelectCompanies 
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "#2cc6ec13",
                        border: "1px solid #03030321",
                        borderRadius: "10px",
                        boxShadow: "none",
                      }),
                      input: (base) => ({
                        ...base,
                        color: "#030303",
                      }),
                      // singleValue: (base) => ({
                      //   ...base,
                      //   color: "#030303",
                      // }),
                    }}
                    placeholder='Selecione uma empresa'
                    options={options}
                    menuPortalTarget={document.body}
                  /> {/* Usar react select */}
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Valor R$ *</label>
                  {/* <input type="text"  placeholder="Ex: 1.500,00" step="0.01" {...register("valor")}/> */}
                  <Controller
                    name="valor"
                    control={control}
                    render={({ field }) => (
                      <NumericFormat
                        {...field}
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="R$ "
                        decimalScale={2}
                        fixedDecimalScale
                        customInput={Input}
                      />
                    )}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Emissão *</label>
                  <Input type="date"  {...register("emissao")}/>
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Previsão de entrega *</label>
                  <Input type="date"  {...register("entrega")}/>
                </InputWrapper>
                <Button type="submit">Adicionar nota</Button>
              </form>
            </AddNota>
            <section>
              <h2>Notas cadastradas({notas.length})</h2>
              {notas.map((nota) => (
                    <CardNotaCadastrada key={nota.numero}>
                      <div>
                        <h2>NF {nota.numero}</h2>
                        {/* <p>{status.pending}</p> */}
                      </div>
                      <div>
                        <p>{nota.cliente}</p>·  
                        <p>{nota.valor}</p>·
                        <p>Emitida em: {formatDate(nota.emissao)}</p>·                   
                        <p>Previsão: {formatDate(nota.entrega)}</p>·
                      </div>
                      <textarea name="" id=""></textarea>
                      <SelectNotas options={status}></SelectNotas>
                    </CardNotaCadastrada>
                ))}
            </section>
            

          </Page>
      </Container>
    </>
  )
}

export default App
