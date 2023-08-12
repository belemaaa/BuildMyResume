import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Experience = ({setExperience}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [experience1, setExperience1] = useState('')
    const [experience2, setExperience2] = useState('')
    const [experience3, setExperience3] = useState('')
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            experience1,
            experience2,
            experience3
        };
        setExperience(formData)
        navigate('/education');
    };

  return (
    <div className='details-page'>
        <div className='details-div-e'>
            <p className='p1'>To build your resume, please fill out the fields below</p>
            <p className='p2'>Note: These details will represent the fields in your resume.</p>

            <p className='form-heading'>(EXPERIENCE)</p>
            <p className='form-heading'>What are some of your work experiences?</p>

            <form method='POST' onSubmit={handleFormSubmit} className='experienceform'>
                <div className='e-box'>
                    <label className='details-lbl'>Experience 1</label><br/>
                    <label>Date:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        required
                    />
                    <br/>
                    <label>Job title:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        required
                    />
                    <br/>
                    <label>Job role:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        required
                    />
                    <br/>
                    <label>Job description (what are some things you achieved or were in charge of doing?):</label><br/>
                    <textarea 
                        className='border'
                        type='text'
                        required
                    />
                </div>

                <Link to='/personal_data' className='previous-btn'>
                    Previous
                </Link>

                <button type='submit' className='next-btn'>
                    Next
                </button>
            </form>
        </div>
    </div>
  )
}

export default Experience