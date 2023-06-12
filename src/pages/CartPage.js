import React, { useContext } from 'react';
import { CartContext } from '../App';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="CartPage">
      <h1>Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
