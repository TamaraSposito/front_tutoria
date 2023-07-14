import { Container } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";
export function Button({title, loading= false, disable = false, ...rest}){
    return(
        <>
    <Container
        type="button"
        disabled={loading | disable}
        {...rest}>
        { title } { loading && <ClipLoader loading= {loading} color= "#CA96E5" size= {20} />}
    </Container>
   
</>
);}