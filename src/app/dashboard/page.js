"use client"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { CREATE_BOOKING } from "@/store/slice/bookingSlice";
import { toast } from "react-hot-toast";
import { deleteToken, verifyToken } from "@/utils/jsonwebtoken";
import { useRouter } from "next/navigation";

export const transports = [
    {
        type: 'Flight',
        id: 1
    },
    {
        type: 'Train',
        id: 2
    },
    {
        type: 'Bus',
        id: 3
    },
    {
        type: 'Car',
        id: 4
    },
    {
        type: 'Bicycle',
        id: 5
    }   
]
export default function Dashboard() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(1);
    const { trips } = useSelector((state) => state.trip);
    const { bookings } = useSelector((state) => state.booking)
    function doBooking(trip) {
        dispatch(CREATE_BOOKING(trip))
        return toast.success("Trip booked")
    }
    useEffect(()=>{
        (async function tokenCheck(){
            let dec = await verifyToken();
            if(!dec){
                await deleteToken()
                router.push('/login')
            }
        })();
    })
    return (
        <>
            <div className="d-flex justify-content-center gap-2 py-3">
                {
                    transports.map((v, i) => (
                        <button
                            className={`btn border rounded-0 p-3 ${activeTab == v.id ? 'btn-success' : ''}`}
                            key={i}
                            onClick={() => setActiveTab(v.id)}
                        >
                            {v.type}
                        </button>
                    ))
                }
            </div>
            <hr />
            <div className="table-responsive">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Diparture</th>
                            <th>Return</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trips.filter((item) => item.type_id == activeTab)?.length > 0
                                ?
                                trips.filter((item) => item.type_id == activeTab)?.map((v, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{v.from}</td>
                                            <td>{v.to}</td>
                                            <td>{v.diparture}</td>
                                            <td>{v.return}</td>
                                            <td>{v.price}</td>
                                            <td>
                                                {bookings.some((item) => v.id == item.trip_id)
                                                    ?
                                                    <button className="btn btn-success rounded-0" type="button" disabled>Booked</button>
                                                    :
                                                    <button className="btn btn-success rounded-0" type="button" onClick={() => doBooking(v)}>Book</button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td className="text-center" colSpan={6}>No trips available right now</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}