import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';
import LikesButton from './LikesButton';

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
                <div className="cardHeader">
                    <h1 className="title"> {details.name}</h1>
                    <h4 className="url">URL: <a href={details.url}>{details.url}</a></h4>
                </div>

                <div className="content">
                    <div className="description">
                        <h4>Description:</h4>
                        {details.description}
                    </div>
                    <div className="review">
                        <h4>Review: </h4>
                        {details.review}
                    </div>
                </div>
                <footer className="footer">
                    <LikesButton id={details.id} />
                    <Link to="/">Home</Link>
                </footer>
            </div>

        </div>
        )
    }
}
