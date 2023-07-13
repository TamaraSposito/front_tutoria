import React, {useEffect, useState} from 'react'
import { PiBookBold  } from 'react-icons/pi'
import { Content } from './style'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useApi } from '../../hooks/apihooks'
import {Select} from "../../components/Select/index.jsx";
import { useFormik } from "formik";
import {useSnackbar} from "notistack";

export function Series() {
    const initialState = { id: "-1", description: ""}
    const {enqueueSnackbar} = useSnackbar();
    const [roomSelect, setRoomSelect] = useState([])
    const [select, setSelect] = useState(-1)
    const getApi = async () =>{
        const response = await useApi('room', 'get')
        if(!response.error){
            setRoomSelect([
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
        onSubmit: async (values) => {
            const type = values.id === "-1" ?  "post" : "put";
            const response = await useApi('/room', type, values);

            if(!response.error){
                const message = type === "post" ? "Ano / Série salvo com sucesso" :
                                                  "Ano / Série atualizado com sucesso";
                enqueueSnackbar(message ,{variant: "success"});
                await getApi()
            } else {
                enqueueSnackbar(response.error, {variant: "error"});
            }
        }
    })
    useEffect(() => {
        getApi()
    }, [])
    useEffect(() => {
      select == "-1" ? formik.setValues(initialState) :
                       formik.setValues(roomSelect.find(x => x.id === select))
    }, [select])
    return (
                <Content>
                    <section>
                       <h1>Ano / Série</h1>
                        <Select data={roomSelect}
                        onChange={(e) => setSelect(e.target.value)}
                        />
                        <form onSubmit={formik.handleSubmit}>
                        <Input
                            name="description"
                            title="ano-serie"
                            placeholder="ano / série"
                            icon={PiBookBold}
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        <Button type="submit" title="salvar" />
                        </form>
                    </section>
              </Content>
    )
};