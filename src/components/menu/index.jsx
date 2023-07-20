import { Container, Brand, Menu, NewRegister } from './style'
import { Link } from 'react-router-dom'

import { PiPuzzlePieceBold, PiBookBold, PiUserBold, PiStudentBold,  PiChatsCircleBold} from 'react-icons/pi';

export function MenuVertical() {
    return (
        <Container>
            <Brand>
                <h1>Tutoria</h1>
            </Brand>
            <Menu>
                <h4>Cadastro </h4>
                <Link to="/series" > <PiBookBold /> Ano / Série </Link>
                <Link to="/students" >  <PiStudentBold /> Aluno </Link>
                <br/>
                <Link to="/" > <PiPuzzlePieceBold/> Sobre </Link>
            </Menu>

            <NewRegister to="/tutoring">
                <PiChatsCircleBold/>
                Registro
            </NewRegister>

        </Container>
    );
}
