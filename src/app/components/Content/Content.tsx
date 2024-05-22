
import { Button } from "flowbite-react"
import "./Content.css"
import DailyHoroscopeView from "./DailyHoroscopeView/DailyHoroscopeView"
import WeeklyHoroscopeView from "./WeeklyHoroscopeView/WeeklyHoroscopeView"
import MonthlyHoroscopeView from "./MonthlyHoroscopeView/MonthlyHoroscopeView"
import OpenAiView from "./OpenAiView/OpenAiView"

function Content() {
    return (
        <>
            <div className="m-3 position: relative">
                <DailyHoroscopeView />
            </div>
            <div className="m-3 position: relative grid grid-cols-2">
                <WeeklyHoroscopeView/>
                <MonthlyHoroscopeView/>
            </div>
            <div className="m-3 position: relative">
                <OpenAiView />
            </div>
        </>
    )
}

export default Content