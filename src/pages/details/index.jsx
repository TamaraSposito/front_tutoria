// import {FiEdit, FiChevronsDown} from 'react-icons/fi'

import { Container, Content } from './styles.js'

import { Header } from '../../components/header'
import { Textarea} from '../../components/textarea'
import { Select } from '../../components/select'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttontext'

export function Details() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <ButtonText title="voltar" />
                    <div>
                    <h1>Tutoria</h1>
                    <Select />
                    <Textarea placeholder="descrição" />
                    <Button title="salvar" />
                    </div>
                </Content>





            </main>
        </Container>
    )
}