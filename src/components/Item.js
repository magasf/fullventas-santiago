import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import {useState} from 'react';


//const {data} = require('./data.js');


export default function Item({ name, img, cost, descript }) {
    const [data, setData] = useState([

        {
            id: 1,
            name: "Casa azul",
            img: "./Fotos/house1.jpg",
            cost: 45000,
            descript: '',
        },
        {
            id: 2,
            name: "Casa ladrillos",
            img: "./Fotos/house2.jpg",
            cost: 16000,
            descript: '',
        },
        {
            id: 3,
            name: "Casa galeria",
            img: "./Fotos/house3.jpg",
            cost: 14000,
            descript: '',
        },
        {
            id: 4,
            name: "Casa pequeña",
            img: "./Fotos/house4.jpg",
            cost: 7500,
            descript: '',
        }

    ])
    return (
        <article>
            <ul>
                {data.map(u => <li key={u.id}>{u.name} </li>)}
            </ul>




            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {descript}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {descript}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {descript}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </article>
    )
}