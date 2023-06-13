import { Box, Button, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    return (
      <Box display='flex' justifyContent='center'>
        {/* <Box display='flex' justifyContent='center' position='fixed'> */}
        <Box
            width='1400px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            padding='10px 0px'
        >
            <Box
                display='flex'
                alignItems='center'
                gap='50px'
            >
                <Button onClick={() => navigate('/')}>
                    <img src='./img/FullLogo_Transparent_NoBuffer.png' alt='Brand logo' height='120px'/>
                </Button>
                <Box
                    display='flex'
                    gap='20px'
                    list-style='none'
                >
                    <Button
                    onClick={() => navigate('/who')}
                    // sx={{backgroundColor:'lightgray'}}
                    sx={{color:'lightgray'}}
                    >Story</Button>
                    <Button
                    onClick={() => navigate('/works')}
                    // sx={{backgroundColor:'lightgray'}}
                    sx={{color:'lightgray'}}
                    >Works</Button>
                    <Button
                    onClick={() => navigate('/contact')}
                    // sx={{backgroundColor:'lightgray'}}
                    sx={{color:'lightgray'}}
                    >Contact</Button>
                </Box>
            </Box>
        </Box>
        <Box
            display='flex'
            alignItems='center'
            gap='20px'
            justifyContent='center'
        >
                <Button
                    width='100px'
                    padding='10px'
                    border='none'
                    border-radius='5px'
                    sx={{backgroundColor:'lightyellow', color:'black'}}
                    onClick={() => navigate('/contact')}
                >Hire Me!</Button>
        </Box>
      </Box>
    )
  }

  export default Navbar
