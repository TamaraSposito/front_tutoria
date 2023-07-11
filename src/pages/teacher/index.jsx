import {PiUserBold, PiEnvelopeSimpleBold, PiLockSimpleBold } from 'react-icons/pi'
import {Container, Content} from './style'

import { Header } from '../../components/header'
import {Input } from '../../components/input'
import {Button } from '../../components/button'
import { MenuVertical } from '../../components/menu';


export function Teacher() {
    return (
        <Container>
            <Header />
            <MenuVertical />
            <main>
                <Content>
                    <div>
                        <h1>Tutor</h1>
                        <Input title="nome" placeholder="Tamara Sposito" icon={PiUserBold}/>
                        <Input title="email" placeholder="tamara@mail.com" icon={PiEnvelopeSimpleBold}/>

                        <Input title="senha atual" placeholder="senha atual" icon={PiLockSimpleBold}/>
                        <Input title="nova senha" placeholder="nova senha" icon={PiLockSimpleBold}/>

                        <Button title="salvar" />
                    </div>
                </Content>
            </main>
        </Container>
    )
}