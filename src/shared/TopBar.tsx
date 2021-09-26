import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

import {Link as RouterLink} from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Button component={RouterLink} color="inherit" to="/">
                        <HomeIcon/>
                        tulio.org</Button>

                    <Button component={RouterLink} color="inherit" to="/blog">Blog</Button>

                    <Button component={RouterLink} color="inherit" to="/ferramentas">Ferramentas</Button>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
