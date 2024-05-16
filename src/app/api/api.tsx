import React, { useEffect } from 'react';

function Api() {
        async function getDailyHoroscope() {
            try {
                // Fetch data from server
                const response = await fetch('https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=libra&day=TODAY', {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Fetch error: ", error);
            }
        }

        getDailyHoroscope();


    return (
        <div>
            <h1>API</h1>
        </div>
    );
}

export default Api;
