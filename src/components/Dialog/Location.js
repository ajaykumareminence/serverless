"use client"
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { locationSchema } from "@/utils/formValidation";
import { locationState } from "@/utils/formInitialState";
import { ADD_LOCATION } from "@/store/slice/tripSlice";
import { toast } from "react-hot-toast";

export default function Location({id}){
    const dispatch = useDispatch()
    const { current_user } = useSelector((state) => state.user);
    function showDialog() {
        const element = document.getElementById(id);
        element.showModal()
    }
    function closeDialog() {
        const element = document.getElementById(id);
        element.close()
    }
    const formik = useFormik({
        initialValues: locationState,
        validationSchema: locationSchema,
        onSubmit: submitLocation
    })
    function submitLocation(values){
        dispatch(ADD_LOCATION(values.location));
        resetForm()
        return toast.success("Location added")
    }
    const { handleSubmit, handleChange, values, errors, touched, resetForm } = formik;
    return(
        <>
             {current_user?.role == 'admin' &&
                <>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => showDialog()}>Add a location</button>
                    </li>
                    <dialog id={id}>
                        <div className="d-flex justify-content-end">
                            <button className="btn p-0 border-0" onClick={() => closeDialog()}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                            </button>
                        </div>
                        <form className="p-3" onSubmit={handleSubmit}>
                         
                            <div className="mb-3">
                                <label>Location</label>
                                <input type="text" className="form-control" name="location" value={values.location} onChange={handleChange} 
                                />
                                {errors.location && touched.location && (<span className="text-danger">{errors.location}</span>)}
                            </div>
                            <button className="btn btn-success rounded-0" type="submit">Add a location</button>
                        </form>
                    </dialog>
                </>
            }
        </>
    )
}