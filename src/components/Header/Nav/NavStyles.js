import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  font-size: 2rem;
  list-style: none;
  flex-wrap: wrap;
  background: ${props => props.theme.bgLight};
  box-shadow: ${props => props.theme.bs};

  .nav-styles__item {
    flex: 1;
    a {
      padding: 1rem 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1em;
      cursor: pointer;
      color: ${props => props.theme.white};
    }
  }
`;

export default NavStyles;
