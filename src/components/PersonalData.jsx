import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const PersonalData = () => {
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
        setDetails2Array([...details2Array, formData]);

        // Save the form data to localStorage
        localStorage.setItem('personalData', JSON.stringify(details2Array));

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
                        required
                    />
                </div>

                <button type='submit' className='next-btn'>
                    Next
                </button>
            </form>
        </div>
    </div>
  )
}

export default PersonalData