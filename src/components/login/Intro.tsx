import { Container, CssBaseline, Link, Typography } from "@mui/material";
import { Padding } from "src/components/util/Padding";

export const Intro = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                    👋 Welcome to Centered Lite!
                </Typography>
                <Padding height={"2vh"} />
                <Typography align="center" color="textSecondary" gutterBottom>
                    Login to use this web-based version of the ultimate productivity tool &nbsp;
                    <Link href="https://www.centered.app">Centered</Link>
                </Typography>
            </Container>
        </>
    );
}