import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3).required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string(),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: values => {
      // handle form submission 
      console.log(values);
      alert(`Hy this is me ${formik.values.name} and my email is ${formik.values.email} and subject is ${formik.values.subject} and my messages is ${formik.values.message}`)
    },
  });

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <div className="login-box">
        <form onSubmit={formik.handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <label>Your Name</label>
            {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
          </div>
          <div className="user-box">
            <input
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label>Email</label>
            {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </div>
          <div className="user-box">
            <input
              type="text"
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              placeholder='(optional)'
            />
            <label>Subject</label>
            {formik.touched.subject && formik.errors.subject && <div className="error">{formik.errors.subject}</div>}
          </div>
          <div className="user-box">
            <textarea
              className="area"
              name="message"
              placeholder="Type Your Message Here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            <label>Message</label>
            {formik.touched.message && formik.errors.message && <div className="message-error">{formik.errors.message}</div>}
          </div>
          <center>
            <button type="submit" className="submit">
              SEND
              <span> </span>

            </button>
            
          </center>
          <p className='values'>{formik.values.name}</p>
            <p className='values'>{formik.values.email}</p>
            <p className='values'>{formik.values.subject}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
