import Map from "../contact/Map"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Typography, useMediaQuery } from '@mui/material'
import { toast } from 'react-toastify'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const ref = useRef()
  const isMobile = useMediaQuery('(max-width: 600px)')

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError('Required');
      return;
    }

    // Proceed with form submission
    console.log('Form submitted');
    setError('');


  emailjs.sendForm('service_gp6vqcf', 'template_d1kb41s', ref.current, 'XsPkprm_VZAUCOwIZ')
    .then((result) => {
        console.log(result.text);
        toast.success('You have sent an email to Vinh', {
          autoClose: 2000,
      })
    }, (error) => {
        console.log(error.text);
        toast.error('There is an error sending your message to Vinh', {
          autoClose: 2000,
      })
    });
  }

return (
  isMobile ? (
    <Box
    // height='100%'
    marginBottom='-20rem'
  >
      <Box
        // width='100%' gap='1rem'
      >
          <Box
            display='flex' justifyContent='center' alignItems='center' padding='1rem'
          >
              <form
              ref={ref} onSubmit={handleSubmit}
              >
                <Box
                width='100%' display='flex' flexDirection='column' gap='2rem'
                >
                  <Typography
                  variant='h2' fontWeight='200' color= 'lightgray' justifyContent='center' display='flex'
                  >Contact Me</Typography>
                  <TextField
                    sx={{ padding: '0', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '0.8rem'}}
                    placeholder='Name' name="name" value={name}
                    error={!!error} helperText={error}
                    onChange={handleName}
                    />
                  <TextField
                    sx={{ padding: '0', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '0.8rem'}}
                    placeholder='Email' name="email" value={email} error={!!error} helperText={error}
                    onChange={handleEmail}
                    />
                  <TextField
                    sx={{ padding: '0', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '0.8rem', gridRow: '10'}}
                    placeholder='Write your message' name="message" multiline rows={5}
                    value={message} error={!!error} helperText={error} onChange={handleMessage}
                    />
                  <Button
                    sx={{ padding: '1rem', backgroundColor: 'lightblue', color:'black',
                    border: 'none', borderRadius: '0.4rem', fontWeight: 'bold'}}
                    type="submit">Send</Button>
                </Box>
              </form>
          </Box>
      </Box>
  </Box>
  ) : (
    <Box
    height='100%'
  >
      <Box
        width='100%' height='100%' display='flex' justifyContent='space-between' gap='3rem'
      >
          <Box
            flex={1} display='flex' justifyContent='center' alignItems='center'
          >
              <form
              ref={ref} onSubmit={handleSubmit}
              >
                <Box
                width='30rem' display='flex' flexDirection='column' gap='2rem'
                >
                  <Typography
                  variant='h1' fontWeight='200' color= 'lightgray'
                  >Contact Me</Typography>
                  <TextField
                    sx={{ padding: '0', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '0.8rem'}}
                    placeholder='Name' name="name" value={name}
                    error={!!error} helperText={error}
                    onChange={handleName}
                    />
                  <TextField
                    sx={{ padding: '0', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '0.8rem'}}
                    placeholder='Email' name="email" value={email} error={!!error} helperText={error}
                    onChange={handleEmail}
                    />
                  <TextField
                    sx={{ padding: '0', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '0.8rem', gridRow: '10'}}
                    placeholder='Write your message' name="message" multiline rows={5}
                    value={message} error={!!error} helperText={error} onChange={handleMessage}
                    />
                  <Button
                    sx={{ padding: '1rem', backgroundColor: 'lightblue', color:'black',
                    border: 'none', borderRadius: '0.4rem', fontWeight: 'bold'}}
                    type="submit">Send</Button>

                </Box>
              </form>
          </Box>
          <Box
            flex={1}
          >
              <Map />
          </Box>
      </Box>
  </Box>
  )

)
}

export default Contact

