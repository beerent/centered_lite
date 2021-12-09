import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "src/app/App";
import { Login } from "src/routes/login/Login";

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}