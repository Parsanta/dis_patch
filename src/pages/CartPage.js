import React, { useContext } from 'react';
import { CartContext } from '../App';
import Table from 'react-bootstrap/Table';

export const CartPage = () => {
  const cartItems = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="CartPage">
      <h1>Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItems) => (
            <tr key={cartItems.id}>
              <td>{cartItems.name}</td>
              <td>{cartItems.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
