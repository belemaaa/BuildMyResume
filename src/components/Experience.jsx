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
            e1Date,
            e1Title,
            e1Role,
            e1Description,
            e2Date,
            e1Title,
            e2Role,
            e2Description,
            e3Date,
            e3Title,
            e3Role,
            e3Description
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
                    <label className='details-lbl font-bold'>Experience 1 
                        <span className='text-red-700 pl-1'>*</span>
                    </label><br/>
                    <label>Date:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e1Date}
                        onChange={(e) => setE1Date(e.target.value)}
                        required
                    />
                    <br/>
                    <label>Job title:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e1Title}
                        onChange={(e) => setE1Title(e.target.value)}
                        required
                    />
                    <br/>
                    <label>Job role:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e1Role}
                        onChange={(e) => setE1Role(e.target.value)}
                        required
                    />
                    <br/>
                    <label>Job description <span className='text-sm font-semibold'>(what are some things you achieved or <br className='hidden md:flex'/>  
                    were in charge of doing?)</span>:</label><br/>
                    <textarea 
                        className='e-textarea border'
                        type='text'
                        value={e1Description}
                        onChange={(e) => setE1Description(e.target.value)}
                        required
                    />
                </div>

                <div className='e-box mt-10'>
                    <label className='details-lbl font-bold'>Experience 2</label><br/>
                    <label>Date:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e2Date}
                        onChange={(e) => setE2Date(e.target.value)}
                    />
                    <br/>
                    <label>Job title:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e2Title}
                        onChange={(e) => setE2Title(e.target.value)}
                    />
                    <br/>
                    <label>Job role:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e2Role}
                        onChange={(e) => setE2Role(e.target.value)}
                    />
                    <br/>
                    <label>Job description <span className='text-sm font-semibold'>(what are some things you achieved or <br className='hidden md:flex'/>  
                    were in charge of doing?)</span>:</label><br/>
                    <textarea 
                        className='e-textarea border'
                        type='text'
                        value={e2Description}
                        onChange={(e) => setE2Description(e.target.value)}
                    />
                </div>

                <div className='e-box mt-10'>
                    <label className='details-lbl font-bold'>Experience 3</label><br/>
                    <label>Date:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e3Date}
                        onChange={(e) => setE3Date(e.target.value)}
                    />
                    <br/>
                    <label>Job title:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e3Title}
                        onChange={(e) => setE3Title(e.target.value)}
                    />
                    <br/>
                    <label>Job role:</label><br/>
                    <input 
                        className='border'
                        type='text'
                        value={e3Role}
                        onChange={(e) => setE3Role(e.target.value)}
                    />
                    <br/>
                    <label>Job description <span className='text-sm font-semibold'>(what are some things you achieved or <br className='hidden md:flex'/>  
                    were in charge of doing?)</span>:</label><br/>
                    <textarea 
                        className='e-textarea border'
                        type='text'
                        value={e3Description}
                        onChange={(e) => setE3Description(e.target.value)}
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