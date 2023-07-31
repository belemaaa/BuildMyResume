import React, {useState} from 'react'

const DetailsHeader = () => {
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
  return (
    <div>
        <div className='details-div'>
            <p>To build your resume, please fill out the fields below</p>
            <p>Note: These details will represent the fields in your resume.</p>
        </div>

        <form method='POST'>
            <label>Fullname</label> <br/>
            <input 
                className='details-input-box'
                type='text'
                maxLength={100}
                required
            />

        </form>
    </div>
  )
}

export default DetailsHeader