import React from "react";
import User from "../model/User";

interface Props {
    user: User,
}
export default class UserComponent extends React.Component <Props> {
    render() {
        return (
            <div>
                <div>{this.props.user.firstName} {this.props.user.lastName}</div>
                <div>{this.props.user.email}</div>
                <div>
                    <img src={this.props.user.profileUrl} alt="you look amazing!" />
                </div>
            </div>
        );
      }
}