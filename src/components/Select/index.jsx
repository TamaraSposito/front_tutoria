import { Container } from "./styles";
export function Select({ data, title= '', icon: Icon, loading= false, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
                <select name="alunos" id="alunos-select"{...rest}>
                    {
                        data && data.map((x, index) => {
                         return <option value={x.id} key={index}>{
                             x[title]
                             } </option> 
                        })
                    }

                </select>
        </Container>
    )
}