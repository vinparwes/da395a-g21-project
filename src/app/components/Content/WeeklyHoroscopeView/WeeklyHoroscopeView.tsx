
import { Button } from "flowbite-react"
import { useState } from "react"
import { useEffect } from "react"
import { Accordion } from "flowbite-react"
import { Card } from "flowbite-react"
import StaggerText from "react-stagger-text"
import zodiacSigns from "../../Data/StarSignIcons"
import * as horoscopeAPI from "@/app/api/apiHoroscope"

function WeeklyHoroscopeView() {
    type ZodiacSignKey = keyof typeof zodiacSigns;
    let sign = localStorage.getItem("selectedStarSign")

    const [horoscopeWeekly, setHoroscopeWeekly] = useState('')

    useEffect(() => {
        horoscopeAPI.getWeeklyHoroscope(sign!!).then(response => {
            setHoroscopeWeekly(response.data.horoscope_data);
        }).catch(error => {
            setHoroscopeWeekly(':(');
        })
    }, [sign])



    return (
        <>
            <Card className="my-4 bg-black max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    {"Weekly Horoscope"}
                </h5>
                <p className="font-normal text-white dark:text-gray-400">
                    <StaggerText
                        staggerType="letter"
                        staggerDuration={0.1}
                        key={horoscopeWeekly}
                    >
                        {horoscopeWeekly}
                    </StaggerText>
                </p>
            </Card>
        </>
    )
}

export default WeeklyHoroscopeView