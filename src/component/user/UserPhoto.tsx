import { Card, CardContent, CardMedia } from "@mui/material";
import User from "src/model/User";
import { useEffect, useRef } from "react";

interface Props {
    user: User,
    onPhotoClick: Function,
    onPhotoLostFocus: Function,
}

export const UserPhoto = ({ user, onPhotoClick, onPhotoLostFocus }: Props) => {
    const profilePhotoHtmlElementRef = useRef<HTMLInputElement>(null);

    const onPhotoLostFocusLocal = () => { onPhotoLostFocus() }

    useEffect(() => {
        document.addEventListener("mousedown", onPhotoLostFocusLocal, false);
        return () => document.removeEventListener('mousedown', onPhotoLostFocusLocal);
    });

    return (
        <div>
            <Card
                ref={profilePhotoHtmlElementRef}
                onClick={() => onPhotoClick(profilePhotoHtmlElementRef.current)}
                sx={{ borderRadius: "50%", height: "50px", width: "50px", maxHeight: "50px", maxWidth: "50px" }}
            >
                <CardContent sx={{ padding: ".1vw" }}>
                    <CardMedia sx={{ borderRadius: "50%" }} component="img" image={user.profileUrl} />
                </CardContent>
            </Card>
        </div>
    )
}