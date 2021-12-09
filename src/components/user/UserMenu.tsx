import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

interface Props {
    elementToAnchorMenu: HTMLElement | null,
    onLogout: Function
}

export const UserMenu = ({ elementToAnchorMenu, onLogout }: Props) =>
    <React.Fragment>
        <Menu
            anchorEl={elementToAnchorMenu}
            open={elementToAnchorMenu !== null}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={() => onLogout()} >
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    </React.Fragment>