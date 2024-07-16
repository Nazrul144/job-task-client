import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [method, setMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      ...(method === 'email' ? { email } : { phone }),
      pin,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData);
      setMessage(response.data.message);
      // Store the JWT token in local storage or context
      localStorage.setItem('token', response.data.token);
      toast.success('logged in successfully!')
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col shadow-lg mt-16 w-96 p-2 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Login with</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            {method === 'email' ? (
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  required
                />
              </div>
            ) : (
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="pin" className="block mb-2 text-sm">5-digit PIN</label>
              <input
                type="password"
                name="pin"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full py-3 font-semibold rounded-md bg-sky-300 dark:text-gray-50">Login</button>
                <Link to='/register' className='lg:ml-8 ml-16'>Don't have an account? <span className='text-green-500 font-bold'>Register</span></Link>
            </div>
            {message && <p className="text-center text-green-500">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
