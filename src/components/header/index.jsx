import { Container, Logout, Profile } from "./styles"
import { RiShutDownLine} from "react-icons/ri"

export function Header() {
    return (
        <Container>
            <Profile>
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Tamara Sposito</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
};