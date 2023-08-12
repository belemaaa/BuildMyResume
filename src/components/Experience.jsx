import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Experience = ({setExperience}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [e1Date, setE1Date] = useState('')
    const [e1Title, setE1Title] = useState('')
    const [e1Role, setE1Role] = useState('')
    const [e1Description, setE1Description] = useState('')

    const [e2Date, setE2Date] = useState('')
    const [e2Title, setE2Title] = useState('')
    const [e2Role, setE2Role] = useState('')
    const [e2Description, setE2Description] = useState('')

    const [e3Date, setE3Date] = useState('')
    const [e3Title, setE3Title] = useState('')
    const [e3Role, setE3Role] = useState('')
    const [e3Description, setE3Description] = useState('')

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            
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
            <p className='heading-p'>What are some of your work experiences?</p>
            <p className='heading-p2'>input at least one experience</p>

            <form method='POST' onSubmit={handleFormSubmit} className='experienceform'>
                <div className='e-box'>
                    <label className='details-lbl font-bold'>Experience 1</label><br/>
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
                    <label>Job description <span className='text-sm font-semibold'>(what are some things you achieved or <br className='hidden md:flex'/>  
                    were in charge of doing?)</span>:</label><br/>
                    <textarea 
                        className='e-textarea border'
                        type='text'
                        required
                    />
                </div>

                <div className='ml-0 lg:ml-10'>
                    <Link to='/personal_data' className='previous-btn'>
                        Previous
                    </Link>

                    <button type='submit' className='next-btn'>
                        Next
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Experience