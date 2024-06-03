import BurgerStack from "./BurgerStack";

const IngredientList = (props) => {
    const { availableIngredients, ingredient, setIngredient, addToBurger, stack, setStack } = props;

    // const handleChange = (event) => {
    //     setStack({
    //         ...ingredient, [event.target.name]: event.target.value
    //     })
    // }

    return (

        <form onSubmit={addToBurger}>
        <ul>
            {availableIngredients.map((ingredient, index) => (
            <li    
                
                key={index}
                style={{backgroundColor: ingredient.color}} 
                value={ingredient.name}
                >
                {ingredient.name}
                <button type="submit" onClick={addToBurger} >+</button>
            </li>
            ))}
        </ul>
        </form>
    )
};

export default IngredientList;