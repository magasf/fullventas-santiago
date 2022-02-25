import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ItemList = (props) => {
    return (
        <div className="Card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem>{props.cost}</ListGroupItem>
                    <Card.Text>{props.descript}</Card.Text>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            
        </div>


    )
}
export default ItemList;