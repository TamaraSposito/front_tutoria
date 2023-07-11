import { Routes, Route} from 'react-router-dom';

import { SignIn } from '../pages/signin'
import { SignUp } from '../pages/signup';


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" elemnet={<SignIn/>} />
            <Route path="/signup" elemnet={<SignUp/>} />
        </Routes>
    )
};