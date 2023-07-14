import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Background, Container, PaperStar} from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { PiEnvelopeSimpleBold, PiLockSimpleBold } from 'react-icons/pi';
import {useAuthMethod} from "../../hooks/authhooks.js";
import { useFormik } from "formik";
import {useSnackbar} from "notistack";

export function SignIn() {
    const {  signInUser } = useAuthMethod()
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        localStorage.removeItem('token');
    }, [])
    const formik = useFormik({
        initialValues: {
            mail: 'admin@admin.com',
            password: 'admin@admin.com'
        },
        onSubmit: async (values) => {
                const response = await signInUser(values)
            console.log(response)
            if(response.error){
                enqueueSnackbar(response.error, {variant: "error"})
            }
        }
    })

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <PaperStar />
                <h1>Tutoria</h1>
                <p>Aplicação para salvar e visualizar registros de tutoria</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={PiEnvelopeSimpleBold}
                    name="mail"
                    value={formik.values.mail}
                    onChange={formik.handleChange}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={PiLockSimpleBold}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button type="submit" title="Entrar" />
                

                <Link to="/signup">Criar conta</Link>

            </form>
            <Background/>
        </Container>
    )
}