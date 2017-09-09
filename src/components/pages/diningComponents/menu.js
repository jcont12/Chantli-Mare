import React, { Component } from 'react';
import '../../../App.css';

class Menu extends Component{
  render(){
    return(
      <div className='dining-menu'>
        <h1>'Dinner'</h1>
        <h4>'Entrees'</h4>
        <table>
          <tr>
            <td class="meal">'Seafood Soup'</td>
            <td></td>
            <td class="meal">'Dorado with Serrano Chili and Tequila Butter'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Pargo, Red Snapper and Shrimp served with Garlic Pesto Baguette'</td>
            <td></td>
            <td>'Zapped with Fresh Lime, Agave Honey and Roasted Peppers'</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">'Chantli House Salad'</td>
            <td></td>
            <td class="meal">'Zarandeado Grilled Salmon Salad'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Spinach, Romaine Lettuce, Strawberrys, Caramel Peckan, Goat Cheese, and Balsamic and Honey Vinagrette'</td>
            <td></td>
            <td>'With Lime and Avocado Alioli'</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">'Cesario Mexicana'</td>
            <td></td>
            <td class="meal">'Steak Whiskey Saigon Style'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Romaine Lettuce leaves in our Garlicky House Caesar Dressing with Bacon, and Tortilla strips\nAdd grilled chicken breast - $130  Add Srimp - $140'</td>
            <td></td>
            <td>'Imported Vacio Skirt Steak grilled and served with Peppercorn, Bourbon Glacee, Buttered Vegetables and Yam Mash'</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">'Tuna Tartare'</td>
            <td></td>
            <td class="meal">'Tuna Ashinaga'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Saku Pink Sushi Grade Tuna chopped raw and layered with Avocado, Green Onion, and Watermelon, Drizzled with Serrano Chili spiked Soy Sauce'</td>
            <td></td>
            <td>'Top grade Sushi Tuna seared rare and served with a Miso, Green, Onion and Sake Cream Sauce, Vegetable Stir Fry and Jasmin Rice'</td>
            <td></td>
          </tr>
        </table>
        <h4>'Desserts'</h4>
        <table>
          <tr>
            <td class="meal">'Vanilla Ice Cream Sundae'</td>
            <td class="meal">'Creme Brulee of the day'</td>
          </tr>
          <tr>
            <td>Topped with berries</td>
            <td>Ask your waiter</td>
          </tr>
          <tr>
            <td class="meal">'Chocolate Cake'</td>
            <td class="meal">'Banana Foster au Rum'</td>
          </tr>
        </table>

        <h1>Lunch</h1>
        <table>
          <tr>
            <td class="meal">'Mediterranean Tomato and Seafood Soup'</td>
            <td></td>
            <td class="meal">'Croque Señor'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Served with Fish, Shrimp, and Garlic Baguette'</td>
            <td></td>
            <td>'Ham, Gouda Cheese, Sauteed Mushrooms and Onions, grilled and served on an English Muffin'</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">'Guacamole'</td>
            <td></td>
            <td class="meal">'Hamburger Deluxe (8 oz.)'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Served with Tortilla Chips and Pico de Gallo Salsa'</td>
            <td></td>
            <td>'Served with Bacon, Choice of Blue or Cheddar Cheese, Sauteed Onions and Mushrooms, with Fried Potatoes'</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">'Cesario Mexicana'</td>
            <td></td>
            <td class="meal">'Aguachile with Shrimp'</td>
            <td></td>
          </tr>
          <tr>
            <td>'Romaine Lettuce leaves in our Garlicky House Caesar Dressing with Bacon, and Tortilla strips\nAdd grilled chicken breast - $130  Add Srimp - $140'</td>
            <td></td>
            <td>'Cucumber and Chile Serrano with Tomatillo and Lime Juice, served ice cold with Tostadas'</td>
            <td></td>
          </tr>
          <tr>
            <td class="meal">'Pasta al Diablo'</td>
          </tr>
          <tr>
            <td>'Served with Gorgonzola, White Wine, Cream, Tomatoes, Sweet Pepper, Spinach, and a touch of Chile'</td>
            <td></td>
          </tr>
          <h4>'Desserts'</h4>
          <table>
            <tr>
              <td class="meal">'Vanilla Ice Cream'</td>
              <td class="meal">'Creme Brulee of the day'</td>
            </tr>
            <tr>
              <td></td>
              <td>Ask your waiter</td>
            </tr>
            <tr>
              <td class="meal">'Chocolate Cake'</td>
            </tr>
          </table>
        </table>
      </div>
      )
  }
}

export default Menu
