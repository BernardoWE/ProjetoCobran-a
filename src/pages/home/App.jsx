 import { AddNota, Button, Container, Header, InputWrapper, Page, Resume, ResumeCard, SelectCompanies, SpanResumeCard } from "./styles"

function App() {
  const options = [
  { value: 'Odontomaster', label: 'Odontomaster' },
  { value: 'Bhdental', label: 'Bhdental' },
  { value: 'Dentemed', label: 'Dentemed' },
  { value: 'Miamimed', label: 'Miamimed' },
  { value: 'Betaniamed', label: 'Betaniamed' },
  { value: 'Odontoprime', label: 'Odontoprime' },
]
 
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
                <SpanResumeCard $status='pending'>Pendente entrega</SpanResumeCard>
              </ResumeCard>
              <ResumeCard>
                <p>2</p>
                <SpanResumeCard $status='delivered'>Entregue</SpanResumeCard>
              </ResumeCard>
              <ResumeCard>
                <p>0</p>
                <SpanResumeCard $status='paid'>Paga</SpanResumeCard>
              </ResumeCard>
              <ResumeCard>
                <p>1</p>
                <SpanResumeCard $status='cancelled'>Devolvida</SpanResumeCard>
              </ResumeCard>
            </Resume>
            <AddNota>
              <form> {/* Ver se da para usar o react hook form */}
                <h2>Adicionar nota fiscal</h2>
                <InputWrapper>
                  <label htmlFor="">Numero da nota*</label>
                  <input type="number" placeholder="Ex: 123" />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Cliente*</label>
                  <input type="text" placeholder="Nome do Cliente"/>
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
                  <input type="number" placeholder="Ex: 1.500,00"/>
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Emissão *</label>
                  <input type="date"/>
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="">Previsão de entrega *</label>
                  <input type="date"/>
                </InputWrapper>
                <Button type="submit">Adicionar nota</Button>
                
              </form>
            </AddNota>
            <section>
              <h2>Notas cadastradas(4)</h2>
            </section>
            

          </Page>
      </Container>
    </>
  )
}

export default App
