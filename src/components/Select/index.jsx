import { Container } from "./styles";
export function Select({ data, icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
                <select name="alunos" id="alunos-select"{...rest}>
                    {
                        data && data.map((x, index) => {
                         return <option value={x.id} key={index}>{x.description}</option>
                        })
                    }

                </select>
        </Container>
    )
}