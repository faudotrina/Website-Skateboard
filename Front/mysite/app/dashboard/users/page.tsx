"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { useRouter } from 'next/navigation';

export default function Users() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUsers = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      // La mise en cache stocke les données afin qu'elles n'aient pas besoin d'être récupérées à partir de votre source de données à chaque demande
      const response = await fetch('http://127.0.0.1:8000/register/user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          username: username,
          password: password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(true);
        setError(null);
      } else {
        const errorText = await response.text();
        if (response.status === 400 && errorText.includes('already exists')) {
          setError('User already exists');
        } else {
          setError('Registration failed');
        }
      }
    } catch (error) {
      setError('Error registering');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    router.push('/dashboard/admin');
    setLoading(true);
  }

  return (

    <div className="flex h-screen bg-gray-200 text-black">
      <div className="p-4 space-y-4 bg-gray-400 w-64">
        <h2 className="text-2xl font-bold text-black">Admin</h2>
        <nav>
          <a href="/dashboard/users_list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
            Users list
          </a>

          <a href="/dashboard/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
            Add User
          </a>

          <a href="/dashboard/products_list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
            Products list
          </a>

          <a href="/dashboard/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
            Add product
          </a>
        </nav>
      </div>
      <div className="p-4 w-full">

        <button
          onClick={handleLogout}
          disabled={loading}
          className="absolute top-0 right-0 m-4 bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Logout'}
        </button>

        <div className="p-4 w-full  flex flex-col items-center ">
          <h2 className="text-4xl font-bold p-2 m-2 ">Welcome to the dashboard</h2>

          <section className="bg-gray-100 w-2/3">

            <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12 flex flex-col items-center">
              <form onSubmit={handleUsers} className="space-y-4">
                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">first_name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="First name"
                    type="text"
                    id="first_name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>

                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">last_name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Last name"
                    type="text"
                    id="last_name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>

                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">username</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>

                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">Email</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Password</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                      placeholder="password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Password Confirmation</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                      placeholder="Password Confirmation"
                      type="password"
                      id="PasswordConfirmation"
                      value={passwordConfirmation}
                      onChange={(event) => setPasswordConfirmation(event.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="block w-full cursor-pointer bg-green-500 rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black"
                  >
                    + ADD
                  </button>
                </div>
                {error && <p className='text-red-500 font-bold'>{error}</p>}
              </form>
            </div>


          </section>
        </div>
      </div>
    </div>
  )
}
