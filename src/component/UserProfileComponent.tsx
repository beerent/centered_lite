import { Grid, Paper } from "@mui/material";
import React from "react";
import User from "../model/User";
import UserPhotoComponent from "./UserPhotoComponent";

interface Props {
    user: User,
    onLogout: Function,
}

export default class UserProfileComponent extends React.Component <Props> {
    render() {
        return (
            <Grid container justifyContent="flex-end">
                    <UserPhotoComponent user={this.props.user} onPhotoClick={this.props.onLogout} />
            </Grid>
        );
    }
}