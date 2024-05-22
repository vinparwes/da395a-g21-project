
import { Button } from "flowbite-react"
import { useState } from "react"
import { useEffect } from "react"
import { Card } from "flowbite-react"
import StaggerText from "react-stagger-text"
import zodiacSigns from "../../Data/StarSignIcons"
import * as horoscopeAPI from "@/app/api/apiHoroscope"

function MonthlyHoroscopeView() {
    type ZodiacSignKey = keyof typeof zodiacSigns;
    let sign = localStorage.getItem("selectedStarSign")

    const [horoscopeMonthly, setHoroscopeMonthly] = useState('')

    useEffect(() => {
        horoscopeAPI.getMonthlyHoroscope(sign!!).then(response => {
            setHoroscopeMonthly(response.data.horoscope_data);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [sign])

    return (
        <>
            <Card className="my-4 bg-black">
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    {"Monthly Horoscope"}
                </h5>
                <p className="font-normal text-white dark:text-gray-400">
                    <StaggerText
                        staggerType="letter"
                        staggerDuration={0.1}
                        key={horoscopeMonthly}
                    >
                        {horoscopeMonthly}
                    </StaggerText>
                </p>
            </Card>

        </>
    )
}
export default MonthlyHoroscopeView