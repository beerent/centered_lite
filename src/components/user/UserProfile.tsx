import { Grid } from "@mui/material";
import { useState } from "react";
import { UserMenu } from "./UserMenu";
import { UserPhoto } from "./UserPhoto";

interface Props {
    onLogout: Function,
}

export const UserProfile = ({ onLogout }: Props) => {
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
