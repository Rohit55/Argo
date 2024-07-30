import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddInventory = () => {
  const [item, setItem] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => console.log('Item added:', data))
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Inventory
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Item Name"
            name="name"
            value={item.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={item.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Add Item
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AddInventory;
