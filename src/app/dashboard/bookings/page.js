import Booking from "@/components/Dashboard/Booking"

export function generateMetadata({ params, searchParams }, parent) {
    return {
      title: "My bookings"
    }
}

export default function Bookings() {
    return (
        <>
            <div className="table-responsive py-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Booking id</th>
                            <th>Travel in</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Diparture</th>
                            <th>Return</th>
                            <th>Booking Action</th>
                        </tr>
                    </thead>
                    <Booking />
                </table>
            </div>
        </>
    )
}