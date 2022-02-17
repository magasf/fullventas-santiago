import React from "react";
import { Row, Col, Card } from "react-bootstrap";



export default function Item({name, img, cost, descript}) {
    return (
        <article>
            <Row xs={1} md={2} className="g-4">
                {Array.from({}).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <p>{cost}</p>
                                <Card.Text>
                                    {descript}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </article>
    )
}