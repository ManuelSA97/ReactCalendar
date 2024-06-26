import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";
import { LoaderSpinner } from "../calendar/pages/LoaderSpinner";

export const AppRouter = () => {

    const {checkAuthToken, status} = useAuthStore();
    // const authStatus = 'not-authenticated'; // authenticated not-authenticated
    
    useEffect(() => {
        checkAuthToken();
    }, []);
    
    
    if(status === 'checking'){
        return(
            <LoaderSpinner/>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                ? (
                    <>
                        <Route path="/auth/*" element={<LoginPage></LoginPage>}/>
                        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                    </>
                )
                : (
                    <>
                        <Route path="/" element={<CalendarPage></CalendarPage>}/>
                        <Route path="/*" element={<Navigate to="/"/>}/>
                    </>
                )
            }
        </Routes>
    )
}
