import { Container, Content } from './styles';

// import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
// import { Button } from '../../components/Button';
// import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
// import { Input } from '../../components/Input';

export function Details(){

  return(
    <Container>
      <Header/>

      <main>
        <Content> 
          <ButtonText title="Voltar" /> 
          
          <h1>
            Meus Filmes
          </h1>


          <h2>
            teste
          </h2>
        </Content>


      </main>
    </Container>
  )

}