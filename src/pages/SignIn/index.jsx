import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>Rockets Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2> Faça seu login</h2>

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

        <Button title="Entrar"/>
        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  );
}