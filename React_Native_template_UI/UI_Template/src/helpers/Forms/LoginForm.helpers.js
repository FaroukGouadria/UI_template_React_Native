import { useFormik } from "formik";
import LoginSchema from "../ValidationYup/Login.helpers";

const LoginForm = (onSubmit) => {
const formik = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema:LoginSchema,
    onSubmit
});
return formik;
}

export default LoginForm