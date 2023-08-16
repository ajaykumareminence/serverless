import Link from "next/link"
import Logout from "./Dialog/Logout"
import Trip from "./Dialog/Trip"
import Location from "./Dialog/Location"
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/dashboard">
                        nav
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="#333"><path d="M380-80q-75 0-127.5-52.5T200-260q0-32 14.5-60.5T263-383q15-15 24-25t19-22q-51-78-78.5-163.5T200-760q0-58 21-89t59-31q42 0 87 41t79 109q10 20 18.5 41.5T480-641q7-26 15.5-47.5T514-730q34-68 79-109t87-41q38 0 59 31t21 89q0 81-27.5 166.5T654-430q10 12 19 22t24 25q34 34 48.5 62.5T760-260q0 75-52.5 127.5T580-80q-45 0-72.5-10L480-100l-27.5 10Q425-80 380-80Zm0-60q17 0 40-5.5t49-16.5q-11-5-20-17t-9-21q0-8 11.5-14t28.5-6q17 0 28.5 6t11.5 14q0 9-9 21t-20 17q26 11 49 16.5t40 5.5q50 0 85-35t35-85q0-22-12-43t-35-41q-11-10-24.5-24T604-396q-32-42-55-53t-69-11q-46 0-69 11t-55 53q-11 14-24.5 28T307-344q-23 20-35 41t-12 43q0 50 35 85t85 35Zm40-150q-8 0-14-9t-6-21q0-12 6-21t14-9q8 0 14 9t6 21q0 12-6 21t-14 9Zm120 0q-8 0-14-9t-6-21q0-12 6-21t14-9q8 0 14 9t6 21q0 12-6 21t-14 9ZM347-477q21-20 41.5-29.5T439-519q-5-51-17-99.5T391-705q-23-47-53-78.5T275-826q-8 15-11.5 32t-3.5 34q0 72 22.5 144.5T347-477Zm266 0q42-66 64.5-138.5T700-760q0-17-3.5-34T685-826q-33 11-63 42.5T569-705q-19 38-31 86.5T521-519q30 3 50.5 12.5T613-477Z" /></svg> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <Location id="add-location-dialog"/>
                            <Trip id="create-trip-dialog"/>
                            <li className="nav-item">
                                <Link className="nav-link" href="/dashboard/bookings">My bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Logout id="logout-dialog" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}