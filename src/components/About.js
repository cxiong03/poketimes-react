import React from 'react'
import Rainbow from '../hoc/rainbow'

const About = () => {
    return (
        <div className='container'>
            <h4 className='center'>About</h4>
            <p>This is what we are About</p>
        </div>
    )
}

export default Rainbow(About)