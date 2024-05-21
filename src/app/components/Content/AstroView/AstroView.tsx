
import { Button } from "flowbite-react"
import { useState } from "react"
import { useEffect } from "react"

import * as horoscopeAPI from "@/app/api/apiHoroscope"

function AstroView() {
    const [horoscope, setHoroscope] = useState('')
    let sign = localStorage.getItem("selectedStarSign")

    useEffect(() => {
        horoscopeAPI.getDailyHoroscope(sign!!).then(response => {
            setHoroscope(response.data.horoscope_data);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [sign])

    return (
        <>
            <h1>Todays Horoscope</h1>
            <p>{horoscope}</p>
        </>
    )
}

export default AstroView