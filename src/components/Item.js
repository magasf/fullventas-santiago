import React, {useState} from "react";
import { CardGroup, Card } from "react-bootstrap";
import ItemList from "./itemList";



const Item = () => {
   const [item, setItem] = useState(
       
       [
        {
            id: 1,
            name: "Casa azul",
            img: "../IMG/house1.jpg",
            cost: 45000,
            descript: '',
        },
        {
            id: 2,
            name: "Casa ladrillos",
            img: "../IMG/house2.jpg",
            cost: 16000,
            descript: '',
        },
        {
            id: 3,
            name: "Casa galeria",
            img: "../IMG/house3.jpg",
            cost: 14000,
            descript: '',
        },
        
        {
            id: 4,
            name: "Casa ladrillos",
            img: "../IMG/house2.jpg",
            cost: 16000,
            descript: '',
        },
        {
            id: 5,
            name: "Casa galeria",
            img: "../IMG/house3.jpg",
            cost: 14000,
            descript: '',
        },
        {
            id: 6,
            name: "Casa pequeña",
            img: ["./IMG/house4.jpg"],
            cost: 7500,
            descript: '',
        },
        {
            id: 7,
            name: "Casa ladrillos",
            img: "../IMG/house2.jpg",
            cost: 16000,
            descript: '',
        },
        {
            id: 8,
            name: "Casa galeria",
            img: "../IMG/house3.jpg",
            cost: 14000,
            descript: '',
        },
        {
            id: 9,
            name: "Casa ladrillos",
            img: "../IMG/house2.jpg",
            cost: 16000,
            descript: '',
        }
      ]);
   

    return (
        <article className="Item">
           {item.map(List => {
               return (

               
               <ItemList key={List.id} name={List.name} img={List.img} cost={List.cost} descript={List.descript} />
               
               )

           })}

        </article>
    )
};

export default Item;