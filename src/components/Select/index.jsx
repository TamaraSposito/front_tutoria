import { Container } from "./styles";


export function Select({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
                <select name="alunos" id="alunos-select"{...rest}>
                    <option value="">-- nome do aluno --</option>
                    <option value="students.name">Tamara</option>
                    <option value="students.name">Carol</option>
                    <option value="students.name">Anne</option>
                    <option value="students.name">Kamilly</option>
                </select>
            
        </Container>
    )
}