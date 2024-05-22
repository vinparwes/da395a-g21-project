
import { Button } from "flowbite-react"
import { useState } from "react"
import { useEffect } from "react"
import { Accordion } from "flowbite-react"
import { Card } from "flowbite-react"
import StaggerText from "react-stagger-text"

import * as horoscopeAPI from "@/app/api/apiHoroscope"
import { getPrompt } from "@/app/api/apiOpenAi"

function AstroView() {
    let sign = localStorage.getItem("selectedStarSign")
    const [horoscope, setHoroscope] = useState('')
    const [horoscopeFuture, setFutureHoroscope] = useState('')
    const [horoscopeWeekly, setHoroscopeWeekly] = useState('')
    const [horoscopeMonthly, setHoroscopeMonthly] = useState('')
    const [seerInformation, setSeerInformation] = useState('')
    const [heading, setHeading] = useState(`Todays Horoscope for ${sign}...`)

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
    /*
    useEffect(() => {
        getPrompt(horoscope).then(response => {
            setSeerInformation(response!!);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [horoscope])
    */
    return (
        <>
            <Accordion className="position: relative">
                <Accordion.Panel isOpen={true}>
                    <Accordion.Title>{heading}</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white dark:text-gray-400">
                            <StaggerText
                                staggerType="letter"
                                staggerDuration={0.1}
                                key={horoscope}
                            >
                                {horoscope}
                            </StaggerText>
                        </p>
                        <Button onClick={() => {
                            setHoroscope(horoscopeFuture)
                            setHeading(`Here is tomorrows horoscope, ${sign}...`)
                        }}>See the Future...</Button>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>{"Weekly Horoscope"}</Accordion.Title>
                    <Accordion.Content>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <StaggerText
                                staggerType="word"
                                staggerDuration={0.1}
                                key={horoscopeWeekly}
                            >
                                {horoscopeWeekly}
                            </StaggerText>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>{"Monthly Horoscope"}</Accordion.Title>
                    <Accordion.Content>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <StaggerText
                                staggerType="letter"
                                staggerDuration={0.1}
                                key={horoscopeMonthly}
                            >
                                {horoscopeMonthly}
                            </StaggerText>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

        </>
    )
}

export default AstroView