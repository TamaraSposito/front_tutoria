import { Container } from "./styles";

export function Textarea({icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <textarea {...rest} />
        </Container>
    )
    }