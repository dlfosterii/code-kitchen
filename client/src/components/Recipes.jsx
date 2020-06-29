import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Recipes.css';
import './InputForm';
import InputForm from './InputForm';

export default class Recipes extends Component {
    constructor() {
        super();

        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {
        fetch('/api/v1/recipes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recipes: data
                })
                console.log(data)
            })

    }



    render() {
        return (
            <div>
                {this.state.recipes.map(recipe => {
                    return (
                        // console.log(this.state)
                        <div key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}><h2>{recipe.name}</h2></Link>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}
