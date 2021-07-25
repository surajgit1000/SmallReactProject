import React from 'react'

export const Onecard = ({ data }) => {
    return (
        <div>
            <div className="continer">
                <div className="row">
                    <h1 className="text-center">The name is {data.name}</h1>
                    <img src={data.image_url} alt="No image is available" style={{width:"450px",height:"450px"}}/>
                </div>
            </div>
        </div>
    )
}
