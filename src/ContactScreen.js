import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  paddingTop: "30px",
  paddingRight: "300px",
  paddingLeft: '300px',
 
 
}

function ContactScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email to Battleroyale1945@gmail.com
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
      />
      <TextField
        id="department"
        label="Department"
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
        fullWidth
      />
      <TextField
        id="nationality"
        label="Nationality"
        value={nationality}
        onChange={(event) => setNationality(event.target.value)}
        fullWidth
      />
      <TextField
        id="phone"
        label="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        fullWidth
      />
      <TextField
        id="position"
        label="Position"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
        fullWidth
      />
      <TextField
        required
        id="message"
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
}

export default ContactScreen;
