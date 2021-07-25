import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

let RenderList = (data) => {
    return (
        data.map((element) => {
            return (
                <div className="col-md-4 p-2">
                    <Link key={element.id} to={`/${element.id}`} style={{ textDecoration: 'none' }}>
                        <div className="card shadow" style={{ width: "18rem" }}>
                            <img src={element.image_url} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </Link >
                </div>
            )
        })
    )
}

const Cardspage = ({ data }) => {
    return (
        <div className="container">
            <div className="row">
                {RenderList(data)}
            </div>
        </div>
    )
}

export default Cardspage;