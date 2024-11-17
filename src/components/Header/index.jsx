import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <div>
          <strong>Luan Reis</strong>
          <span>Sair</span>
        </div>

        <img 
          src="https://github.com/lreiss7.png" 
          alt="Imagem do usuário." 
        />
      </Profile>
    </Container>
  );
}