
import { Button } from "flowbite-react"
import { useState } from "react"
import { useEffect } from "react"
import { Card } from "flowbite-react"
import StaggerText from "react-stagger-text"
import zodiacSigns from "../../Data/StarSignIcons"
import * as horoscopeAPI from "@/app/api/apiHoroscope"

function DailyHoroscopeView() {
    type ZodiacSignKey = keyof typeof zodiacSigns;
    let sign = localStorage.getItem("selectedStarSign")
    const [horoscope, setHoroscope] = useState('')
    const [horoscopeFuture, setFutureHoroscope] = useState('')
    const [futureButtonHeading, setFutureButtonHeading] = useState("See the future...")
    const [heading, setHeading] = useState(`Todays Horoscope for the ${sign}...`)

    useEffect(() => {
        if (localStorage.getItem("dailyHoroscope") == null) {
            horoscopeAPI.getDailyHoroscope(sign!!).then(response => {
                setHoroscope(response.data.horoscope_data);
            }).catch(error => {
                console.error("Error in fetch", error);
            })
        } else {
            setHoroscope(localStorage.getItem("dailyHoroscope")!!)
        }
    }, [sign])

    useEffect(() => {
        if (localStorage.getItem("tomorrowsHoroscope") == null) {
            horoscopeAPI.getDailyHoroscopeWithDay(sign!!, "TOMORROW").then(response => {
                setFutureHoroscope(response.data.horoscope_data);
            }).catch(error => {
                console.error("Error in fetch", error);
            })
        } else {
            setFutureHoroscope(localStorage.getItem("tomorrowsHoroscope")!!)
        }
    }, [sign])

    return (
        <>
            <Card className="my-4 bg-black">
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    {heading}
                </h5>
                <p className="font-normal text-white dark:text-gray-400">
                    <StaggerText
                        staggerType="letter"
                        staggerDuration={0.1}
                        key={horoscope}
                    >
                        {horoscope}
                    </StaggerText>
                </p>
                <Button
                    className="w-40 self-end"
                    size={"sm"}
                    gradientDuoTone={"purpleToBlue"}
                    onClick={() => {
                        setHoroscope(horoscopeFuture)
                        setHeading(`Here is tomorrows horoscope, ${sign}...`)
                        setFutureButtonHeading("Be careful...")
                    }}
                >
                    {futureButtonHeading}</Button>
            </Card>

        </>
    )
}

export default DailyHoroscopeView