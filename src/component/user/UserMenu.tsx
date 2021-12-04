import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

interface Props {
    elementToAnchorMenu: HTMLElement | null,
    onLogout: Function
}

export default class UserMenu extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Menu
                    anchorEl={this.props.elementToAnchorMenu}
                    open={this.props.elementToAnchorMenu !== null}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={ () => this.props.onLogout() } >
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}