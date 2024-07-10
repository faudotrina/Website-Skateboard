"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import { useRouter } from 'next/navigation';
import Header from '@/components/Header'


export default function Sale() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);

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

    return (
        <div>
            <header>
                <Header />
            </header>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-[#E85A50] sm:text-3xl">Products Collection</h2>
                    </header>

                    <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                        <div className="block sm:hidden">
                            <button
                                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Filters & Sorting </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4 rtl:rotate-180"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>

                        <div className="hidden sm:flex sm:gap-4">
                            <div className="relative">
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                                    >
                                        <span className="text-sm font-medium"> Availability </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div
                                        className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                                    >
                                        <div className="w-96 rounded border border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                <li>
                                                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterInStock"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterPreOrder"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterOutOfStock"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </details>
                            </div>

                            <div className="relative">
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                                    >
                                        <span className="text-sm font-medium"> Price </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div
                                        className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                                    >
                                        <div className="w-96 rounded border border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> The highest price is $400 </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <div className="border-t border-gray-200 p-4">
                                                <div className="flex justify-between gap-4">
                                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">$</span>

                                                        <input
                                                            type="number"
                                                            id="FilterPriceFrom"
                                                            placeholder="From"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>

                                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">$</span>

                                                        <input
                                                            type="number"
                                                            id="FilterPriceTo"
                                                            placeholder="To"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div className="hidden sm:block">
                            <label htmlFor="SortBy" className="sr-only ">SortBy</label>

                            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm bg-white text-black">
                                <option>Sort By</option>
                                <option value="Title, DESC">Name, DESC</option>
                                <option value="Title, ASC">Name, ASC</option>
                                <option value="Price, DESC">Price, DESC</option>
                                <option value="Price, ASC">Price, ASC</option>
                            </select>
                        </div>
                    </div>

                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p1.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Tripper Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 159 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p2.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Channel Island Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 249 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p4.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Beach Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 129 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p12.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Rider Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 349 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                    </ul>
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p5.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Coconut Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 199 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p7.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Cruiser Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 149 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p8.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Copers Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 199 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p9.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Grip Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 299 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p10.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Grip Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 139 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p11.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Bowl rider
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 199 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p2.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Pop Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 349 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <Image
                                    src="/img/p13.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    width={500}
                                    height={500}
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Spot Surfskate
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> 199 € </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
