import { Helmet } from "react-helmet";
import { Container, Form, FormContainer, FormInput, FormLabel, FormMessage, Heading, Paragraph } from "../styles/Contact.style";
import { FormButton } from "../UI/Button";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgpypgp");
  return (
    <Container>
      <Helmet>
        <title> Contact | Mayokun Areola </title>
      </Helmet>
      <div>
        <Heading>Talk to me</Heading>
        <Paragraph>Do you have a project for me or a Job? Feel free to contact me by filling the form below</Paragraph>
        <FormContainer method="POST" onSubmit={handleSubmit}>
          <Form>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput required id="name" name="name" type="text" />
          </Form>
          <Form>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput required id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form>
          <Form>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormMessage required id="message" name="message"  />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Form>
          <Form>
            <FormButton type="submit" disabled={state.submitting}>
              {!state.submitting ? "Submit" : "Loading..."}
            </FormButton>
          </Form>
        </FormContainer>
      </div>
    </Container>
  );
}
