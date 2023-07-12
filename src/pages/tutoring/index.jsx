// import {FiEdit, FiChevronsDown} from 'react-icons/fi'
import { PiSquareFill } from "react-icons/pi";
import { Container, Content } from './styles.js';

import { Header } from '../../components/header';
import { MenuVertical } from '../../components/menu';
import { Textarea } from '../../components/textarea';
import { Select } from '../../components/select';
import { Button } from '../../components/button';

export function Tutoring() {
    return (
        <Container>
            <Header />
            <MenuVertical />
            <main>
                <Content>
                    <section>
                        <h1>Tutoria</h1>
                        <Select />
                        <Textarea placeholder="descrição" />
                        <Button title="salvar" />
                    </section>
                    <section>
                        <h1>Histórico</h1>
                        <p>
                            <strong>Data: 12/01/2023</strong><PiSquareFill />
                            <span>No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.</span></p>
                    </section>
                </Content>
            </main>
        </Container>
    )
}