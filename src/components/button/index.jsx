import { Container } from "./styles";

export function Button({title, loading= false, disable = false, ...rest}){
    return(
    <Container
        type="button"
        disabled={loading | disable}
        {...rest}>
                    {loading ? 'Carregando...' : title}
    </Container>
);}