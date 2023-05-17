import { useState } from "react";

const cakeForm = ({cakes, setCakes}) => {
    const[cakeName, setCakeName] = useState("");
    const[price, setPrice] = useState();
    const[rating, setRating] = useState();
    const[ingredients, setIngredients] = useState("");

const handleFormSubmit = (e) => {
    e.preventDefault();
}

return (
    <>
    <h2>Add new a new cake!</h2>
    <form onSubmit={handleFormSubmit}>
    <input
    type="text"
    name="cakeName"
    placeholder="Cake Name"
    value={cakeName}
    onChange={(e) => setCakeName(e.target.value)}/>

    <input
    type="text"
    name="price"
    placeholder="Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)} />

    
    </form>
    </>
);








}
