import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

export const Heading = styled.h1`
  margin: 20px 0;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.workHeading};

`;

export const Paragraph = styled.p`
  @media only screen and (min-width: 990px) {
    font-size: 0.9rem;
    color: ${(props) => props.theme.paragraph};
    line-height: 25px;
  }
`;

export const FormContainer = styled.form`
    display: block;
`;

export const Form = styled.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const FormLabel = styled.label`
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: ${({ theme }) => theme.active};

    @media only screen and (max-width: 600px) {
        font-size: calc(16px - 1px);
        line-height: 21px;
    }
`;

export const FormInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  color: ${({ theme }) => theme.formInput};
  display: block;
  border: 2px solid ${({ theme }) => theme.formInput};
  outline: none;
  background: ${({ theme }) => theme.formInputBg};
  padding: 15px;
  height: 55px;
  appearance: none;

  &:-webkit-autofill {
    color: ${({ theme }) => theme.formInput};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.formInputBg} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.formInput} !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.formInput} !important;
    outline: none !important;
  }
`;

export const FormMessage = styled.textarea`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  color: ${({ theme }) => theme.formInput};
  display: block;
  border: 2px solid ${({ theme }) => theme.formInput};
  outline: none;
  background: ${({ theme }) => theme.formInputBg};
  padding: 15px;
  appearance: none;
  resize: none;

  &:-webkit-autofill {
    color: ${({ theme }) => theme.formInput};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.formInputBg} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.formInput} !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    border: 1px solid transparent !important;
    outline: none !important;
  }
`;

export const FormError = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    color: red;
`;