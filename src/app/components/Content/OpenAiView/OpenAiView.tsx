
import { Button, Label } from "flowbite-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useEffect } from "react"
import { Accordion } from "flowbite-react"
import { TextInput } from "flowbite-react"
import { Card } from "flowbite-react"
import StaggerText from "react-stagger-text"
import zodiacSigns from "../../Data/StarSignIcons"
import * as horoscopeAPI from "@/app/api/apiHoroscope"
import { getPrompt } from "@/app/api/apiOpenAi"
import "./OpenAiView.css"

function OpenAiView() {
    type ZodiacSignKey = keyof typeof zodiacSigns;
    let sign = localStorage.getItem("selectedStarSign")
    const [inputValue, setInputValue] = useState('')
    const [horoscope, setHoroscope] = useState('')
    const [seerInformation, setSeerInformation] = useState('')

    useEffect(() => {
        getPrompt(horoscope).then(response => {
            setSeerInformation(response!!);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [horoscope])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let context = localStorage.getItem("dailyHoroscope")
        getPrompt(context + inputValue)
            .then(response => {
                setSeerInformation(response!!);
            })
            .catch(error => {
                console.error("Error in fetch", error);
            });
    };

    return (
        <>
            <Card className="my-4 bg-black object-cover">
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    {"Information from your personal seer..."}
                </h5>
                <p className="font-normal text-white dark:text-gray-400">
                    <StaggerText
                        staggerType="letter"
                        staggerDuration={0.1}
                        startDelay={0.1}
                        key={seerInformation}
                    >
                        {seerInformation}
                    </StaggerText>
                </p>
                <div className="mx-auto">
                    <div className="mb-2 ">
                        <Label htmlFor="medium" value="Send a message to the beyond..." className="text-2xl font-bold tracking-tight text-white dark:text-white" />
                    </div>
                    <form className="flex" onSubmit={handleSubmit}>
                        <TextInput
                            id="large"
                            type="text"
                            sizing="lg"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-96"
                        />
                        <Button
                            id="send"
                            type="submit"
                            className="w-20 ml-5"
                            size={"sm"}
                            gradientDuoTone={"purpleToBlue"}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </Card>
        </>
    )
}

export default OpenAiView