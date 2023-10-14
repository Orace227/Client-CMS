import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  packageId: "",
  fullName: "",
  mobile: "",
  email: "",
  hotelPreference: "",
  likelyTravelDate: "",
  numberOfAdults: "",
  numberOfChildren: "",
  numberOfInfants: "",
  budget: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  mobile: Yup.string().required("Mobile number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  likelyTravelDate: Yup.date().required("Likely travel date is required"),
  numberOfAdults: Yup.number().required("Number of adults is required"),
  numberOfChildren: Yup.number(),
  numberOfInfants: Yup.number(),
  budget: Yup.number(),
  message: Yup.string().required("Message is required"),
});

const TravelInquiryForm = (props) => {
  const onSubmit = async (values, { resetForm }) => {
    // You can handle form submission here, e.g., send data to your backend
    values.packageId = await props.packageId;
    console.log("Submitted:", values);

    try {
      const inquiry = await axios.post("/CreateInquiry", values);
      if (inquiry) {
        toast.success("you inquiry has been completed!!");
      }
    } catch (err) {
      toast.error("some error ouccure to fill-up the form!!");
      console.log(err);
    }

    // Clear the form after successful submission
    resetForm();
  };

  return (
    <div className="">
      <Typography variant="h4" style={{ color: "black",marginTop:"10px" }} gutterBottom>
        Travel Inquiry Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="packageId"
                  label="Package Id"
                  value={props.packageId}
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="fullName"
                  label="Full Name"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="mobile"
                  label="Mobile"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage
                  name="mobile"
                  style={{ color: "red" }}
                  component="div"
                  className="error"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="email"
                  label="Email"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage
                  name="email"
                  style={{ color: "red" }}
                  component="div"
                  className="error"
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="hotelPreference"
                  label="Hotel Preference"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="likelyTravelDate"
                  label="Likely Travel Date"
                  type="date"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <ErrorMessage
                  name="likelyTravelDate"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="numberOfAdults"
                  label="Number of Adults"
                  type="text"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage
                  name="numberOfAdults"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="numberOfChildren"
                  label="Number of Children"
                  type="text"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="numberOfInfants"
                  label="Number of Infants"
                  type="text"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="budget"
                  label="Approximate Budget"
                  type="text"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="message"
                  label="Message"
                  as={TextField}
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default TravelInquiryForm;
