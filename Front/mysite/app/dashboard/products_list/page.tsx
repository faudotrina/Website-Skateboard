"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import { useRouter } from 'next/navigation'; // Correction ici: 'next/router' au lieu de 'next/navigation'
import Product from '@/interfaces/Product.interface';
import UserData from '@/interfaces/UserData.interface';

export default function Register() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const [selectAll, setSelectAll] = useState(false);
    const [checkedProducts, setCheckedProducts] = useState<number[]>([]);

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/allproducts/');
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleLogout = () => {
        router.push('/dashboard/admin');
        setLoading(true);
    }

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/product/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                setData(data.filter(item => item.id !== id));
            } else {
                console.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting products:', error);
        }
    };

    // Gestion du changement pour chaque case à cocher individuelle
    const handleCheckboxChange = (id: number) => {
        setCheckedProducts(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    // Modification de handleSelectAllChange pour gérer correctement checkedUsers
    const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target; // Pas besoin d'affirmation de type ici, car event est déjà du bon type
        setSelectAll(target.checked);
        if (target.checked) {
            // Sélectionner tous les produits
            setCheckedProducts(data.map(item => item.id));
        } else {
            // Désélectionner tous les produits
            setCheckedProducts([]);
        }
    };

    const handleDeleteCheckedProducts = async () => {
        try {
            await Promise.all(checkedProducts.map(id =>
                fetch(`http://localhost:8000/product/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                })
            ));
            // Mettre à jour l'état des données après la suppression
            setData(data.filter(item => !checkedProducts.includes(item.id)));
            setCheckedProducts([]); // Réinitialiser les produits cochés
        } catch (error) {
            console.error('Error deleting checked products:', error);
        }
    };

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

                <h2 className="text-4xl font-bold p-2 m-2">Welcome to the dashboard</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

                        <thead className="ltr:text-left rtl:text-right ">
                            <tr>
                                <th className="sticky inset-y-0 start-0 bg-white px-4 py-4">
                                    <label htmlFor="SelectAll" className="sr-only">Select All</label>
                                    <input
                                        type="checkbox"
                                        id="SelectAll"
                                        className="size-5 rounded border-gray-300"
                                        onChange={handleSelectAllChange}
                                        checked={selectAll} />
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">ID</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Quantity</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Price</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Description</th>
                                <th className="px-4 py-2">
                                    <button
                                        onClick={handleDeleteCheckedProducts}
                                        className="inline-block rounded bg-red-700 px-2 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        DELETE ALL
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                                        <label className="sr-only" htmlFor={`Row${item.id}`}>Row {item.id}</label>
                                        <input
                                            className="size-5 rounded border-gray-300 "
                                            type="checkbox"
                                            id={`Row${item.id}`}
                                            checked={selectAll || checkedProducts.includes(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">{item.id}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.quantity}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.price}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.description}</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}