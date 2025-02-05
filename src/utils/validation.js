import { object, string} from 'yup';


export const  signInValidation = object({
    email:string().email("Email must be a valid email").required('Please enter your email').matches(/^[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format'),
    password:string().required('Please enter your password').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        '8 characters, uppercase letter, lowercase letter, number, special character',
      ),
})


export const  registerValidation = object({
    name:string().min(4, 'Name must be greater than 3 characters').required('Please enter your username'),
    email:string().email("Email must be a valid email").required('Please enter your email').matches(/^[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format'),
    password:string().required('Please enter your password').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        '8 characters, uppercase letter, lowercase letter, number, special character',
      ),
})