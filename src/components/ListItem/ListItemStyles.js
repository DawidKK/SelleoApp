import styled from 'styled-components';

const ListItemStyles = styled.li`
  background: ${props => props.theme.bgLight};
  box-shadow: ${props => props.theme.bs};
  color: ${props => props.theme.white};
  padding: 1rem 3rem;;
  font-weight: 300;
  font-size: 1em;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

export default ListItemStyles;
