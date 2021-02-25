// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import * as yup from 'yup';
// import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button'
// import { ButtonInput } from 'react-bootstrap';
// import { Form } from 'react-bootstrap-validation';
// import { useFormik } from 'Formik';

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   file: yup.mixed().required(),
//   terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
// });

// const Contact = () => {
//   return (
//     <useFormik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         file: null,
//         terms: false,
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationFormik101">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik102">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid" tooltip>
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>
//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik103">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik104">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik105">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.File
//               className="position-relative"
//               required
//               name="file"
//               label="File"
//               onChange={handleChange}
//               isInvalid={!!errors.file}
//               feedback={errors.file}
//               id="validationFormik107"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               id="validationFormik106"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </useFormik>
//   );
// }

// render(<Contact />);

// export default Contact

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [data, setdata] = useState({
    firstname: '',
    lastname : '',
    Username : '',
    City : '',
    State : '',
    Zip : '',
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }

    setValidated(true);
    alert(`My first name is ${data.firstname} . My last name is ${data.lastname} . My username is ${data.Username} . My city is ${data.City} . My State is ${data.State} . My Zip code is ${data.Zip} `)
  };
  
  const inputEvent = (event) => {
    const  {name,value} = event.target
    setdata((preVal) => {
      return{
        ...preVal,
        [name]:value
      }
    })
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container_fluid">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto gy-5 gx-5 ">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row className="from_valid">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="from_class mb-4"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text" 
                    name ="firstname"
                    value={data.firstname}
                    onChange={inputEvent}
                    placeholder="First name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom02"
                  className="from_class"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text" 
                    name ="lastname"
                    value={data.lastname}
                    onChange={inputEvent}
                    placeholder="Last name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text" 
                      name ="Username"
                      value={data.Username}
                      onChange={inputEvent}
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom03"
                  className="mb-4"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control 
                    type="text"  
                    name ="City"
                    value={data.City}
                    onChange={inputEvent}
                    placeholder="City" 
                    required 

                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationCustom04"
                  className="mb-4"
                >
                  <Form.Label>State</Form.Label>
                  <Form.Control 
                    type="text" 
                    name ="State"
                    value={data.State}
                    onChange={inputEvent}
                    placeholder="State"
                    required 

                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationCustom05"
                  className="mb-4"
                >
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required  
                    name ="Zip"
                    value={data.Zip}
                    onChange={inputEvent}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group className="mb-4">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              {/* <NavLink to="/"> */}
                <Button type="submit" variant="outline-primary">
                  Submit form
                </Button>
              {/* </NavLink> */}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
{
  /* render(<Contact />); */
}

// import * as yup from 'yup';
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button'

// const { Formik } = formik;

// function Contact() {
//     const schema = yup.object().shape({
//         firstName: yup.string().required(),
//         lastName: yup.string().required(),
//         username: yup.string().required(),
//         city: yup.string().required(),
//         state: yup.string().required(),
//         zip: yup.string().required(),
//         terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//       });
//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>
//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               id="validationFormik0"
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// render(<Contact />);
// export default Contact
