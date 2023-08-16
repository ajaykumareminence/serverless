"use client"
import { LOGOUT_USER } from "@/store/slice/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { deleteToken } from "@/utils/jsonwebtoken";
import { toast } from "react-hot-toast";
export default function Logout({id}){
    const router = useRouter()
    const dispatch = useDispatch()
    function showDialog(){
        const element = document.getElementById(id);
        element.showModal()
    }
    function closeDialog(){
        const element = document.getElementById(id);
        element.close()
    }
    async function doLogout(){
        await deleteToken();
        dispatch(LOGOUT_USER());
        toast.success("Logout success")
        router.push('/login');
    }
    return (
        <>
        <button className="nav-link" onClick={()=>showDialog()}>Logout</button>
            <dialog id={id}>
                <div className="p-4">
                    <h5 className="text-center">Are you sure?</h5>
                    <div className="d-flex justify-content-between gap-3">
                        <button className="btn btn-danger" onClick={()=>doLogout()}>Yes, Logout</button>
                        <button className="btn btn-success" onClick={()=>closeDialog()}>No</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}