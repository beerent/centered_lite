import { Card, CardContent, CardMedia} from "@mui/material";
import User from "src/model/User";
import React from "react";
import ReactDOM from "react-dom";

interface Props {
    user: User,
    onPhotoClick: Function,
    onPhotoLostFocus: Function,
}

export default class UserPhoto extends React.Component <Props> {
    wrapperRef: any;

    constructor(props : Props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node : any) {
        this.wrapperRef = node;
    }

    handleClickOutside(event : any) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.onPhotoLostFocus();
        }
    }

    render() {
        const profilePhotoUrl = this.props.user.profileUrl;
        return (
            <div>
                <Card ref={this.setWrapperRef} onClick={() => this.props.onPhotoClick(ReactDOM.findDOMNode(this))} sx={{borderRadius: "50%", height:"50px", width:"50px", maxHeight:"50px", maxWidth:"50px"}}>
                    <CardContent sx={{padding: ".1vw"}}>
                        <CardMedia sx={{borderRadius: "50%"}} component="img" image={profilePhotoUrl} />
                    </CardContent>
                </Card>
            </div>
        );
      }
}