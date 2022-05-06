import * as yup from "yup";

const EMAIL = "email"
const PASSWORD = "password"

export const SIGN_IN_SCHEMA = yup.object({
    [EMAIL]: yup.string().required().min(4),
    [PASSWORD]: yup.string().required().min(4)
}) 