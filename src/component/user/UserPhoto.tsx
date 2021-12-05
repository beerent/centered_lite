import { Card, CardContent, CardMedia } from "@mui/material";
import User from "src/model/User";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
    user: User,
    onPhotoClick: Function,
    onPhotoLostFocus: Function,
}

export const UserPhoto = ({ user, onPhotoClick, onPhotoLostFocus }: Props) => {
    const profilePhotoHtmlElementRef = useRef<HTMLInputElement>(null);

    const handleClickOutside = (event: any) => {
        if (
            profilePhotoHtmlElementRef
            && profilePhotoHtmlElementRef.current
            && !profilePhotoHtmlElementRef.current.contains(event.target)
        ) {
            onPhotoLostFocus();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside, false);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return <div>
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
}