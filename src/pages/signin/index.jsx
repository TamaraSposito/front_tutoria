
import { Background, Container, Form, PaperStar } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

import { PiEnvelopeSimpleBold, PiLockSimpleBold } from 'react-icons/pi';

export function SignIn(){

    return (
        <Container>
            <Form>
                <PaperStar />
                <h1>Tutoria</h1>
                <p>Aplicação para salvar e gerenciar registros de tutoria</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={PiEnvelopeSimpleBold}
                    // onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={PiLockSimpleBold}
                    // onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" />

                <a href="https://example.com">
                    Criar conta
                </a>

            </Form>
            <Background/>
        </Container>
    )
}