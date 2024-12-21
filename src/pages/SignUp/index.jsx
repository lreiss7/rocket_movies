import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

export function SignUp(){
  return (
    <Container>
      <Form>
        <h1>Rockets Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2> Crie sua conta</h2>

        <Input 
          type="text"  
          placeholder="Nome" 
          icon={FiUser}
        />
        <Input 
          type="text"  
          placeholder="E-mail" 
          icon={FiMail}
        />
        <Input 
          type="password" 
          placeholder="Senha"
          icon={FiLock}
        />

        <Button title="Cadastrar"/>
        <ButtonText title="Voltar para o login"/>
      </Form>
      <Background />
    </Container>
  );
}