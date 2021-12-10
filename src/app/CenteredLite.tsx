import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/redux/Hooks';
import { Link, useNavigate } from "react-router-dom";
import { userIsSet } from 'src/redux/user/UserSlice';
import React, { useEffect } from 'react';
import { Header } from 'src/components/common/Header';
import { Intro } from 'src/components/login/Intro';
import { Padding } from 'src/components/util/Padding';
import { Button, Grid } from '@mui/material';

export const CenteredLite = () => {
    const theme = createTheme();
    const navigate = useNavigate();

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
                <Padding height={"20vh"} />

                <Grid container spacing={2}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={1}>
                        <Button variant="contained">Login</Button>
                    </Grid>
                </Grid>


            </React.Fragment>
        </ThemeProvider>
    )
}