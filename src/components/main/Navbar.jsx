import { Box, Button, IconButton, useMediaQuery, Menu, MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import WorkIcon from '@mui/icons-material/Work';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Navbar = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width: 600px)')
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleStory = () => {
        setAnchorEl(null);
        navigate('/who')
    }

    const handleWorks = () => {
        setAnchorEl(null);
        navigate('/works')
    }

    const handleContact = () => {
        setAnchorEl(null);
        navigate('/contact')
    }

    return (
        isMobile ? (
            <Box
            display='flex'
            justifyContent="space-between"
            padding="0.5rem 0"
            maxHeight='80%'
            width='100%'
            maxWidth='100%'
        >
            <Box
                display='flex'
                alignItems='center'
                gap='0.5rem'
            >
                <Button onClick={() => navigate('/')}>
                    <img src='./img/FullLogo_Transparent_NoBuffer.png' alt='Brand logo'
                    height='120rem'
                    />
                </Button>
                <Box
                    display='flex'
                    alignItems='center'
                    padding='3rem'
                    justifyContent='center'
                >
                    <Button
                        sx={{backgroundColor:'lightyellow', color:'black', borderRadius: '0.5rem'}}
                        onClick={() => navigate('/contact')}
                    >Hire Me!</Button>
                </Box>
            </Box>
            <IconButton
                sx={{color:'lightyellow'}}
                id="burger-menu"
                aria-label="menu"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
            >
                <MenuIcon sx={{ height:'3rem', width:'3rem'}}/>
            </IconButton>
            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                    style: {
                      marginTop: '-2.5rem'
                    }
                  }}
            >
                <MenuItem
                    onClick={handleStory}
                    sx={{color:'black', width: '100%'}}
                >
                    Story
                </MenuItem>
                <MenuItem
                    onClick={handleWorks}
                    sx={{color:'black', width: '100%'}}
                >
                    Works
                </MenuItem>
                <MenuItem
                    onClick={handleContact}
                    sx={{color:'black', width: '100%'}}
                >
                    Contact
                </MenuItem>
            </Menu>
      </Box>
        ) : (
            <Box
            display='flex'
            justifyContent="space-between"
            padding="0.5rem 0"
            maxHeight='80%'
            width='100%'
            maxWidth='100%'
        >
            <Box
                display='flex'
                alignItems='center'
                gap='0.5rem'
            >
                <Button onClick={() => navigate('/')}>
                    <img src='./img/FullLogo_Transparent_NoBuffer.png' alt='Brand logo'
                    height='120rem'
                    />
                </Button>
                    <Box
                        display='flex'
                        gap='0.5rem'
                        alignItems='center'
                        flexDirection={isMobile ? 'column' : 'row'}

                    >
                        <Button
                        onClick={() => navigate('/who')}
                        sx={{color:'lightgray', width: '100%'}}
                        >
                            Story
                            <SentimentVerySatisfiedIcon />
                        </Button>
                        <Button
                        onClick={() => navigate('/works')}
                        sx={{color:'lightgray', width: '100%'}}
                        >
                            Works
                            <WorkIcon />
                        </Button>
                        <Button
                        onClick={() => navigate('/contact')}
                        sx={{color:'lightgray', width: '100%'}}
                        >
                            Contact
                            <AddIcCallIcon />
                        </Button>
                    </Box>
            </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    padding='1rem'
                    justifyContent='center'
                >
                    <Button
                        sx={{backgroundColor:'lightyellow', color:'black', borderRadius: '0.5rem'}}
                        onClick={() => navigate('/contact')}
                    >Hire Me!</Button>
                </Box>
      </Box>
        )

    )
  }

  export default Navbar
