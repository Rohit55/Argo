import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryPage () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1122/items')
      .then(response => {
        console.log({ res: response.data });
        setItems(response.data);
      }
      )
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryPage;
