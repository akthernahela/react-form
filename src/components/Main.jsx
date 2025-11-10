export default function Main() {
    const foodMenu = [
        {
            id: 1,
            name: "Bruschetta al Pomodoro",
            price: 5.50,
        },
        {
            id: 2,
            name: "Spaghetti alla Carbonara",
            price: 12.50,
        },
        {
            id: 3,
            name: "Filetto di Manzo",
            price: 24.00,
        },
        {
            id: 4,
            name: "Tiramisù Classico",
            price: 6.00,
        },
        {
            id: 8,
            name: "Cheesecake",
            price: 6.00,
        }
    ]
    return (
        <main>
            <ul className="container list-group">
                <h1>React Blog Form List</h1>
                <li>
                    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </a>
                </li>
            </ul>
        </main>
    );
}