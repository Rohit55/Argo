import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Inventory List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/edit/${item.id}`}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default InventoryList;
