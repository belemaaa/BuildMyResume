import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const PersonalData = ({setPersonalData}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [sex, setSex] = useState('')
    const [nationality, setNatonality] = useState('')
    const [state, setState] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const navigate = useNavigate()

    const [details2Array, setDetails2Array] = useState([]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
          sex,
          nationality,
          state,
          maritalStatus
        };
        setPersonalData(formData)
        navigate('/experience');
    };

  return (
    <div className='details-page'>
        <div className='details-div'>
            <p className='p1'>To build your resume, please fill out the fields below</p>
            <p className='p2'>Note: These details will represent the fields in your resume.</p>

            <p className='form-heading'>(PERSONAL DATA)</p>

            <form method='POST' onSubmit={handleFormSubmit} className='details1form'>
                <div className='details-box'>
                    <label className='details-lbl'>Sex:</label> <br/>
                    <input 
                        className='border'
                        type='text'
                        maxLength={20}
                        onChange={(e) => setSex(e.target.value)}
                        required
                    />
                </div>

                <div className='details-box'>
                    <label>Nationality:</label><br/>
                    <input 
                        type='text'
                        className='border'
                        maxLength={50}
                        onChange={(e) => setNatonality(e.target.value)}
                        required
                    />
                </div>

                <div className='details-box'>
                    <label>State of Origin:</label><br/>
                    <input 
                        type='text'
                        className='border'
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </div>                    

                <div className='details-box'>
                    <label>Marital Status:</label><br/>
                    <input 
                        type='text'
                        className='border'
                        maxLength={20}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                    />
                </div>

                <Link to='/general_information' className='previous-btn'>
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

export default PersonalData