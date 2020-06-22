import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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
                        <div>
                        
                            <h1>{recipe.name}</h1>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}
