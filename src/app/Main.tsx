import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "src/redux/Hooks";
import { userIsSet } from "src/redux/user/UserSlice";
import { CenteredLite } from "src/app/CenteredLite";
import { Home } from "src/components/home/Home";
import { Login } from "src/components/login/Login";

export const Main = () => {
    const userIsLoggedIn : boolean = useAppSelector(userIsSet);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CenteredLite />} />
                {!userIsLoggedIn && <Route path="login" element={<Login />} />}
                {userIsLoggedIn && <Route path="home" element={<Home />} />}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}