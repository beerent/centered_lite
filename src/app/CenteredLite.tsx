import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/redux/Hooks';
import { useNavigate } from "react-router-dom";
import { userIsSet } from 'src/redux/user/UserSlice';
import React, { useEffect } from 'react';
import { Header } from 'src/components/common/Header';
import { Intro } from 'src/components/login/Intro';
import { Padding } from 'src/components/util/Padding';
import Footer from 'src/components/common/Footer';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    button: {
        paddingTop: "3vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export const CenteredLite = () => {
    const theme = createTheme();
    const navigate = useNavigate();
    const classes = useStyles();

    const userIsLoggedIn: boolean = useAppSelector(userIsSet);

    useEffect(() => {
        if (userIsLoggedIn) {
            navigate("/home");
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Header />
                <Padding height={"3vh"} />
                <Intro />
                <Padding height={"30vh"} />
                <div className={classes.button}>
                    <Button onClick={() => {navigate("/login")}} variant="contained">Login</Button>
                </div>
                <Footer />
            </React.Fragment>
        </ThemeProvider>
    )
}