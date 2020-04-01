import React from 'react';
import style from './recipe.module.scss';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <h1>{ title }</h1>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
            <p><b>Carolies:</b> { calories }</p>
            <img className="image" src={ image } alt=""/>
        </div>
    );
}

export default Recipe;