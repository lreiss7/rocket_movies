import { Container, Profile } from './styles';
import { ButtonText } from '../../components/ButtonText';

export function Header() {
  return (
    <Container>
      <Profile>
        <h1>
          RocketMovies
        </h1>

        <input placeholder="Pesquisar pelo título"></input>
    
        <aside>
          <div className="user-profile">
            <strong>Luan Reis</strong>

            <ButtonText title="sair"/>
          </div>
          <img 
            src="https://github.com/lreiss7.png" 
            alt="Imagem do usuário." 
          />
        </aside>


      </Profile>
    </Container>
  );
}