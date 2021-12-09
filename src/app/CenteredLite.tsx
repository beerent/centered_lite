import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/redux/Hooks';
import { Link } from "react-router-dom";
import { userIsSet } from 'src/redux/user/UserSlice';
import { Paper } from '@mui/material';
import { Home } from 'src/components/home/Home';

export const CenteredLite = () => {
    const theme = createTheme();
    
    const userIsLoggedIn : boolean = useAppSelector(userIsSet);
    if (userIsLoggedIn) {
        return (
            <Home />
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Paper >
                <Link to="/login">Login</Link>
            </Paper>
        </ThemeProvider>
    )
}