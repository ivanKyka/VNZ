import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";
import {styles} from "../consts";
import {Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <Logo to={'/'}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_the_Ukrainian_Armed_Forces.svg/1200px-Emblem_of_the_Ukrainian_Armed_Forces.svg.png" alt="Збройні сили. Лого"/>
                        </Logo>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-between w-100">
                            <HeaderNavItem to="/news" activeClassName="active">Новини</HeaderNavItem>
                            <HeaderNavItem to="/info" activeClassName="active">Абітурієнтам та батькам</HeaderNavItem>
                            <HeaderNavItem to="/vvnz" activeClassName="active">ВВНЗ</HeaderNavItem>
                            <HeaderNavItem to="/college" activeClassName="active">Коледжі</HeaderNavItem>
                            <HeaderNavItem to="/lyceum" activeClassName="active">Ліцеї</HeaderNavItem>
                            <HeaderNavItem to="/question" activeClassName="active">Задати запитання</HeaderNavItem>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
    )
}

export default Header;

const Container = styled.div`
  nav {
    background: #151414;
  }
  .navbar-toggler-icon {
    filter: invert();
  }
`;

const Logo = styled(Link)`
  padding: 3px;
  grid-row: 1 / 2;
  grid-column: 1;

  img {
    max-height: 45px;
    object-fit: contain;
  }
`;

const HeaderNavItem = styled(NavLink)`
  color: white;
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;
  height: 2rem;
  
  &:hover {
      color: rgb(44,166,39);
  }

  &.active {
    text-decoration: underline;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
//https://colorscheme.ru/#2A11TsPeew0w0