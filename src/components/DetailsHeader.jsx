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
    <div>
        <div className='details-div'>
            <p>To build your resume, please fill out the fields below</p>
            <p>Note: These details will represent the fields in your resume.</p>
        </div>

        <form method='POST' onSubmit={handleFormSubmit}>
            <label>Fullname:</label> <br/>
            <input 
                className='details-input-box border'
                type='text'
                maxLength={100}
                onChange={(e) => setFullname(e.target.value)}
                required
            />
            <br/>

            <label>Address:</label><br/>
            <input 
                type='text'
                className='details-input-box border'
                maxLength={250}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <br/>

            <label>Phone:</label><br/>
            <input 
                type='phone'
                className='details-input-box border'
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <br/>

            <label>Email:</label><br/>
            <input 
                type='email'
                className='details-input-box border'
                maxLength={250}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

        </form>

    </div>
  )
}

export default DetailsHeader