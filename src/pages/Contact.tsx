import { Helmet } from "react-helmet";
import { Container, Form, FormContainer, FormInput, FormLabel, FormMessage, Heading, Paragraph } from "../styles/Contact.style";
import { MenuButtonContainer, MenuButtonWrapper, MenuLink } from "../UI/Button";
import { FormButton } from "../UI/Button";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgpypgp");
  
  if(state.errors){
    toast.warn("There was an error sending your message")
  }

  if (state.succeeded) {
    toast.success("Your message has been delivered  ");
  }
  return (
    <Container>
      <Helmet>
        <title> Contact | Mayokun Areola </title>
      </Helmet>
      <div>
        <Heading>Talk to me</Heading>
        <Paragraph>
          Do you have a project for me or a Job? Feel free to contact me by
          filling the form below
        </Paragraph>
        <FormContainer method="POST" onSubmit={handleSubmit}>
          <Form>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              required
              id="name"
              name="name"
              type="text"
              placeholder="What's your name?"
            />
          </Form>
          <Form>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              required
              id="email"
              type="email"
              name="email"
              placeholder="What's your @email?"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form>
          <Form>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormMessage
              required
              id="message"
              name="message"
              placeholder="What do you have to tell me/offer me?"
            />
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
      <MenuButtonContainer>
        <MenuButtonWrapper>
          <MenuLink to={"/work"}>Work</MenuLink>
          <MenuLink to={"/resume"}>Resume</MenuLink>
        </MenuButtonWrapper>
      </MenuButtonContainer>
    </Container>
  );
}
