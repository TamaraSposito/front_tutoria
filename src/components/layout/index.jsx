import { Container } from './styles'
import {Header} from "../header/index.jsx";
import {MenuVertical} from "../menu/index.jsx";
export function AppLayout ({children}) {
    return (
            <Container>
                <Header />
                <MenuVertical />
                <main>
                    {children}
                </main>
            </Container>
        )
}

