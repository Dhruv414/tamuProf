import React, { useState } from "react";
import { SearchOutlined, HomeOutlined} from "@ant-design/icons";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
} from "shards-react";


function TopNav(props) {
  const [collapse, setCollapse] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setdropdownOpen(!dropdownOpen);
  };

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };

  return (
    <Navbar className="navbar" full="false" type="dark" theme="dark" expand="md">
      
      <NavbarBrand href="home"><HomeOutlined/></NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      
        

        <Nav navbar className="navbar-search">
          <InputGroup size="sm" seamless>
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <SearchOutlined />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput className="border-0" placeholder="Search..." onSubmit={props.handleNav}/>
          </InputGroup>
        </Nav>
      
    </Navbar>
  );
}

export default TopNav;
