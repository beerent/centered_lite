import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    logoContainer : {
        paddingTop:"3vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logo : {
        width : "50%",
        display : "flex"
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.logoContainer}>
            <img src={"/logo.png"} alt="logo" className={classes.logo} />
        </div>
    )
};