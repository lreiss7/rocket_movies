import { Container, Form, NoteWrapper, MovieDetails, Footer } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Noteitem } from '../../components/Noteitem';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" />
            <h1>Novo Filme</h1>  
          </header>

          <MovieDetails>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (0 a 5)" />
          </MovieDetails>
          
          <Textarea placeholder="Observações"/>

          <Section title="Marcadores">
            <NoteWrapper>
              <Noteitem value="React"/> 
              <Noteitem isNew placeholder="Novo marcador"/> 
    
            </NoteWrapper>
          </Section>
          
          <Footer>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </Footer>
        </Form>  
        
      </main>
    </Container>
  );


}