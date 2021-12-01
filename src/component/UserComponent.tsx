import React from "react";
import User from "../model/User";

interface Props {
    user: User,
}
export default class UserComponent extends React.Component <Props> {
    render() {
        return (
            <div>{this.props.user.firstName} {this.props.user.lastName}</div>
        );
      }
}