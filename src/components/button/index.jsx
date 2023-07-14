import { Container } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";
export function Button({title, loading= false, disable = false, ...rest}){
    return(
        <>
    <Container
        type="button"
        disabled={loading | disable}
        {...rest}>
        { title } { loading && <ClipLoader loading= {loading} color= "#BEF9E3" size= {20} />}
    </Container>
   
</>
);}