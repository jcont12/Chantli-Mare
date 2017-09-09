import React, { Component } from 'react';
import '../../../App.css';

class Menu extends Component{
  constructor() {
    super()
      this.state = {
        menu: 'lunch'
      };
    }

  render(){
    if (this.state.menu === 'lunch'){
    return(
      <div className='dining-menu'>
        Lunch
        <table>
          <tr>
            <td class="meal">Seafood Soup</td>
            <td></td>
            <td class="meal">Dorado with Serrano Chili and Tequila Butter</td>
            <td></td>
          </tr>
          <tr>
            <td>Pargo, Red Snapper and Shrimp served with Garlic Pesto Baguette</td>
            <td></td>
            <td>Zapped with Fresh Lime, Agave Honey and Roasted Peppers</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal"> Chantli House Salad</td>
            <td></td>
            <td class="meal">Zarandeado Grilled Salmon Salad</td>
            <td></td>
          </tr>
          <tr>
            <td>Spinach, Romaine Lettuce, Strawberrys, Caramel Peckan, Goat Cheese, and Balsamic and Honey Vinagrette</td>
            <td></td>
            <td>With Lime and Avocado Alioli</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">Cesario Mexicana</td>
            <td></td>
            <td class="meal">Steak Whiskey Saigon Style</td>
            <td></td>
          </tr>
          <tr>
            <td>Romaine Lettuce leaves in our Garlicky House Caesar Dressing with Bacon, and Tortilla strips
            Add grilled chicken breast - $130
            Add Srimp - $140</td>
            <td></td>
            <td>Imported Vacio Skirt Steak grilled and served with Peppercorn, Bourbon Glacee, Buttered Vegetables and Yam Mash</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">Tuna Tartare</td>
            <td></td>
            <td class="meal">Tuna Ashinaga</td>
            <td></td>
          </tr>
          <tr>
            <td>Saku Pink Sushi Grade Tuna chopped raw and layered with Avocado, Green Onion, and Watermelon, Drizzled with Serrano Chili spiked Soy Sauce</td>
            <td></td>
            <td>Top grade Sushi Tuna seared rare and served with a Miso, Green, Onion and Sake Cream Sauce, Vegetable Stir Fry and Jasmin Rice</td>
            <td></td>
          </tr>
        </table>
      </div>
    )
  } else {
      return(
        <div className='dining-menu'>
          Dinner
        </div>
      )
    }
  }
}

export default Menu
