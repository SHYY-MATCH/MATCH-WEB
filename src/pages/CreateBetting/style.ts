import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  background-color: #1f2329;
  overflow-x: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 0;
  width: 100%;
`;

export const Content = styled.div`
  width: 85%;
  max-width: 600px;
  background: linear-gradient(135deg, #2a2f38 0%, #1f2329 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: "Paperlogy-7Bold";
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: "Paperlogy-6SemiBold";
  color: white;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 16px 20px;
  border: 2px solid #3a3f48;
  border-radius: 12px;
  background: #2a2f38;
  color: white;
  font-size: 16px;
  font-family: "Paperlogy-4Regular";
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #8d94a7;
  }

  &:focus {
    outline: none;
    border-color: #5c5ef5;
    box-shadow: 0 0 0 3px rgba(92, 94, 245, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const TeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(90deg, #5c5ef5 0%, #4f46e5 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-family: "Paperlogy-5Medium";
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(92, 94, 245, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TeamRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  ${Input} {
    flex: 1;
  }
`;

export const RemoveButton = styled.button`
  padding: 12px 16px;
  background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-family: "Paperlogy-5Medium";
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 16px 24px;
  background: linear-gradient(90deg, #6b7280 0%, #4b5563 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-family: "Paperlogy-6SemiBold";
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 16px 24px;
  background: linear-gradient(90deg, #5c5ef5 0%, #4f46e5 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-family: "Paperlogy-6SemiBold";
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(92, 94, 245, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
