import { Grid } from "@mui/material";
import React from "react";
import User from "src/model/User";
import ProfileMenu from "./UserMenu";
import UserPhotoComponent from "./UserPhoto";

interface Props {
    user: User,
    onLogout: Function,
}

interface State {
    elementToDisplayMenu: HTMLElement | null
}

export default class UserProfile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            elementToDisplayMenu: null
        }
    }

    onProfileClicked(profileHtmlElement: HTMLElement) {
        this.setState({
            elementToDisplayMenu : profileHtmlElement,
        });
    }

    onProfileClose() {
        this.setState({
            elementToDisplayMenu : null,
        });
    }

    render() {
        document.addEventListener("click", () => this.onProfileClose, false);

        return (
            <div>
                <Grid container justifyContent="flex-end">
                    <UserPhotoComponent 
                        user={this.props.user} 
                        onPhotoClick={(h: HTMLElement) => this.onProfileClicked(h)}
                        onPhotoLostFocus={() => this.onProfileClose()}
                    />
                </Grid>
                <Grid container justifyContent="flex-end">
                    <ProfileMenu elementToAnchorMenu={this.state.elementToDisplayMenu} onLogout={this.props.onLogout} />
                </Grid>
            </div>
        );
    }
}