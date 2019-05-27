import styled from 'styled-components';

const EventItemStyle = styled.div`
  border: 1px solid ${props => props.theme.accentColor};
  padding: 1rem;
  .event-item__title {
    font-size: 1.7rem;
    margin: 0;
  }

  .event-item__description {
    background: ${props => props.theme.bgLight};
    padding: 10px;
  }
`;

export default EventItemStyle;
