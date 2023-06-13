import { Box, Button, useMediaQuery } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width: 600px)')
    return (
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
                        </Button>
                        <Button
                        onClick={() => navigate('/works')}
                        sx={{color:'lightgray', width: '100%'}}
                        >
                            Works
                        </Button>
                        <Button
                        onClick={() => navigate('/contact')}
                        sx={{color:'lightgray', width: '100%'}}
                        >
                            Contact
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
  }

  export default Navbar
