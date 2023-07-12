import { Link } from 'react-router-dom'

import { Background, Container, Form, PaperStar } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';


import { PiUserBold, PiLockSimpleBold, PiEnvelopeSimpleBold } from 'react-icons/pi';

export function SignUp(){
    return (
        <Container>
            <Form>
                <PaperStar />
                <h1>Tutoria</h1>
                <p>Aplicação para salvar e gerenciar registros de tutoria</p>

                <h2>Faça seu cadastro</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={PiUserBold}
                    // onChange={e => setName(e.target.value)}
                />
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
                    
                />

                <Button title="Cadastrar" /> 
                

                <Link to="/">
                    Volte para o login
                </Link>

            </Form>
            <Background/>
        </Container>
    )
}