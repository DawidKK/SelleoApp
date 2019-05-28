import styled from 'styled-components';

const EventFormStyles = styled.div`
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      background: transparent;
      border: 1px solid ${props => props.theme.accentColor};
      margin-bottom: 15px;
      padding: 10px;
      color: #fff;
    }

    input {
      height: 30px;
    }

    textarea {
      height: 100px;
    }

    button {
      background: ${props => props.theme.accentColor};
      border: 0;
      cursor: pointer;
      padding: 10px;
      font-size: 1.5rem;
    }
  }
`;

export default EventFormStyles;
