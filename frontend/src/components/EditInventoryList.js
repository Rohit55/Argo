import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  useEffect(() => {
    fetch(`/api/inventory/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching item:', error));
  }, [id]);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/inventory/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Item updated:', data);
        navigate('/inventory');
      })
      .catch(error => console.error('Error updating item:', error));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Inventory
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
              Update Item
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default EditInventory;
