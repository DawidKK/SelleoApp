import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';

import { addEvent } from '../../../actions/eventFormActions';

import EventFormStyles from './FormStyles';

const EventFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const EventForm = props => (
  <EventFormStyles>
    <Formik
      initialValues={{
        title: '',
        description: ''
      }}
      validationSchema={EventFormSchema}
      onSubmit={(values, { resetForm }) => {
        props.addEvent(values);
        resetForm();
        props.history.push('/');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field placeholder="Event title" name="title" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
          <Field component="textarea" placeholder="Event description" name="description" />
          {errors.description && touched.description ? <div>{errors.description}</div> : null}
          <button type="submit">SUBMIT EVENT</button>
        </Form>
      )}
    </Formik>
  </EventFormStyles>
);

const mapDispatchToProps = dispatch => {
  return {
    addEvent: data => {
      dispatch(addEvent(data));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(EventForm)
);
