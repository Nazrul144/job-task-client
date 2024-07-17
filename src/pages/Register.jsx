import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [method, setMethod] = useState('email');
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pinError, setPinError] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const pinPattern = /^[0-9]{5}$/;
        if (!pinPattern.test(pin)) {
            setPinError('PIN must be a 5-digit number');
            return;
        } else {
            setPinError('');
        }

        const registrationData = {
            name,
            pin,
            ...(method === 'email' ? { email } : { phone }),
        };

        try {
            const response = await axios.post('http://localhost:5000/api/register', registrationData);
            setMessage(response.data.message);
            if (response) {
                Swal.fire({
                    title: "User registered successfully!",
                    icon: "success",
                });
            }
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col shadow-lg mt-16 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register</h1>
                    <p className="text-sm dark:text-gray-600">Sign up to create your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="pin" className="block mb-2 text-sm">5-digit PIN</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="pin"
                                id="pin"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                required
                            />
                            {pinError && <p className="text-red-500 text-sm">{pinError}</p>}
                            <div className="absolute top-[37px] right-3">
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                                </span>
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Register with</label>
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
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-sky-400 dark:text-gray-50">Register</button>
                        </div>
                        {message && <p className="text-center text-green-500">{message}</p>}
                        <p className="px-6 text-sm text-center dark:text-gray-600">
                            Already have an account?
                            <Link to="/login">
                                <button className="hover:underline text-green-500 font-bold"> Sign in</button>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
