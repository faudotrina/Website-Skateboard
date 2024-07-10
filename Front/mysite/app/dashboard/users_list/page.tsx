"use client"
import React, { useState, useEffect, Suspense } from 'react';
import Image from "next/image"
import { useRouter } from 'next/navigation';
import UserData from '@/interfaces/UserData.interface';

export default function Register() {

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [selectAll, setSelectAll] = useState(false);
    const [checkedUsers, setCheckedUsers] = useState<number[]>([]);

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<UserData[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/allusers/');
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleLogout = () => {
        router.push('/dashboard/admin');
        setLoading(true);
    }

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/user/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                setData(data.filter(item => item.id !== id));
            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Gestion du changement pour chaque case à cocher individuelle
    const handleCheckboxChange = (id: number) => {
        setCheckedUsers(prev => {
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
            // Sélectionner tous les utilisateurs
            setCheckedUsers(data.map(item => item.id));
        } else {
            // Désélectionner tous les utilisateurs
            setCheckedUsers([]);
        }
    };

    const handleDeleteCheckedUsers = async () => {
        try {
            await Promise.all(checkedUsers.map(id =>
                fetch(`http://localhost:8000/user/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                })
            ));
            // Mettre à jour l'état des données après la suppression
            setData(data.filter(item => !checkedUsers.includes(item.id)));
            setCheckedUsers([]); // Réinitialiser les utilisateurs cochés
        } catch (error) {
            console.error('Error deleting checked users:', error);
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
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">First Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Last Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Email</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Username</th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-2xl font-sans">Password</th>
                                <th className="px-4 py-2">
                                    <button
                                        onClick={handleDeleteCheckedUsers}
                                        className="inline-block rounded bg-red-700 px-2 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        DELETE ALL
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                data.includes(item) && (
                                    <tr key={item.id}>
                                        <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                                            <label className="sr-only" htmlFor={`Row${item.id}`}>Row {item.id}</label>
                                            <input
                                                className="size-5 rounded border-gray-300 "
                                                type="checkbox"
                                                id={`Row${item.id}`}
                                                checked={selectAll || checkedUsers.includes(item.id)}
                                                onChange={() => handleCheckboxChange(item.id)}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">{item.id}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.first_name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.last_name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.email}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.username}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">{item.password}</td>
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}