import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container : {
        textAlign: "center"
    }
}));

export const Intro = () => {
    const classes = useStyles();


    const primaryText = "👋 Welcome to Centered Lite!";
    return (
        <div className={classes.container}>
            <div> {primaryText} </div>
        </div>
    );
}