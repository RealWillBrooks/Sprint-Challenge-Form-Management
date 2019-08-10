import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from "yup";
import FoodItems from './FoodItems';
import { Segment } from 'semantic-ui-react';



const UserForm = ({ errors, touched, status, values }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if(status) {
            setData([...data, status])
        }
        // eslint-disable-next-line
    }, [status])

    return (

        <Segment raised>
        <div className="userForm">
            <h1>User Log-In</h1>
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                {touched.name && errors.name && (
                    <p className='errorMessage'>{errors.name}</p>
                )}
                <Field type="password" name="password" placeholder="Password" />
                <button data-testid='submitButton' type="submit">Submit</button>
            </Form>
            {
                data.map((data, i) => {
                    return  <FoodItems name={data[i].name} course={data[i].course} tech={data[i].technique} />
                   
                    
                })
            }
        </div>
   </Segment>

    )
}

const FormikUserForm = withFormik({

    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        }
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required('Name is required'),
        password: Yup.string()
          .min(4)
          .max(20)
          .required('A password is required')
      }),
   
    handleSubmit(values, {setStatus, resetForm}){
        console.log("Form submitted", values);
        axios.post("http://localhost:5000/api/register", values)
        .then(res => {
            
            resetForm();
            console.log("Posted data:", res)
            })
        axios.get("http://localhost:5000/api/restricted/data")
        .then(data => {
            console.log("Get data:", data)
            setStatus(data.data)
        })
        .catch(err => console.log(err))
    }
})(UserForm);

export default FormikUserForm;