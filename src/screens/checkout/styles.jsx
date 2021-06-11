import { CloseCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  margin-top: 36px;
  margin-bottom: 60px;
  padding: 40px;
`;

export const Form = styled.form``;
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;
export const FormLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;
  color: #283342;
`;
export const FormInput = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding: 16px 12px;
`;
export const FormSelect = styled.select`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding: 16px 12px;
`;
export const FormTextArea = styled.textarea`
  font-family: inherit;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const FieldErrorWrapper = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`;

export function FieldError({ children }) {
  return (
    <FieldErrorWrapper>
      <CloseCircleOutlined /> {children}
    </FieldErrorWrapper>
  );
}
