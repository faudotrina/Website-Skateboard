"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { useRouter } from 'next/navigation';

export default function Products() {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleProducts = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      // La mise en cache stocke les données afin qu'elles n'aient pas besoin d'être récupérées à partir de votre source de données à chaque demande
      const response = await fetch('http://127.0.0.1:8000/register/product/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          quantity: quantity,
          price: price,
          description: description
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(true);
        setError(false);
      } else {
        const errorText = await response.text();
        if (response.status === 400 && errorText.includes('already exists')) {
          setError(true);
          setErrorMessage('Product already exists');
        } else {
          setError(true);
          setErrorMessage('Registration failed');
        }
      }
    } catch (error) {
      setError(true);
      setErrorMessage('Error registering');

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

        <div className="p-4 w-full  flex flex-col items-center">
          <h2 className="text-4xl font-bold p-2 m-2 ">Welcome to the dashboard</h2>

          <section className="bg-gray-100 w-2/3">

            <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12 flex flex-col items-center">
              <form onSubmit={handleProducts} className="space-y-4">
                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">name</label>
                  <input
                    className="w-96 rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">quantity</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Quantity"
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </div>

                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">price</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Price"
                    type="number"
                    id="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className='bg-white '>
                  <label className="sr-only" htmlFor="name">description</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-200"
                    placeholder="Description"
                    id="description"
                    rows={8}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>



                <div className="mt-4">
                  <button
                    // onClick={handleProducts}
                    type="submit"
                    className="block w-full cursor-pointer bg-green-500 rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
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
