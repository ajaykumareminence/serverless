"use client"
import { useSelector, useDispatch } from "react-redux";
import { transports } from "@/app/dashboard/page";
import { CANCEL_BOOKING } from "@/store/slice/bookingSlice";
export default function Booking() {
    const dispatch = useDispatch()
    const { bookings } = useSelector((state) => state.booking)
    return (
        <>
            <tbody>
                {
                    bookings?.length > 0
                    ?
                    bookings?.map((v,i)=>{
                        return(
                            <tr key={i}>
                                <td>
                                    {v.id}
                                </td>
                                <td>
                                    {transports.find((item)=>item.id == v?.type_id).type}
                                </td>
                                <td>{v.from}</td>
                                <td>{v.to}</td>
                                <td>{v.diparture}</td>
                                <td>{v.return}</td>
                                <td>
                                    <button className="btn btn-danger rounded-0" type="button" onClick={()=>dispatch(CANCEL_BOOKING(v.id))}>
                                        Cancel booking
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    <tr>
                        <td className="text-center" colSpan={7}>You have not booked any trip yet.</td>
                    </tr>
                }
            </tbody>
        </>
    )
}