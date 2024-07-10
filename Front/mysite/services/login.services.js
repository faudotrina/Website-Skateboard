import { useState, useEffect } from 'react';

const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // const data = await response.json();
            console.log('response:', response.json());
            // console.log('response:', response);
        } else {
            console.error('Login failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
};