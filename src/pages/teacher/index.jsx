import {PiUserBold, PiEnvelopeSimpleBold, PiLockSimpleBold } from 'react-icons/pi'
import {Content} from './style'
import {Input } from '../../components/input'
import {Button } from '../../components/button'
import { Error } from '../../components/error'
import {useAuthUser} from "../../hooks/authhooks.js";
import {useFormik} from "formik";
import {useApi} from "../../hooks/apihooks.js";
import {useSnackbar} from "notistack";
import * as yup from "yup";
export function Teacher() {
    const { user } = useAuthUser()
    const {enqueueSnackbar} = useSnackbar();

    const validationSchema = yup.object({
        password: yup.string().required("Senha Atual Requerida")
            .min(5, "Mínimo de 5 caracteres")
            .max(30, "Máximo de 10 caracteres"),
        newPassword: yup.string().required("Senha Atual Requerida")
            .min(5, "Mínimo de 5 caracteres")
            .max(30, "Máximo de 10 caracteres"),
    })

    const formik = useFormik({
        initialValues: {
            "password": "",
            "newPassword": ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values)=>{
            const response = await useApi('user', 'patch', values)

            if(response.error){
                enqueueSnackbar(response.error, {variant: "error"});
            } else {
                enqueueSnackbar("Password alterado com sucesso", {variant: "success"});
            }

        }
    })
    return (
                <Content>
                    <section>
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
                        <form onSubmit={formik.handleSubmit}>
                        <Input name="password"
                               title="senha atual"
                               placeholder="senha atual"
                               icon={PiLockSimpleBold}
                               value={formik.values.password}
                               onChange={formik.handleChange}
                        />
                            { formik.errors.password && (
                                <Error message={formik.errors.password}/>
                            )}
                        <Input name="newPassword"
                               title="nova senha"
                               placeholder="nova senha"
                               icon={PiLockSimpleBold}
                               value={formik.values.newPassword}
                               onChange={formik.handleChange}
                        />
                            { formik.errors.newPassword && (
                                <Error message={formik.errors.newPassword}/>
                            )}
                        <Button type="submit" title="salvar" />
                        </form>
                    </section>
                </Content>
    )
}