import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { Link } from 'react-router-dom'

const UsersAddresh = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPinCode] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [housenNo, setHouseNo] = useState('')
    const [road, setRoadNo] = useState('')
    
    const nevigate = useNavigate()
    console.log(name);

    const handleAddresh = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/addresh', {
            name, phone, pincode, state, city, housenNo, road
        }).then(result => {
            console.log(result)
            nevigate('/checkout')
        })
            .catch(err => console.log(err))

    }

    return (
        <div class="userAddersh">
            <form onSubmit={handleAddresh}>
                <h2>Your Addresh</h2>
                <div>
                    <input type="text" placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        name='name'
                    />
                </div>
                <div>
                    <input type="number" placeholder="Phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                    />
                </div>
                <div>
                    <input type="number" placeholder="Pincode"
                        onChange={(e) => setPinCode(e.target.value)}
                        value={pincode}
                        required
                    />
                </div>
                <div>
                    <input type="text" placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        required
                    />
                </div>
                <div>
                    <input type="text" placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        required
                    />
                </div>

                <div>
                    <input type="text" placeholder="House No"
                        onChange={(e) => setHouseNo(e.target.value)}
                        value={housenNo}
                        required

                    />
                </div>

                <div>
                    <input type="text" placeholder="Road No"
                        onChange={(e) => setRoadNo(e.target.value)}
                        value={road}
                        required
                    />
                </div>
                <div>
                    <button style={{ background: "crimson" }}>Save Addresh</button>
                </div>
            </form>



        </div>
    )
}

export default UsersAddresh