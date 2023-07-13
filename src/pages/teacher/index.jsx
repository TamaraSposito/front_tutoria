import {PiUserBold, PiEnvelopeSimpleBold, PiLockSimpleBold } from 'react-icons/pi'
import {Content} from './style'
import {Input } from '../../components/input'
import {Button } from '../../components/button'
import {useAuthUser} from "../../hooks/authhooks.js";
export function Teacher() {

    const { user } = useAuthUser()
    function handleSubmit(data, { reset }){
        reset()
    }
    return (
                <Content>
                    <section>
                        <form onSubmit={handleSubmit}>
                        <h1>Tutor</h1>
                        <Input name="name"
                               title="nome"
                               placeholder={"Nome"}
                               icon={PiUserBold}
                               defaultValue={user.displayName}
                        />
                        <Input name="email" title="email"
                               placeholder="email" icon={PiEnvelopeSimpleBold}
                               defaultValue={user.email}
                        />
                        <Input name="password1" title="senha atual" placeholder="senha atual" icon={PiLockSimpleBold}
                        />
                        <Input name="password2" title="nova senha" placeholder="nova senha" icon={PiLockSimpleBold} />
                        <Button type="submit" title="salvar" />
                        </form>
                    </section>
                </Content>
    )
}