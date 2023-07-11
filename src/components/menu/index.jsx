import { Container } from './style'
import { Link } from 'react-router-dom'

import { PiPuzzlePieceBold, PiBookBold, PiUserBold, PiStudentBold,  PiChatsCircleBold} from 'react-icons/pi';

export function MenuVertical() {
    return (
        <Container>
            <div>
                <h1>Tutoria</h1>
            </div>
            <br />

            <menu>
                <h4>Cadastro</h4>
                <Link to="/series" > <PiBookBold /> Cadastro Ano / Série </Link>
                <Link to="/students" >  <PiStudentBold /> Cadastro aluno </Link>
                <Link to="/teacher" > <PiUserBold /> Cadastro tutor </Link>
                <br/>
                <Link to="/tutoring" > <PiChatsCircleBold/> Registro de tutoria </Link>

                <Link to="/home" > <PiPuzzlePieceBold/> Sobre </Link>
            </menu>

        </Container>
    );
}
