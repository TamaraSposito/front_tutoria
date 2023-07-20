import React, {useEffect, useState} from 'react'
import { PiBookBold  } from 'react-icons/pi'
import { Content } from './style'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useApi } from '../../hooks/apihooks'
import {Select} from "../../components/Select/index.jsx";
import { useFormik } from "formik";
import {useSnackbar} from "notistack";
import * as yup from "yup";
import {Error} from "../../components/error/index.jsx";

export function Series() {
    const initialState = { id: "-1", description: "" }
    const {enqueueSnackbar} = useSnackbar();
    const [rooms, setRooms] = useState([])
    const [select, setSelect] = useState(-1)
    const [loading, setLoading] = useState(false);
    const validationSchema = yup.object({
        description: yup.string().required("Ano/série Requerido")
            .min(3, "Mínimo de 3 caracteres")
            .max(200, "Máximo de 10 caracteres"),
    })
    const getApi = async () =>{
        const response = await useApi('room', 'get')
        if(!response.error){
            setRooms([
                {
                    id: '-1',
                    description: "Novo"
                },
                ...response.data
            ])
        } else {
            enqueueSnackbar("Erro ao buscar os anos/séries", {variant: "error"});
        }
    }
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            setLoading(true)
            const type = values.id === "-1" ?  "post" : "put";
            const response = await useApi('/room', type, values);
            setLoading(false)
            if(response.error){
                enqueueSnackbar(response.error, {variant: "error"});
            } else {
                const message = type === "post" ? "Ano / Série salvo com sucesso" :
                    "Ano / Série atualizado com sucesso";
                enqueueSnackbar(message ,{variant: "success"});
                formik.setValues(initialState)
                await getApi()
            }
        }
    })
    useEffect(() => {
        getApi()
    }, [])

    useEffect(() => {
        select == "-1" ? formik.setValues(initialState) :
                       formik.setValues(rooms.find(x => x.id === select))
    }, [select])
    return (
                <Content>
                    <section>
                       <h1>Ano / Série </h1>
                        <form onSubmit={formik.handleSubmit}>
                        <Select
                            icon={PiBookBold}
                            data={rooms}
                            title='description'
                            onChange={(e) => setSelect(e.target.value)}
                        />

                        <Input
                            name="description"
                            title="ano-serie"
                            placeholder="Ano/série"
                            icon={PiBookBold}
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        { formik.errors.description && <Error message={formik.errors.description }/> }
                        <Button type="submit" title="salvar" loading={loading} />
                        </form>
                    </section>
              </Content>
    )
};