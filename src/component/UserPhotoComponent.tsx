import { Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";
import User from "../model/User";

interface Props {
    user: User,
    onPhotoClick: Function
}

export default class UserPhotoComponent extends React.Component <Props> {
    render() {
        const profilePhotoUrl = this.props.user.profileUrl;
        return (
            <div>
                <Card onClick={() => this.props.onPhotoClick()} sx={{borderRadius: "50%", height:"50px", width:"50px", maxHeight:"50px", maxWidth:"50px"}}>
                    <CardContent sx={{padding: ".1vw"}}>
                        <CardMedia sx={{borderRadius: "50%"}} component="img" image={profilePhotoUrl} />
                    </CardContent>
                </Card>
            </div>
        );
      }
}