import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from '../pages/home'
import { Tutoring } from '../pages/tutoring';
import { Series } from '../pages/series';
import { Students } from '../pages/students';
import { Teacher } from '../pages/teacher';
import {useAuthUser} from "../hooks/authhooks.js";
import {useEffect} from "react";

export function AppRoutes() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthUser();

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/", { replace: true} )
        }
    }, [isAuthenticated])

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/students" element={<Students/>} />
            <Route path="/teacher" element={<Teacher/>} />
            <Route path="/tutoring" element={<Tutoring/>} />
        </Routes>
    )
};