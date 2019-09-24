import React from 'react'

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={`${this.props.data.thumbnail.path}.${this.props.data.thumbnail.extension}`} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{this.props.data.name}</h5>
                <a href="#" className="btn btn-primary">Conhecer</a>
                </div>
            </div>
        )
    }
}
