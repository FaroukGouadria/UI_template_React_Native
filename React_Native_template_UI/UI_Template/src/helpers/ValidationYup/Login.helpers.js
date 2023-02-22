import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('Email is Required'),
    password:Yup.string().min(6,'Password must be at least 6 characters').required('Password is Required')
});
export default LoginSchema;