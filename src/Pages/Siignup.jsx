import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'

const Siignup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      return message.error("Passwords don't match")
    }
    if (!username || !password) {
      return message.error("Please fill in all fields")
    }

    try {
      const response = await fetch('https://farrm-render-server2.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          fullName,
          phoneNumber,
          address
        }),
      })

      const data = await response.json()

      if (data.success) {
        message.success(data.message)
        navigate('/Siign')
      } else {
        message.error(data.message)
      }
    } catch (error) {
      console.error('Signup error:', error)
      message.error('An error occurred during signup')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen border rounded-2xl border-black m-2 p-2 bg-[url('https://th.bing.com/th/id/OIP.BEqhljemcoQIFqsWWO5cqAHaEJ?w=308&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1')] bg-cover bg-center">
      <div className="border-4 border-amber-300 m-2 p-6 bg-white/30 backdrop-invert backdrop-opacity-10">
        <div className="flex flex-col space-y-4">
          <label className="text-2xl font-bold mb-2">Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            className="border border-black p-2 w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl font-bold mb-2">Username:</label>
          <input
            type="text"
            placeholder="username"
            className="border border-black p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl font-bold mb-2">Email:</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="border border-black p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl font-bold mb-2">Phone Number:</label>
          <input
            type="text"
            placeholder="phone number"
            className="border border-black p-2 w-full"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl font-bold mb-2">Address:</label>
          <input
            type="text"
            placeholder="address"
            className="border border-black p-2 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl font-bold mb-2">Password:</label>
          <input
            type="password"
            placeholder="password"
            className="border border-black p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl font-bold mb-2">Confirm Password:</label>
          <input
            type="password"
            placeholder="confirm password"
            className="border border-black p-2 w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleSignup}
            className="bg-sky-500 hover:bg-sky-700 px-4 py-2 text-white rounded"
          >
            Signup
          </button>
          <p className='font-serif text-lg text-center'>Already have an account? : <Link to='/Siign' className='text-blue-700 underline'>Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Siignup
