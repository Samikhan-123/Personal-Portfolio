import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_010d61l';
const TEMPLATE_ID = 'template_d0wxmyl';
const USER_ID = 'W_wnUzCupn47AQ-CB';

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
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // console.log('Form values:', values);
      sendEmail(values, resetForm, setSubmitting);
    },
  });

  const sendEmail = (emailData, setSubmitting, resetForm) => {
    const templateParams = {
      to_name: 'Sami Khan',
      from_name: emailData.name,
      from_email: emailData.email,
      // from_subject: emailData.subject,
      message: emailData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        if (response.status === 200) {
          alert('Email sent successfully');
          resetForm();
          console.log(response);
        } else {
          alert('Error sending email. Please try again.');
        }
      })
      .catch((error) => {
        alert('Error sending email');
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };


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
              className="area p-2"
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
            <button type="submit" disabled={formik.isSubmitting} className="submit">
              {formik.isSubmitting ? 'Sending...' : 'SEND'}
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
