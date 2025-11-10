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
            <ul class="list-group">
                <h1>React Blog Form List</h1>
                <li class="list-group-item">
                    <input class="form-check-input me-1" type="checkbox" value="" id="1" />
                    <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
                </li>
            </ul>
        </main>
    );
}