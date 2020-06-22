import React, { Component } from 'react';
import './RecipeCard.css';

export default class RecipeCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: [],
            loading: true,
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        const { id } = this.props.match.params
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    details: data,
                    loading: false,
                })
            })
        console.log(this.state.details)

    }

    render() {
        const { loading, details } = this.state;

        if (loading) {
            return <div>Loading...</div>
        }

        return (<div className="RecipeCard" >
            <div className="Card">
            <div className="title">
            <h1> {details.name}</h1>
            </div>
            <h4>URL: {details.url}</h4>
            <div className="review">
            <h4>Description: {details.description}</h4>
            <h4>Review: {details.review}</h4>
            </div>
            </div>

        </div>
        )
    }
}
