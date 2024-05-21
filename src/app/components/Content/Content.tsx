
import { Button } from "flowbite-react"
import "./Content.css"
import AstroView from "./AstroView/AstroView"


function Content() {
    return (
        <>
            <div className="m-3">
                <AstroView/>
            </div>
            <div className="grid grid-cols-2">
                <div className="m-3">
                    <Button></Button>
                </div>
                <div className="m-3">
                    <Button className="m-3"></Button>
                </div>
            </div>
        </>
    )
}

export default Content