import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SquareLoader from "react-spinners/SquareLoader";
import Resume from './Resume'

const GeneralInformation = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')
    const navigate = useNavigate()

    const [details1, setDetails1] = useState(null);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = {
        fullname: fullname,
        address: address,
        phone: phone,
        email: email,
        details: details
      };
      setDetails1(formData);
  
      // Save the form data to localStorage as an object
      localStorage.setItem('generalInformation', JSON.stringify(formData));
  
      navigate('/resume');
    };

    // loader
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

  return (
    <div className='details-page'>
        {
            loading ? 
                <SquareLoader
                    color={'#000000'}
                    loading={loading}
                    size={60}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='loader'
                />
            :

                <div className='details-div'>
                    <p className='p1'>To build your resume, please fill out the fields below</p>
                    <p className='p2'>Note: These details will represent the fields in your resume.</p>

                    <p className='form-heading'>(GENERAL INFORMATION)</p>

                    <form method='POST' onSubmit={handleFormSubmit} className='details1form'>
                        <div className='details-box'>
                            <label className='details-lbl'>Fullname:</label> <br/>
                            <input 
                                className='border'
                                type='text'
                                maxLength={100}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                            />
                        </div>

                        <div className='details-box'>
                            <label>Address:</label><br/>
                            <input 
                                type='text'
                                className='border'
                                maxLength={250}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className='details-box'>
                            <label>Phone:</label><br/>
                            <input 
                                type='phone'
                                className='border'
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>                    

                        <div className='details-box'>
                            <label>Email:</label><br/>
                            <input 
                                type='email'
                                className='border'
                                maxLength={250}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className='details-box'>
                            <label>Tell us something about yourself...</label><br/>
                            <textarea 
                                type='text'
                                className='textarea border'
                                onChange={(e) => setDetails(e.target.value)}
                                required
                            />
                        </div>

                        <button type='submit' className='next-btn'>
                            Next
                        </button>
                    </form>
                </div>
        }     
        <div className='hidden'>
            <Resume {...details1} />
        </div>
    </div>
  )
}

export default GeneralInformation