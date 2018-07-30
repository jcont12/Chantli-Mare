import React, { Component } from 'react';
import '../../../App.css';

class Menu extends Component{
  render(){
    return(
      <div id="dining-menu">
        <div id='background-menu-0'>
            <div id="background-menu-1">
            <div id="dining-menu-dinner">
              <h2>Dinner</h2>
              <table className="dining-table">
                <tr className="dining-dinner-tr">
                  <td className="dining-menu-meal">Seafood Soup</td>
                  <td className="dining-menu-meal">Dorado with Serrano Chili and Tequila Butter</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menus-td-description">Pargo, Red Snapper and Shrimp served with Garlic Pesto Baguette</td>
                  <td className="dining-menus-td-description">Zapped with Fresh Lime, Agave Honey and Roasted Peppers</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menu-meal">Chantli House Salad</td>
                  <td className="dining-menu-meal">Zarandeado Grilled Salmon Salad</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menus-td-description">Spinach, Romaine Lettuce, Strawberrys, Caramel Peckan, Goat Cheese, and Balsamic and Honey Vinagrette</td>
                  <td className="dining-menus-td-description">With Lime and Avocado Alioli</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menu-meal">Cesario Mexicana</td>
                  <td className="dining-menu-meal">Steak Whiskey Saigon Style</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menus-td-description">Romaine Lettuce leaves in our Garlicky House Caesar Dressing with Bacon, and Tortilla strips</td>
                  <td className="dining-menus-td-description">Imported Vacio Skirt Steak grilled and served with Peppercorn, Bourbon Glacee, Buttered Vegetables and Yam Mash</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menu-meal">Tuna Tartare</td>
                  <td className="dining-menu-meal">Tuna Ashinaga</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menus-td-description">Saku Pink Sushi Grade Tuna chopped raw and layered with Avocado, Green Onion, and Watermelon, Drizzled with Serrano Chili spiked Soy Sauce</td>
                  <td className="dining-menus-td-description">Top grade Sushi Tuna seared rare and served with a Miso, Green, Onion and Sake Cream Sauce, Vegetable Stir Fry and Jasmin Rice</td>
                </tr>
              </table>
            </div>
            </div>
            <div id="background-menu-2">
            <div id="dining-menu-lunch">
              <h2>Lunch</h2>
              <table className="dining-table">
                <tr>
                  <td className="dining-menu-meal">Mediterranean Tomato and Seafood Soup</td>
                  <td className="dining-menu-meal">Croque Señor</td>
                </tr>
                <tr>
                  <td className="dining-menus-td-description">Served with Fish, Shrimp, and Garlic Baguette</td>
                  <td className="dining-menus-td-description">Ham, Gouda Cheese, Sauteed Mushrooms and Onions, grilled and served on an English Muffin</td>
                </tr>
                <tr>
                  <td className="dining-menu-meal">Guacamole</td>
                  <td className="dining-menu-meal">Hamburger Deluxe (8 oz.)</td>
                </tr>
                <tr>
                  <td className="dining-menus-td-description">Served with Tortilla Chips and Pico de Gallo Salsa</td>
                  <td className="dining-menus-td-description">Served with Bacon, Choice of Blue or Cheddar Cheese, Sauteed Onions and Mushrooms, with Fried Potatoes</td>
                </tr>
                <tr>
                  <td className="dining-menu-meal">Cesario Mexicana</td>
                  <td className="dining-menu-meal">Aguachile with Shrimp</td>
                </tr>
                <tr>
                  <td className="dining-menus-td-description">Romaine Lettuce leaves in our Garlicky House Caesar Dressing with Bacon, and Tortilla strips</td>
                  <td className="dining-menus-td-description">Cucumber and Chile Serrano with Tomatillo and Lime Juice, served ice cold with Tostadas</td>
                </tr>
                <tr>
                  <td className="dining-menu-meal">Pasta al Diablo</td>
                </tr>
                <tr>
                  <td className="dining-menus-td-description">Served with Gorgonzola, White Wine, Cream, Tomatoes, Sweet Pepper, Spinach, and a touch of Chile</td>
                </tr>
              </table>
              </div>
            </div>
            <div id="dining-menu-dessert">
            <div id="background3">
              <h2>Desserts</h2>
              <table className="dining-table">
                <tr className="dining-dinner-tr">
                  <td className="dining-menu-meal">Vanilla Ice Cream Sundae</td>
                  <td className="dining-menu-meal">Creme Brulee of the day</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menus-td-description">Topped with berries</td>
                  <td className="dining-menus-td-description">Ask your waiter</td>
                </tr>
                <tr className="dining-dinner-tr">
                  <td className="dining-menu-meal">Chocolate Cake</td>
                  <td className="dining-menu-meal">Banana Foster au Rum</td>
                </tr>
              </table>
              </div>
            </div>
        </div>
        <div id="dining-menu-background">
        </div>
      </div>
      )
  }
}

export default Menu
