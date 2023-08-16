import * as Yup from "yup" 
export const signupSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Minimum 8 characters")
})
export const loginSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Minimum 8 characters")
})
export const tripSchema = Yup.object({
    type_id: Yup.string().required('Trip type is required'),
    from: Yup.string().required("From location is required"),
    to: Yup.string().required('To location is required'),
    diparture: Yup.date().required('Diparture time is required'),
    return: Yup.date().required('Return time is required'),
    price: Yup.number().required("Ticket price is required"),
})
export const locationSchema = Yup.object({
    location: Yup.string().required('Location is required')
})