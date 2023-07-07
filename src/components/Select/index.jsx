import { Container } from "./styles";

export function Select({ icon: Icon, ...rest }) {
    return (
        <Container>
            <label>
                Alunos
                <select name="alunos" {...rest}>
                    <option value="students.name">Tamara</option>
                    <option value="students.name">Carol</option>
                    <option value="students.name">Anne</option>
                    <option value="students.name">Kamilly</option>
                </select>
            </label>
            {Icon && <Icon size={20} />}
        </Container>
    )
}