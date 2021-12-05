import { Grid } from "@mui/material";
import { useState } from "react";
import User from "src/model/User";
import { UserMenu } from "./UserMenu";
import { UserPhoto } from "./UserPhoto";

interface Props {
    user: User,
    onLogout: Function,
}

export const UserProfile = ({ user, onLogout }: Props) => {
    const [elementToDisplayMenu, setElementToDisplayMenu] = useState<HTMLElement | null>(null);

    const onProfileClicked = (profileHtmlElement: HTMLElement) => {
        if (!profileHtmlElement) {
            return;
        }

        setElementToDisplayMenu(profileHtmlElement);
    }

    const onProfileClosed = () => {
        setElementToDisplayMenu(null);
    }

    return (
        <div>
            <Grid container justifyContent="flex-end">
                <UserPhoto
                    user={user}
                    onPhotoClick={(h: HTMLElement) => onProfileClicked(h)}
                    onPhotoLostFocus={() => onProfileClosed()}
                />
            </Grid>
            <Grid container justifyContent="flex-end">
                <UserMenu elementToAnchorMenu={elementToDisplayMenu} onLogout={onLogout} />
            </Grid>
        </div>
    )
}
