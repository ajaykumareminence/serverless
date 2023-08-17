"use client"
import { useSelector, useDispatch } from "react-redux";
import { transports } from "@/app/dashboard/page";
import { useFormik } from "formik";
import { tripState } from "@/utils/formInitialState";
import { tripSchema } from "@/utils/formValidation";
import { CREATE_TRIP } from "@/store/slice/tripSlice";
import { toast } from "react-hot-toast";
import { handleKeyDown } from "@/utils/numberInput";
export default function Trip({id}) {
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
        initialValues: tripState,
        validationSchema: tripSchema,
        onSubmit: addTrip
    })
    const { handleSubmit, handleChange, values, errors, touched, resetForm } = formik;
    async function addTrip(values) {
        values.price = parseInt(values.price);
        dispatch(CREATE_TRIP(values));
        closeDialog()
        resetForm()
        return toast.success('Trip created');
    }
    const { locations } = useSelector((state) => state.trip)
    function dateToday() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return yyyy + '-' + mm + '-' + dd;
    }
    return (
        <>
            {current_user?.role == 'admin' &&
                <>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => showDialog()}>Create a trip</button>
                    </li>
                    <dialog id={id}>
                        <div className="d-flex justify-content-end">
                            <button className="btn p-0 border-0" onClick={() => closeDialog()}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                            </button>
                        </div>
                        <form className="p-3" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Trip type</label>
                                <select className="form-select" name="type_id" value={values.type_id} onChange={handleChange}>
                                    <option value="">Choose an option</option>
                                    {
                                        transports.map((v, i) => (
                                            <option value={v.id} key={i}>{v.type}</option>
                                        ))
                                    }
                                </select>
                                {errors.type_id && touched.type_id && (<span className="text-danger">{errors.type_id}</span>)}
                            </div>
                            <div className="mb-3">
                                <label>From</label>
                                <select className="form-select" name="from" value={values.from} onChange={handleChange}>
                                    <option value="">Choose an option</option>
                                    {
                                        locations.map((v, i) => (
                                            <option value={v} key={i}>{v}</option>
                                        ))
                                    }
                                </select>
                                {errors.from && touched.from && (<span className="text-danger">{errors.from}</span>)}
                            </div>
                            <div className="mb-3">
                                <label>To</label>
                                <select className="form-select" name="to" value={values.to} onChange={handleChange}>
                                    <option value="">Choose an option</option>
                                    {
                                        locations.map((v, i) => (
                                            <option value={v} key={i}>{v}</option>
                                        ))
                                    }
                                </select>
                                {errors.to && touched.to && (<span className="text-danger">{errors.to}</span>)}
                            </div>
                            <div className="d-flex gap-2">
                                <div className="mb-3">
                                    <label>Diparture</label>
                                    <input type="date" className="form-control" name="diparture" value={values.diparture} onChange={handleChange} min={dateToday()} />
                                    {errors.diparture && touched.diparture && (<span className="text-danger">{errors.diparture}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label>Return</label>
                                    <input type="date" className="form-control" name="return" value={values.return} onChange={handleChange} min={values.diparture} />
                                    {errors.return && touched.return && (<span className="text-danger">{errors.return}</span>)}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Ticket price</label>
                                <input type="text" className="form-control" name="price" value={values.price} onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                                {errors.price && touched.price && (<span className="text-danger">{errors.price}</span>)}
                            </div>
                            <button className="btn btn-success rounded-0" type="submit">Create a trip</button>
                        </form>
                    </dialog>
                </>
            }
        </>
    )
}