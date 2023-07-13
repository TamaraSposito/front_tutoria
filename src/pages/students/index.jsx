import {PiStudentBold, PiUsersThreeBold, PiEnvelopeSimpleBold, PiPhoneBold, PiCakeBold,PiBookBold  } from 'react-icons/pi'
import {Content} from './style'
import {Input } from '../../components/input'
import {Button } from '../../components/button'
export function Students() {
    function handleSubmit(data, { reset }){
        console.log(data)
        reset()
    }
    return (
                <Content>
                    <section>
                        <form onSubmit={handleSubmit}>
                        <h1>Aluno</h1>
                        <Input name="name" title="nome" placeholder="nome" icon={PiStudentBold}/>
                        <Input name="sponsor" title="responsável" placeholder="responsável" icon={PiUsersThreeBold}/>
                        <Input name="sponsorMail" title="e-mail do responsável" placeholder="e-mail do responsável" icon={PiEnvelopeSimpleBold}/>
                        <Input name="sponsorPhone" title="telefone o responsável" placeholder="telefone do responsável" icon={PiPhoneBold}/>
                        <Input name="birthDay" title="data de nascimento" placeholder="data de nascimento" icon={PiCakeBold}/>
                        <Input name="year" title="ano / série" placeholder="ano / série" icon={PiBookBold}/>

                        <Button type="submit" title="salvar" />
                        </form>
                    </section>
                </Content>
    )
}