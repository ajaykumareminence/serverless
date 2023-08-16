"use client"
import { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/utils/formValidation";
import { loginState } from "@/utils/formInitialState";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { signToken, storeToken } from "@/utils/jsonwebtoken";
import { useRouter } from "next/navigation";
import { LOGIN_USER } from "@/store/slice/userSlice";
import Link from "next/link";

export default function Login(){
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const router = useRouter();
    const { users } = useSelector((state)=>state.user);
    const formik = useFormik({
        initialValues: loginState,
        validationSchema: loginSchema,
        onSubmit: doLogin
    })
    const { handleSubmit, handleChange, errors, values, touched, resetForm } = formik;
    async function doLogin(values){
        setLoading(true)
        const exist = users.some((el)=>el.email == values.email && el.password == values.password);
        if(!exist){
            setLoading(false)
            return toast.error("Wrong credentials")
        }
        const user = users.filter((el)=> el.email == values.email);
        const token = await signToken(user[0]);
        await storeToken(token);
        dispatch(LOGIN_USER(user[0]));
        setLoading(false)
        resetForm()
        toast.success("Logged in")
        router.push('/dashboard');
    }
    return(
        <>
        <form className="border p-4 rounded-0" onSubmit={handleSubmit}>
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
                <button className="btn rounded-0 border btn-success" type="submit">Login</button>
            }
            <p className="mt-2 mb-0">
                No account? <Link href="/signup">Signup</Link> 
            </p>
        </form>
    </>
    )
}