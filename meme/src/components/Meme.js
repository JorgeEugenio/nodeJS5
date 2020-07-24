import React from 'react'
//import PropTypes from 'prop-types'

//const Meme = ({name, lat, long}) => <h2>{name}: {lat}-{long}</h2>

const Meme = ({
                name, 
                lat, 
                long
            }) => (
    <>
    <div className="single-meme">
        <h2>{name}</h2>
        <p>({lat})({long})</p>
    </div>
    </>
)

/* Meme.propTypes={
    name: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    long: PropTypes.string.isRequired
} */


export default Meme