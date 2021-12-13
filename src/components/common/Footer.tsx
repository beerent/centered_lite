import { Copyright } from "@mui/icons-material";
import { Box, Container, CssBaseline, Link, Typography } from "@mui/material";

export default function StickyFooter() {
    return (
        <Box
            sx={{
                backgroundColor: (theme) => theme.palette.grey[200],
                position: "fixed",
                bottom: "0",
                left: "0",
                width: "100%"
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                }}
            >
                <Typography variant="body1" align="center">
                    <Link sx={{ paddingRight: "1vh" }} href="https://www.brentryczak.com">Brent Ryczak</Link>
                    ·
                    <Link sx={{ paddingLeft: "1vh" }} href="https://www.github.com/beerent/centered_lite">Project Repo</Link>
                </Typography>
            </Box>
        </Box >
    );
}