import { Link } from 'react-router-dom'
import { Background, Container, PaperStar } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { PiUserBold, PiLockSimpleBold, PiEnvelopeSimpleBold } from 'react-icons/pi';
export function SignUp(){
    return (
        <Container>
            <form>
                <PaperStar />
                <h1>Tutoria</h1>
                <p>Aplicação para salvar e visualizar registros de tutoria</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={PiUserBold}
                    name="name"
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={PiEnvelopeSimpleBold}
                    name="email"
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={PiLockSimpleBold}
                    name="password"
                />

                <Button type="submit" title="Cadastrar" />
                

                <Link to="/">
                    Volte para o login
                </Link>

            </form>
            <Background/>
        </Container>
    )
}