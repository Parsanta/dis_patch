import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ServicePage = ({ GroceryItems, MedicineItems, SnacksItems, handleAddToCart }) => {

  return (
    <div className="ServicePage">
      <Tabs
        defaultActiveKey="grocery"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey={"grocery"} title="Grocery">
          <div className="row">
            {GroceryItems.map((GroceryItem, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={GroceryItem.img} />
                  <Card.Body>
                    <Card.Title>{GroceryItem.name}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart(GroceryItem)}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey={"Medicine"} title="Medicine">
          <div className="row">
            {MedicineItems.map((MedicineItem, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={MedicineItem.img} />
                  <Card.Body>
                    <Card.Title>{MedicineItem.name}</Card.Title>
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
        <Tab eventKey={"Snacks"} title="Snacks">
          <div className="row">
            {SnacksItems.map((SnakesItem, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={SnakesItem.img} />
                  <Card.Body>
                    <Card.Title>{SnakesItem.name}</Card.Title>
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
