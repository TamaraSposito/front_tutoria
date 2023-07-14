import { PiSquareFill } from "react-icons/pi";
import { Content } from './styles.js';
import { Textarea } from '../../components/textarea';
import { Select } from '../../components/select';
import { Button } from '../../components/button';
import React, {useEffect, useState} from "react";
import {useApi} from "../../hooks/apihooks.js";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import {Error} from "../../components/error/index.jsx";
import * as yup from "yup";
import _ from "lodash"
export function Tutoring() {
    const initialState = {
        "studentId": "-1",
        "description": ""
    }
    const {enqueueSnackbar} = useSnackbar();
    const [students, setStudents] = useState([])
    const [ select, setSelect] = useState(-1)
    const [records, setRecords] = useState([])
    const validationSchema = yup.object({
        studentId: yup.string().test('opa', 'Selecione o estudante', (value) => {
            if(value == "-1") return false
            return true
        }),
        description: yup.string().required("Descrição Requerida")
            .min(5, "Mínimo de 5 caracteres")
            .max(200, "Máximo de 10 caracteres"),
    })
   const getStudentsApi = async () =>{
        const responseStudent = await useApi('student', 'get')
        if(!responseStudent.error){
            setStudents([
                {
                    id: '-1',
                    name: "Selecione"
                },
                ...responseStudent.data
            ])
        } else {
            enqueueSnackbar("Erro ao buscar os alunos", {variant: "error"});
        }
    }
    const getRecordsApi = async () => {
        const responseRecords = await useApi('record', 'get', `student=${select}`)
        if(responseRecords.error){
            enqueueSnackbar(responseRecords.error, {variant: "error"});
        } else {
            setRecords(_.orderBy(responseRecords.data, ['createdAt'], ['desc']))
        }
    }

    useEffect(() => {
        getStudentsApi()
    },[])

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            const response = await useApi('record', 'post', values)
            if(response.error){
                enqueueSnackbar(response.error, {variant: "error"});
            } else {
                enqueueSnackbar("Tutoria salva com sucesso", {variant: "success"});
                await getRecordsApi()
                await formik.setFieldValue('description', "")
            }
        }
    })

    useEffect(() => {
        if(select  == "-1")
        {
            formik.setValues(initialState)
        } else {
            formik.setFieldValue("studentId", select)
            getRecordsApi()
        }
    }, [select])

    return (
                <Content>
                    <section>
                        <form onSubmit={formik.handleSubmit}>
                        <h1>Tutoria</h1>
                        <Select
                            name="studentId"
                            data={students}
                            title='name'
                            value={formik.values.studentId}
                            onChange={(e) => setSelect(e.target.value)}
                        />
                            {formik.errors.studentId &&  <Error message={formik.errors.studentId} /> }
                        <Textarea
                            name="description"
                            placeholder="Descrição"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                            {formik.errors.description && <Error message={formik.errors.description} /> }
                        <Button type="submit" title="salvar" />
                        </form>
                    </section>
                        {records.length > 0 && (
                            <section> <h1>Históricos</h1>
                                {records.map( (x, index) =>
                              (
                                    <p key={index}>
                                        <strong>Data: {new Date(x.createdAt).toLocaleDateString("pt-br") }</strong><PiSquareFill />
                                        <span>{x.description}</span></p>

                                ))}
                            <Button title="exportar excel" />
                    </section>)
                        }
                </Content>
    )
}