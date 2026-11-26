import { Form,Formik,Field,ErrorMessage } from "formik";    
import * as Yup from "yup"

const schema = Yup.object({

    email : Yup.string()
        .email("Invalid email")
        .required("This field is required"),

    password : Yup.string()
        .min(6,"Min 6 char for Password")
        .required("This field is required")
});

export default function Login(){
    return(
        <Formik 

        initialValues = {{
            email:"",
            password:"" 
        }}

        validationSchema = {schema}
        onSubmit = {(values,{resetForm}) => {
            console.log(values);

            alert("Login Success");
            resetForm();
        }}
        >

        <Form>
            <h2>Login Form</h2>

            <Field 
                name="email"
                type="email"
                placeholder="Enter your Email"
            />

            <ErrorMessage 
            
                name="email"
                component="div"
            />

            <br />

            <Field 
            
                name="password"
                type="password"
                placeholder="Enter your Password"
            />

            <ErrorMessage
                name="password"
                component = "div"
            />

            <button type="submit">Login</button>
        </Form>

        

        </Formik>
    );
}