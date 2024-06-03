import IngredientList from "./IngredientList";

const BurgerStack = (props) => {
    const { stack, setStack, availableIngredients, ingredient, setIngredient, addToBurger, removeFromBurger } = props;

    // const handleClick = (ingredient) => {

    // }

    return (
          
                  
            <li id={ingredient._id} style={{ backgroundColor: ingredient.color }} >
                {ingredient.name}
                <button onClick={removeFromBurger} value={ingredient._id}>X</button>
            </li>
                    
               
      
    )
};

export default BurgerStack;