import { Controller,useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AddNota, Button, CardNotaCadastrada, Container, ContainerNotasCadastrada, Header, Input, InputWrapper, Page, Resume, ResumeCard, SelectCompanies, SelectNotas, SpanErrorMessage, SpanResumeCard } from "./styles"
import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const schema = yup.object({
    numero: yup
      .number()
      .typeError("O valor tem que ser um número")
      .required("Numero da nota é obrigatório")
      .integer('O valor tem que ser inteiro')
      .positive("O valor deve ser maior que zero"),

    cliente: yup
      .string()
      .required("Cliente é obrigatório"),

    valor: yup
      .number()
      .typeError("O valor tem que ser um número")
      .required("Valor é obrigatório")
      .positive("O valor deve ser maior que zero"),
    empresa: yup
      .object()
      .required("Empresa é obrigatório"),
    emissao: yup
    .string('Insira uma data valida')
    .required('Emissão é obrigatório'),
    entrega: yup
    .string('Insira uma data valida')
    .required('Entrega é obrigatório')
  }).required();

  const options = [
    { value: 'Odontomaster', label: 'Odontomaster' },
    { value: 'Bhdental', label: 'Bhdental' },
    { value: 'Dentemed', label: 'Dentemed' },
    { value: 'Miamimed', label: 'Miamimed' },
    { value: 'Betaniamed', label: 'Betaniamed' },
    { value: 'Odontoprime', label: 'Odontoprime' },
  ]
  const status = [
    { value: 'Pendente entrega', label: 'Pendente entrega' },
    { value: 'Entregue', label: 'Entregue' },
    { value: 'Paga', label: 'Paga' },
    { value: 'Devolvida', label: 'Devolvida' }
  ]
  const { register, handleSubmit, reset, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema)
  });

  const [notas, setNotas] = useState([]);

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
                <Input type="number" placeholder="Ex: 123" {...register("numero")} />
                <SpanErrorMessage>{errors.numero?.message}</SpanErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="">Cliente*</label>
                <Input type="text" placeholder="Nome do Cliente"  {...register("cliente")} />
                <SpanErrorMessage>{errors.cliente?.message}</SpanErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="">Empresa*</label>
                <Controller
                name="empresa"
                control={control}
                render={({field})=>(
                  <SelectCompanies
                  {...field}
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
                  }}
                  placeholder='Selecione uma empresa'
                  options={options}
                  menuPortalTarget={document.body}
                />
                )}
                />
                <SpanErrorMessage>{errors.empresa?.message}</SpanErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="">Valor R$ *</label>
                <Input type="number" step="0.01"{...register("valor", {
                  valueAsNumber: true,
                })}></Input>
                {/* <Controller
                  name="valor"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <NumericFormat
                      {...field}
                      value={field.value || ""}
                      // onValueChange={(values) => {
                      //   field.onChange(values.floatValue);
                      // }}
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="R$ "
                      decimalScale={2}
                      fixedDecimalScale
                      customInput={Input}
                      placeholder="Ex: R$ 1.500,00"
                    />
                  )}
                /> */}
                <SpanErrorMessage>{errors.valor?.message}</SpanErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="">Emissão *</label>
                <Input type="date"  {...register("emissao")} />
                <SpanErrorMessage>{errors.emissao?.message}</SpanErrorMessage>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="">Previsão de entrega *</label>
                <Input type="date"  {...register("entrega")} />
                <SpanErrorMessage>{errors.entrega?.message}</SpanErrorMessage>
                {/* Adicionar um botao ou um input para quando ja estiver entregue */}
              </InputWrapper>
              <Button type="submit">Adicionar nota</Button>
            </form>
          </AddNota>
          <ContainerNotasCadastrada>
            <h2>Notas cadastradas({notas.length})</h2>
            {notas.map((nota) => (
              <CardNotaCadastrada key={nota.numero}>
                <div>
                  <h2>NF {nota.numero}</h2>
                  {/* <p>{status.pending}</p> */}
                </div>
                <div>
                  <p>{nota.cliente}</p>·
                  <p>{formatPrice(nota.valor)}</p>·
                  <p>Emitida em: {formatDate(nota.emissao)}</p>·
                  <p>Previsão de entrega: {formatDate(nota.entrega)}</p>·
                </div>
                <textarea></textarea>
                <SelectNotas
                  options={status}
                  placeholder='Selecione...'
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
                  }}
                ></SelectNotas>
              </CardNotaCadastrada>
            ))}
          </ContainerNotasCadastrada>


        </Page>
      </Container>
    </>
  )
}

export default App
