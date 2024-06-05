import styled from 'styled-components';

const Button = styled.button`
  align-self: flex-end;
  min-width: 7em;
  margin-top: 1rem;
  background-color: var(--light-accent-color);
  color: var(--light-color);

  &:hover,
  &:focus {
    background-color: var(--dark-accent-color);
  }
`;

export default function EditSaveButton({
  type = 'submit',
  onClick,
  submitted = false,
}) {
  return (
    <Button type={type} onClick={onClick}>
      {submitted ? 'Edit' : 'Save'}
    </Button>
  );
}
