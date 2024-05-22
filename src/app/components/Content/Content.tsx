import { Button } from "flowbite-react"
import "./Content.css"
import DailyHoroscopeView from "./DailyHoroscopeView/DailyHoroscopeView"
import WeeklyHoroscopeView from "./WeeklyHoroscopeView/WeeklyHoroscopeView"
import MonthlyHoroscopeView from "./MonthlyHoroscopeView/MonthlyHoroscopeView"
import OpenAiView from "./OpenAiView/OpenAiView"

function Content() {
    return (
        <>
            <div className="m-3 relative">
                <DailyHoroscopeView />
            </div>
            <div className="m-3 relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WeeklyHoroscopeView />
                <MonthlyHoroscopeView />
            </div>
            <div className="m-3 relative">
                <OpenAiView />
            </div>
        </>
    )
}

export default Content
