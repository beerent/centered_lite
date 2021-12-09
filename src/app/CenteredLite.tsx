import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/redux/Hooks';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userIsSet } from 'src/redux/user/UserSlice';
import { Paper } from '@mui/material';
import { Home } from 'src/components/home/Home';
import { useEffect } from 'react';

export const CenteredLite = () => {
    const theme = createTheme();
    const navigate = useNavigate();
    
    const userIsLoggedIn : boolean = useAppSelector(userIsSet);

    useEffect(() => {
        if (userIsLoggedIn) {
            navigate("/home");
        }    
    })

    return (
        <ThemeProvider theme={theme}>
            <Paper >
                <Link to="/login">Login</Link>
            </Paper>
        </ThemeProvider>
    )
}