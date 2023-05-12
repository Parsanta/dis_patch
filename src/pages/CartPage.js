import React from "react";
import Table from "react-bootstrap/Table";

export const CartPage = ({ cartItems }) => {
  const items = cartItems;
  return (
    <div className="CartPage">
      <h1>Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item,index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}