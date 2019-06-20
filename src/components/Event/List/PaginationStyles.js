import styled from 'styled-components';

const EventPaginationStyle = styled.ul`
  display: flex;
  justify-content: center;

  li.events-pagination__item {
    margin: 1rem;
    padding: 4px 10px;
    background: ${props => props.theme.accentColor};
    color: black;
    cursor: pointer;
  }
`;

export default EventPaginationStyle;
