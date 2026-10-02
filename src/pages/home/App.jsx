 import { Container, Header, Page, Resume, ResumeCard, SpanResumeCard } from "./styles"

function App() {
  
 
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
            <section>
              <form> {/* Ver se da para usar o react hook form */}
                <h2>Adicionar nota fiscal</h2>
                <div>
                  <label htmlFor="">Numero da nota*</label>
                  <input type="number" placeholder="Ex: 123" />
                </div>
                <div>
                  <label htmlFor="">Cliente*</label>
                  <input type="text" placeholder="Nome do Cliente"/>
                </div>
                <div>
                  <label htmlFor="">Empresa*</label>
                  <input type="" placeholder="Selecione..."/> {/* Usar react select */}
                </div>
                <div>
                  <label htmlFor="">Valor R$ *</label>
                  <input type="number" placeholder="Ex: 1.500,00"/>
                </div>
                <div>
                  <label htmlFor="">Emissão *</label>
                  <input type="date"/>
                </div>
                <div>
                  <label htmlFor="">Previsão de entrega *</label>
                  <input type="date"/>
                </div>
                <button type="submit">Adicionar nota</button>
                
              </form>
            </section>
            <section>
              <h2>Notas cadastradas(4)</h2>
            </section>
            

          </Page>
      </Container>
    </>
  )
}

export default App
