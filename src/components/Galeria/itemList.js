import Item from "./item";

export default function ItemList({lista}) {
    return(
        lista.map( (item, id) => (
            <Item
                key={id}
                name={item.name}
                descript={item.descript}
            />
        ))
    )
}