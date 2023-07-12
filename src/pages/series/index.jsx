import { PiBookBold, PiCalendarBold  } from 'react-icons/pi'
import { Container, Content } from './style'

import { Header } from '../../components/header'
import { MenuVertical } from '../../components/menu';
import { Input } from '../../components/input'
import { Button } from '../../components/button'

export function Series() {
    return (
        <Container>
            <Header />
            <MenuVertical />
            <main>
                <Content>
                    <section>
                        <h1>Ano / Série</h1>
                        <Input title="ano-serie" placeholder="ano / série" icon={PiBookBold}/>
                        <Input title="ano escolar" placeholder="ano escolar" icon={PiCalendarBold}/>
                        <Button title="salvar" />
                    </section>
                </Content>
            </main>
        </Container>
    )
};