"use client";
import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Login() {
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [noAccount, setNoAccount] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const decodeToken = (token: string) => {
        try {
            return jwt.decode(token);
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const accessToken = data.access;

                if (accessToken) {
                    const decodedAccessToken = decodeToken(accessToken);

                    if (decodedAccessToken && typeof decodedAccessToken !== 'string') {
                        if ('user_id' in decodedAccessToken) {
                            console.log('ID:', decodedAccessToken.user_id, "is connected");
                            Cookies.set('accessToken', accessToken, { expires: 1 }); // Set expiration as needed
                            router.push('/dashboard/users_list');
                        } else {
                            console.error('Failed to decode access token');
                        }
                    } else {
                        console.error('Access token not found in response');
                    }
                } else {
                    console.error('Login failed with status:', response.status);
                }
            } else {
                if (response.status === 401) {
                    setNoAccount(true);
                }
                console.error('Login failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">

                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Admin</h1>
                {noAccount && <p className='text-red-600'>Acces Denied</p>}
                
                <form onSubmit={handleLogin} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
                    <p className="text-center text-lg font-medium text-black">Sign in to your account</p>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-3xl border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-200 text-black"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full rounded-3xl border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-200 text-black"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Cacher' : 'Afficher'}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700"
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
