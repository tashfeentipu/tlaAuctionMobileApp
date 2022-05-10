import * as yup from "yup";

export const PROFILE_SCHEMA = yup.object({
    name: yup.string().required("Username is required").min(4),
    email: yup.string().required("Email is required").min(4),
    password: yup.string().required("Password is required").min(4)
}) 