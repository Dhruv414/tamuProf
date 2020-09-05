import React, { useState } from "react";
import './topNav.css'
import { SearchOutlined, HomeOutlined } from "@ant-design/icons";


function TopNav(props) {
  
  
  
  return (
    // <Navbar className="navbar" full="false" type="dark" theme="dark" expand="md">

    //   <NavbarBrand href="home"><HomeOutlined/></NavbarBrand>
    //   <NavbarToggler onClick={toggleNavbar} />

    //     <Nav navbar className="navbar-search">
    //       <InputGroup size="sm" seamless>
    //         <InputGroupAddon type="prepend">
    //           <InputGroupText>
    //             <SearchOutlined />
    //           </InputGroupText>
    //         </InputGroupAddon>
    //         <FormInput className="border-0" placeholder="Search..."  onChange={props.handleChange}/>
    //       </InputGroup>
    //     </Nav>

    // </Navbar>
    <div class="topnav">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <a class="active" href="/home">
        <HomeOutlined/>
      </a>
      <div class="search-container">
        <form action="/course">
          <input type="text" placeholder="Search Course" name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  );
}

export default TopNav;
