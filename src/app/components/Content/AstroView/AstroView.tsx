
import { Button } from "flowbite-react"
import { useState } from "react"
import { useEffect } from "react"
import { Card } from "flowbite-react"

import * as horoscopeAPI from "@/app/api/apiHoroscope"

function AstroView() {
    let sign = localStorage.getItem("selectedStarSign")
    const [horoscope, setHoroscope] = useState('')
    const [horoscopeFuture, setFutureHoroscope] = useState('')
    const [horoscopeWeekly, setHoroscopeWeekly] = useState('')
    const [horoscopeMonthly, setHoroscopeMonthly] = useState('')
    const [heading, setHeading] = useState(`Todays Horoscope, ${sign}...`)

    useEffect(() => {
        horoscopeAPI.getDailyHoroscope(sign!!).then(response => {
            setHoroscope(response.data.horoscope_data);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [sign])

    useEffect(() => {
        horoscopeAPI.getDailyHoroscopeWithDay(sign!!, "TOMORROW").then(response => {
            setFutureHoroscope(response.data.horoscope_data);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [sign])

    useEffect(() => {
        horoscopeAPI.getWeeklyHoroscope(sign!!).then(response => {
            setHoroscopeWeekly(response.data.horoscope_data);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [sign])

    useEffect(() => {
        horoscopeAPI.getMonthlyHoroscope(sign!!).then(response => {
            setHoroscopeMonthly(response.data.horoscope_data);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [sign])

    return (
        <>
            <Card href="#" className="my-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    { heading }
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {horoscope}
                </p>
                <Button onClick={ () => {
                    setHoroscope(horoscopeFuture)
                    setHeading(`Here is tomorrows horoscope, ${sign}...`)
                }}>See the Future...</Button>
            </Card>

            <Card href="#" className="my-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    { "Weekly Horoscope" }
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {horoscopeWeekly}
                </p>
            </Card>

            <Card href="#" className="my-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    { "Monthly Horoscope" }
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {horoscopeMonthly}
                </p>
            </Card>
        </>
    )
}

export default AstroView