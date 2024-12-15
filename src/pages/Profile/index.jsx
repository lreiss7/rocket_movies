import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';



export function Profile(){
  return(
    <Container>
      <header>
        <a href="/">
          <ButtonText title="Voltar"/>
        </a>
      </header>


      <Form>
        <Avatar>
          <img 
            src="https://github.com/lreiss7.png" 
            alt="Foto" 
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar" 
              type="file"
            />
          </label>
        </Avatar>
        
        <Input 
          type="text" 
          placeholder="Nome" 
          icon={FiUser}
        />
        <Input 
          type="email" 
          placeholder="E-mail" 
          icon={FiMail}
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          icon={FiLock}
        />
        <Input 
          type="password" 
          placeholder="Nova senha" 
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>


    </Container>
  )
 
}