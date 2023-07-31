import React, {useState} from 'react'

const DetailsHeader = () => {
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [details1Array, setDetails1Array] = useState([]);
    const handleFormSubmit = (formData) => {
        setDetails1Array([...details1Array, formData]);
    };
  return (
    <div className='details-page'>
        <div className='details-div shadow-lg'>
            <p className='p1'>To build your resume, please fill out the fields below</p>
            <p className='p2'>Note: These details will represent the fields in your resume.</p>

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

            </form>
        </div>
    </div>
  )
}

export default DetailsHeader