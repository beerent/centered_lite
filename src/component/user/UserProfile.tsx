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
    const [elementToAnchorMenu, setElementToAnchorMenu] = useState<HTMLElement | null>(null);

    const onProfileOpened = (profileHtmlElement: HTMLElement) => {
        if (!profileHtmlElement) {
            return;
        }

        setElementToAnchorMenu(profileHtmlElement);
    }

    const onProfileClosed = () => {
        setElementToAnchorMenu(null);
    }

    return (
        <div>
            <Grid container justifyContent="flex-end">
                <UserPhoto
                    user={user}
                    onPhotoClick={(h: HTMLElement) => onProfileOpened(h)}
                    onPhotoLostFocus={() => onProfileClosed()}
                />
            </Grid>
            <Grid container justifyContent="flex-end">
                <UserMenu elementToAnchorMenu={elementToAnchorMenu} onLogout={onLogout} />
            </Grid>
        </div>
    )
}
