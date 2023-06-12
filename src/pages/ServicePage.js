import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ServicePage = ({ MedicineItems, SnacksItems,handleAddToCart,setCartItems}) => {
  

 
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetchGroceries();
  }, []);

  const fetchGroceries = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setGroceries(data);
    } catch (error) {
      console.error('Error fetching groceries:', error);
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className="ServicePage">
      <Tabs defaultActiveKey="grocery" id="justify-tab-example" className="mb-3" justify>
        <Tab eventKey="grocery" title="Grocery">
          <div className="row">
            {groceries.map((grocery, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={grocery.image} className="card-img" />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {truncateTitle(grocery.title, 30)}
                    </Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart(grocery)}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="Medicine" title="Medicine">
          <div className="row">
            {MedicineItems.map((MedicineItem, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={MedicineItem.img} className="card-img" />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {truncateTitle(MedicineItem.title, 30)}
                    </Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart(MedicineItem)}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="Snacks" title="Snacks">
          <div className="row">
            {SnacksItems.map((SnakesItem, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={SnakesItem.img} className="card-img" />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {truncateTitle(SnakesItem.title, 30)}
                    </Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart(SnakesItem)}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ServicePage;
