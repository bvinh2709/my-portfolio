import { Box, Button, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom"


const useStyles = makeStyles({
  logo: {
    position: "absolute",
    width: "40px",
    height: "40px",
    animation: "$orbit 10s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit": {
    "0%": {
      transform: "rotate(0deg) translateX(340px) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(340px) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo2: {
    position: "absolute",
    width: "40px",
    height: "40px",
    animation: "$orbit2 12s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit2": {
    "0%": {
      transform: "rotate(0deg) translateX(295px) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(295px) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo3: {
    position: "absolute",
    width: "40px",
    height: "40px",
    animation: "$orbit3 14s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit3": {
    "0%": {
      transform: "rotate(0deg) translateX(250px) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(250px) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo4: {
    position: "absolute",
    width: "50px",
    height: "50px",
    animation: "$orbit4 16s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit4": {
    "0%": {
      transform: "rotate(0deg) translateX(205px) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(205px) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo5: {
    position: "absolute",
    width: "50px",
    height: "50px",
    animation: "$orbit5 18s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit5": {
    "0%": {
      transform: "rotate(0deg) translateX(250px) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(250px) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo6: {
    position: "absolute",
    width: "50px",
    height: "50px",
    animation: "$orbit6 20s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit6": {
    "0%": {
      transform: "rotate(0deg) translateX(295px) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(295px) rotate(-360deg) translate(-50%, -50%)",
    },
  },
});

const Hero = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <Box
      marginTop='-150px'
      height='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    >
         <Box
            height='100%'
            width='1400px'
            display='flex'
            justifyContent='space-between'
         >
            <Box
              flex={2}
              display='flex'
              flexDirection='column'
              justifyContent='center'
              gap='10px'
            >
              <Typography variant="h1" fontSize='74px' color='lightgray'>Learn. Think. Fix. Create!</Typography>
              <Box display='flex' alignItems='center' gap='10px'>
                <img src='./img/line.png' alt='a line' height='10px' />
                <Typography variant='h2' color='lightblue'>What I Do</Typography>
              </Box>
              <Box>
                <Typography fontSize='24px' color='lightgray'>I develop apps from end-to-end mainly with React, Python, and Flask RESTful.</Typography>
              </Box>
              <Button
                sx={{backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '5px', width: '30%'}}
                padding='10px'
                onClick={() => navigate('/who')}
              >Learn More</Button>
            </Box>
            <Box
              flex={3}
              position='relative'
            >
              <Box
              component='img'
              borderRadius='50%'
              overflow='hidden'
              sx={{ objectFit: 'cover', position: 'absolute',
                   top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
                   width: '300px', height:'300px',

              }}
              src='./img/profile_pic.JPG' alt='profile pic'
              ></Box>
              <Box
                component="img"
                className={classes.logo}
                src='./img/react_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={classes.logo2}
                src='./img/python_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={classes.logo3}
                src='./img/flask_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={classes.logo4}
                src='./img/sqlite_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={classes.logo5}
                src='./img/js_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={classes.logo6}
                src='./img/mui_logo.png' alt='react logo'
              ></Box>
            </Box>
         </Box>
    </Box>
  )
}

export default Hero
