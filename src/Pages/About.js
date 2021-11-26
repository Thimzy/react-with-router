import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div id="about">
           <h1>About Astrowed</h1>
           <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem fugiat similique ut sequi. Repellendus tempore cum iure modi error.
            </p>
            <button onClick={() => navigate('/contact')}>
                Contact us Now
            </button> 
        </div>
    )
}

export default About
