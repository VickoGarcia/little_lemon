import {useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";

function BookingForm(props) {
  const handleSubmit = (values) => {
    props.submitForm(values);
  };

  const validationSchema = Yup.object({
    resdate: Yup.string().required("Required"),
    restime: Yup.string().required("Required"),
    guests: Yup.number().min(1, "Must be at least 1 guest").max(10, "Maximun 10 guests per table").required("Required")
  });

  const formik = useFormik({
    initialValues: {
      resdate: "",
      restime: "",
      guests: ""
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

  return (
    
    <VStack w="1024px" p={32}>
      <Heading as="h1" id="reservation-section">
        Reserve a Table Online
      </Heading>
      <Box p={18} rounded="md" w="100%">
      <div className="bookingForm">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.resdate && formik.errors.resdate}>
              <FormLabel htmlFor="resdate">Choose date</FormLabel>
              <Input
                type="date" id="resdate" {...formik.getFieldProps("resdate")}
              />
              <FormErrorMessage>{formik.errors.resdate}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.restime && formik.errors.restime}>
              <FormLabel htmlFor="restime">Choose time</FormLabel>
              <Select id="restime" {...formik.getFieldProps("restime")}>
                {props.availableTimes.map(time => <option key={time}>{time}</option>)}
              </Select>
              <FormErrorMessage>{formik.errors.restime}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
              <FormLabel htmlFor="guests">Number of guests</FormLabel>
              <Input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select id="occasion">
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="yellow" width="full" aria-label="On Click" disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}>
              Submit
            </Button>
          </VStack>
        </form>
        </div>
      </Box>
    </VStack>
  );
}

export default BookingForm;
