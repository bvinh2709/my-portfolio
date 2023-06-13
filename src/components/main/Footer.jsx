import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const navigate = useNavigate()
  return (
    <Box
        sx={{ marginTop: isMobile ? '80%' : ''}}
        height='10rem'
        padding='1rem'
        display='flex'
        justifyContent='center'

    >
        <Box
            display='column'
        >
            <IconButton>
                <a href='https://www.facebook.com/baovinh27' target="_blank" rel="noopener noreferrer">
                <FacebookIcon
                    sx={{ height: '3rem', width: '3rem', color: 'lightyellow'}}
                />
                </a>
                <a href='https://www.linkedin.com/in/vinhlnguyen/' target="_blank" rel="noopener noreferrer">
                <LinkedInIcon
                    sx={{ height: '3rem', width: '3rem', color: 'lightyellow'}}
                />
                </a>
                <a href='https://github.com/bvinh2709' target="_blank" rel="noopener noreferrer">
                <GitHubIcon
                    sx={{ height: '3rem', width: '3rem', color: 'lightyellow'}}
                />
                </a>
                <MailOutlineIcon
                    sx={{ height: '3rem', width: '3rem', color: 'lightyellow'}}
                    onClick={() => navigate('/contact')}
                />
            </IconButton>
            <Typography
                variant='h6' color='lightgray' justifyContent='center' display='flex'
            >
                Vinh Nguyen's Portfolio
            </Typography>
            <Typography
                variant='h6' color='lightgray' justifyContent='center' display='flex'
            >
                Dallas, Texas 75126
            </Typography>
        </Box>
    </Box>
  )
}

export default Footer
