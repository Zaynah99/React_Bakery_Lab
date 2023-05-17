const Cake = ({cake}) => {


  const newIngredientList = cake.ingredients.map((ingredient) => {
    return <li>{ingredient}</li>

  });

  return (

    <>
        <h2>{cake.cakeName}</h2>
        <p>Price: {cake.price}</p>
        <p>Rating: {cake.rating}</p>
        <p>Ingredients:</p>
        <ul>{newIngredientList}</ul>

    </>
    
  )
}

export default Cake;