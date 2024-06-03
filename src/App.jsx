import { useState } from 'react'
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  const [stack, setStack] = useState([])
  const [ingredient, setIngredient] = useState({
    name: '', 
    color:'',
  })

  const addToBurger = (event) => {
    event.preventDefault();
    setStack([...stack, ingredient]);
    setIngredient({
      name: '',
      color: ''
    });
    
    

    console.log(stack)
  }

  const removeFromBurger = (event) => {
    setStack(stack.filter((ingredient) => ingredient._id !== event.target.value))
  }
 

  return (
    <>
      <main>
        <h1>Ingredient</h1>
        <section>
          
          <IngredientList 
            ingredient={ingredient} 
            setIngredient={setIngredient}
            {...{stack, setStack}}
            {...{addToBurger, availableIngredients}}
          />
       
       <ul>
          {stack.map((ingredient, index) => {
          <BurgerStack 
            ingredient={ingredient}
            setIngredient={setIngredient}
            {...{stack, setStack}}
            // {...{addToBurger}}
            {...{removeFromBurger}}
          />
          })}
        </ul>
          
        </section>
      </main>
      </>
  );
};

export default App;
