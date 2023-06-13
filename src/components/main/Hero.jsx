import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles({
  logo: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit 4s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logoMobile: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbitMobile 3s linear infinite",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit": {
    "0%": {
      transform: "rotate(0deg) translateX(21rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(21rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  "@keyframes orbitMobile": {
    "0%": {
      transform: "rotate(0deg) translateX(10rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo2: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit2 4s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo2Mobile: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit2Mobile 4s linear infinite",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit2": {
    "0%": {
      transform: "rotate(0deg) translateX(18rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(18rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  "@keyframes orbit2Mobile": {
    "0%": {
      transform: "rotate(0deg) translateX(10rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo3: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit3 5s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo3Mobile: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit3Mobile 5s linear infinite",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit3": {
    "0%": {
      transform: "rotate(0deg) translateX(18rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(18rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  "@keyframes orbit3Mobile": {
    "0%": {
      transform: "rotate(0deg) translateX(10rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo4: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit4 6s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo4Mobile: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit4Mobile 6s linear infinite",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit4": {
    "0%": {
      transform: "rotate(0deg) translateX(15rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(15rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  "@keyframes orbit4Mobile": {
    "0%": {
      transform: "rotate(0deg) translateX(10rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo5: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit5 7s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo5Mobile: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit5Mobile 7s linear infinite",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit5": {
    "0%": {
      transform: "rotate(0deg) translateX(14rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(14rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  "@keyframes orbit5Mobile": {
    "0%": {
      transform: "rotate(0deg) translateX(10rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  logo6: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit5 8s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo6Mobile: {
    position: "absolute",
    width:"2rem",
    height:"2rem",
    animation: "$orbit5Mobile 8s linear infinite",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes orbit6": {
    "0%": {
      transform: "rotate(0deg) translateX(12rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(12rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
  "@keyframes orbit6Mobile": {
    "0%": {
      transform: "rotate(0deg) translateX(10rem) rotate(0deg) translate(-50%, -50%)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10rem) rotate(-360deg) translate(-50%, -50%)",
    },
  },
});

const Hero = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
         <Box
            height='50%'
            maxWidth='100%'
            display='flex'
            justifyContent='space-between'
         >
            <Box
              flex={2}
              flexDirection='column'
              display='flex'
              justifyContent='center'
              gap='1rem'

            >
              <Typography
              variant="h1" color='lightgray' padding='0.5rem'
              sx={{fontSize: isMobile ? '2rem' : '4.5rem', display: isMobile ? 'flex' : '',
                  justifyContent: isMobile ? 'center' : 'none',
              }}
              >Learn. Think. Fix. Create!</Typography>
              <Box
              display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
              >
                <img src='./img/line.png' alt='a line'
                height='10rem'
                />
                <Typography variant='h2' color='lightblue'>What I Do</Typography>
              </Box>
              <Box>
                <Typography
                sx={{fontSize: isMobile ? '1.2rem' : '1.5rem'}}
                color='lightgray' padding='0.5rem'
                >I develop apps from end-to-end mainly with React, Python, and Flask RESTful.</Typography>
              </Box>
              <Box
                sx={{
                  display: (isMobile) ? 'flex' : '',
                  justifyContent: isMobile ? 'center' : 'none',
                  alignItems: isMobile ? 'center' : 'none',
                }}
              >
                <Button
                  sx={{backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.5rem', width: '30%'}}
                  onClick={() => navigate('/who')}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
            <Box
              sx={{flex: isMobile ? 0 : 3 , position: isMobile ? '' : 'relative'}}
            >
              <Box

              component='img'
              borderRadius='50%'
              overflow='hidden'
              height='50%'
              sx={{ objectFit: 'cover', position: 'absolute',
                   top: isMobile ? '70%' : 0, bottom: 0, left: 0, right: 0, margin: 'auto',
                   width: isMobile ? '15rem' : '23rem', height: isMobile ? '15rem' : '23rem',

              }}
              src='./img/profile_pic.JPG' alt='profile pic'
              ></Box>
              <Box
                component="img"
                className={isMobile ? classes.logoMobile : classes.logo}
                src='./img/react_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={isMobile ? classes.logo2Mobile : classes.logo2}
                src='./img/python_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={isMobile ? classes.logo3Mobile : classes.logo3}
                src='./img/flask_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={isMobile ? classes.logo4Mobile : classes.logo4}
                src='./img/sqlite_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={isMobile ? classes.logo5Mobile : classes.logo5}
                src='./img/js_logo.png' alt='react logo'
              ></Box>
              <Box
                component="img"
                className={isMobile ? classes.logo6Mobile : classes.logo6}
                src='./img/mui_logo.png' alt='react logo'
              ></Box>
            </Box>
         </Box>
    </Box>
  )
}

export default Hero

