import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "src/app/App";
import { useAppSelector } from "src/redux/Hooks";
import { userIsSet } from "src/redux/user/UserSlice";
import { Login } from "src/components/auth/Login";

export const Main = () => {
    const userIsLoggedIn : boolean = useAppSelector(userIsSet);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {!userIsLoggedIn && <Route path="login" element={<Login />} />}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}