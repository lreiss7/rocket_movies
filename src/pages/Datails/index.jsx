import { Container, Links } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
// import { Input } from '../../components/Input';

export function Details(){

  return(
    <Container>
      <Header/>

      <ButtonText title="Voltar"/>

      <Section title="Marcadores">
        <Links>
          <li><a href="#">www.rocketmovies.com.br</a></li>
        </Links>
        <Tag title="Ação" />
        

      </Section>

      <Button title="Entrar" /> 
    </Container>
  )

}