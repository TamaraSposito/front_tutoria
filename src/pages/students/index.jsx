import React, { useState} from "react";
import {PiStudentBold, PiUsersThreeBold, PiEnvelopeSimpleBold, PiPhoneBold, PiCakeBold,PiBookBold  } from 'react-icons/pi'
import {Content} from './style'
import {Input } from '../../components/input'
import {Button } from '../../components/button'
import { useFormik } from 'formik'
import {useEffect} from "react";
import {Select} from "../../components/Select/index.jsx";
import {useApi} from "../../hooks/apihooks.js";
import {useSnackbar} from "notistack";
export function Students() {
    const initialState = {
        id: "-1",
        name: "",
        sponsor: "",
        sponsorMail: "",
        sponsorPhone: "",
        birthday: "",
        roomId: "-1"
    }
    const {enqueueSnackbar} = useSnackbar();
    const [rooms, setRooms] = useState([])
    const [students, setStudents] = useState([])
    const [select, setSelect] = useState(-1)
    const getApi = async () =>{
        const responseRoom = await useApi('room', 'get')
        if(!responseRoom.error){
            setRooms([
                {
                    id: '-1',
                    description: "Selecione"
                },
                ...responseRoom.data
            ])
        } else {
            enqueueSnackbar("Erro ao buscar os anos/séries", {variant: "error"});
        }
        const responseStudent = await useApi('student', 'get')
        if(!responseStudent.error){
            setStudents([
                {
                    id: '-1',
                    name: "Novo"
                },
                ...responseStudent.data
            ])
        } else {
            enqueueSnackbar("Erro ao buscar os alunos", {variant: "error"});
        }
    }
    useEffect(() => {
        getApi()
    },[])
    const formik = useFormik({
        initialValues: initialState,
        enableReinitialize: true,
        onSubmit: async (values) => {
            const type = values.id === "-1" ?  "post" : "put";
            const response = await useApi('/student', type, values);
            if(!response.error){
                const message = type === "post" ? "Novo aluno salvo com sucesso" :
                    "Aluno atualizado sucesso";
                enqueueSnackbar(message ,{variant: "success"});
                await getApi()
            } else {
                enqueueSnackbar(response.error, {variant: "error"});
            }
        }
    })
    useEffect(() => {
        select == "-1" ? formik.setValues(initialState) :
            formik.setValues(students.find(x => x.id === select))
    }, [select])
    return (
                <Content>
                    <section>

                        <h1>Aluno</h1>
                            <Select
                                data={students}
                                title='name'
                                onChange={(e) => setSelect(e.target.value)}
                            />
                        <form onSubmit={formik.handleSubmit}>
                        <Input name="name"
                               title="nome"
                               placeholder="nome"
                               icon={PiStudentBold}
                               value={formik.values.name}
                               onChange={formik.handleChange}
                        />
                        <Input name="sponsor"
                               title="responsável"
                               placeholder="responsável"
                               icon={PiUsersThreeBold}
                               value={formik.values.sponsor}
                               onChange={formik.handleChange}
                        />
                        <Input name="sponsorMail"
                               title="e-mail do responsável"
                               placeholder="e-mail do responsável"
                               icon={PiEnvelopeSimpleBold}
                               value={formik.values.sponsorMail}
                               onChange={formik.handleChange}
                        />
                        <Input name="sponsorPhone"
                               title="telefone o responsável"
                               placeholder="telefone do responsável"
                               icon={PiPhoneBold}
                               value={formik.values.sponsorPhone}
                               onChange={formik.handleChange}
                        />
                        <Input name="birthday"
                               type="date"
                               title="data de nascimento"
                               placeholder="data de nascimento"
                               icon={PiCakeBold}

                               value={formik.values.birthday}
                               onChange={formik.handleChange}

                        />
                            <Select
                                icon={PiBookBold}
                                data={rooms}
                                title='description'
                                onChange={ (e) => formik.setValues('roomId', e.target.value)}
                                value={formik.values.roomId}
                            />
                        <Button type="submit" title="salvar" />
                        </form>
                    </section>
                </Content>
    )
}