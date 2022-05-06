import * as yup from "yup";

const NAME = "name"
const EMAIL = "email"
const PASSWORD = "password"

export const SIGN_UP_SCHEMA = yup.object({
    [NAME]: yup.string().required().min(4),
    [EMAIL]: yup.string().required().min(4),
    [PASSWORD]: yup.string().required().min(4)
}) 