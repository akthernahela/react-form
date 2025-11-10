import React, { useState } from 'react';
export default function Main() {
    const foodMenu = [
        {
            id: 1,
            name: "Bruschetta al Pomodoro",
            price: 5.50,
            description: "Fette di pane toscano tostato con pomodoro fresco, basilico e olio EVO.",
            category: "Antipasto",
        },
        {
            id: 2,
            name: "Spaghetti alla Carbonara",
            price: 12.50,
            description: "Spaghetti con guanciale, tuorlo d'uovo, pecorino romano e pepe nero.",
            category: "Primo",
        },
        {
            id: 3,
            name: "Filetto di Manzo",
            price: 24.00,
            description: "Filetto di manzo cotto alla perfezione, e patate al forno.",
            category: "Secondo",
        },
        {
            id: 4,
            name: "Tiramisù Classico",
            price: 6.00,
            description: "Savoiardi inzuppati nel caffè, mascarpone e cacao in polvere.",
            category: "Dessert",
        },
        {
            id: 8,
            name: "Cheesecake",
            price: 6.00,
            description: "Base di biscotti, crema al formaggio.",
            category: "Dessert",
        }
    ]
    const [foodMenuList, setfoodMenuList] = useState(foodMenu);
    const [newList, setnewList] = useState('');
    const handleChange = (event) => {
        setnewList(event.target.value);
    };
    return (
        <main>
            <ul className="container list-group">
                <h1>React Blog Form List</h1>
                {
                    foodMenu.map((menu) => (
                        <li>
                            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between" key={menu.id}>
                                    <h5 className="mb-1">{menu.name}</h5>
                                    <small>{menu.price} euro</small>
                                </div>
                                <p className="mb-1">{menu.description}</p>
                                <small>{menu.category}</small>
                            </a>
                        </li>
                    ))
                }

            </ul>
        </main>
    );
}