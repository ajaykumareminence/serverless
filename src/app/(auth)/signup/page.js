"use client"
import { useState } from "react";
import { useFormik } from "formik";
import { signupState } from "@/utils/formInitialState";
import { signupSchema } from "@/utils/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_USER } from "@/store/slice/userSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const router = useRouter();
    const { users } = useSelector((state) => state.user);
    const formik = useFormik({
        initialValues: signupState,
        validationSchema: signupSchema,
        onSubmit: doSignup
    });
    const { handleSubmit, handleChange, values, touched, errors, resetForm } = formik;
    async function doSignup(values) {
        setLoading(true)
        //check email
        const exist = users.some((el) => el.email == values.email);
        if (exist) {
            setLoading(false)
            return toast.error("Email already exists")
        }
        dispatch(CREATE_USER(values))
        resetForm()
        setLoading(false)
        toast.success("Account created")
        router.push('/login')
    }
    return (
        <>
            <form className="border p-4 rounded-0" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" value={values.name} className="form-control" onChange={handleChange} />
                    {errors.name && touched.name && (<span className="text-danger">{errors.name}</span>)}
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="text" name="email" value={values.email} className="form-control" onChange={handleChange} />
                    {errors.email && touched.email && (<span className="text-danger">{errors.email}</span>)}
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" value={values.password} className="form-control" onChange={handleChange} />
                    {errors.password && touched.password && (<span className="text-danger">{errors.password}</span>)}
                </div>
                {
                    loading
                        ?
                        <button className="btn rounded-0 border btn-success" type="button" disabled>Loading...</button>
                        :
                        <button className="btn rounded-0 border btn-success" type="submit">Create an account</button>
                }
                <p className="mt-2 mb-0">
                    Have an account? <Link href="/login">Login</Link>
                </p>
            </form>
        </>
    )
}