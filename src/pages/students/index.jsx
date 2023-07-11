import {PiStudentBold, PiUsersThreeBold, PiEnvelopeSimpleBold, PiPhoneBold, PiCakeBold,PiBookBold  } from 'react-icons/pi'
import {Container, Content} from './style'

import { Header } from '../../components/header'
import { MenuVertical } from '../../components/menu';
import {Input } from '../../components/input'
import {Button } from '../../components/button'

export function Students() {
    return (
        <Container>
            <Header />
            <MenuVertical />
            <main>
                <Content>
                    <div>
                        <h1>Aluno</h1>
                        <Input title="nome" placeholder="nome" icon={PiStudentBold}/>
                        <Input title="responsável" placeholder="responsável" icon={PiUsersThreeBold}/>
                        <Input title="e-mail do responsável" placeholder="e-mail do responsável" icon={PiEnvelopeSimpleBold}/>
                        <Input title="telefone do responsável" placeholder="telefone do responsável" icon={PiPhoneBold}/>
                        <Input title="data de nascimento" placeholder="data de nascimento" icon={PiCakeBold}/>
                        <Input title="ano / série" placeholder="ano / série" icon={PiBookBold}/>

                        <Button title="salvar" />
                    </div>
                </Content>
            </main>
        </Container>
    )
}