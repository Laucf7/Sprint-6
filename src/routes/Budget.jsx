import { Link } from "react-router-dom"
import App from "../App"

export default function Budget() {
    return (
        <div>
            <App />
            <button className="border-4 border-teal-400 rounded-lg ml-8 p-2 bg-teal-400 font-semibold text-slate-900">
                <Link to={'/'}>Go Home</Link>
            </button>


        </div>

    )


}

