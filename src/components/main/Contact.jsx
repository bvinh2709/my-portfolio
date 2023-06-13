import Map from "../contact/Map"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Typography } from '@mui/material'
import { toast } from 'react-toastify'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const ref = useRef()

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

    if (name.trim() || email.trim() || message.trim() === '') {
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
  <Box
    height='100vh'
  >
      <Box
        width='100%' height='100%' display='flex' justifyContent='space-between' gap='50px'
      >
          <Box
            flex={1} display='flex' justifyContent='center' alignItems='center'
          >
              <form
              ref={ref} onSubmit={handleSubmit}
              >
                <Box width='500px' display='flex' flexDirection='column' gap='25px'>
                  <Typography variant='h1' fontWeight='200' color= 'lightgray'>Contact Me</Typography>
                  <TextField
                    sx={{ padding: '20px', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '10px'}}
                    placeholder='Name' name="name" value={name}
                    error={!!error} helperText={error}
                    onChange={handleName}
                    />
                  <TextField
                    sx={{ padding: '20px', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '10px'}}
                    placeholder='Email' name="email" value={email} error={!!error} helperText={error}
                    onChange={handleEmail}
                    />
                  <TextField
                    sx={{ padding: '20px', backgroundColor: '#e8e6e6', border: 'none', borderRadius: '10px', gridRow: '10'}}
                    placeholder='Write your message' name="message" multiline rows={5}
                    value={message} error={!!error} helperText={error} onChange={handleMessage}
                    />
                  <Button
                    sx={{ padding: '20px', backgroundColor: 'lightblue', color:'black',
                    border: 'none', borderRadius: '5px', fontWeight: 'bold'}}
                    type="submit">Send</Button>

                </Box>
              </form>
          </Box>
          <Box
            flex={1}
            marginTop='50px'
          >
              <Map />
          </Box>
      </Box>
  </Box>
)
}

export default Contact

