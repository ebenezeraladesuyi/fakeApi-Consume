// import React from 'react'

import styled from "styled-components";

const Header = () => {
  return (
    <Head>
        <HeadHolder>
            <Logo>LOGO</Logo>
        </HeadHolder>
    </Head>
  )
}

export default Header;

const Head = styled.section`
width: 100%;
height: 70px;
background-color: orange;
display: flex;
justify-content: center;
align-items: center;
`;

const HeadHolder = styled.div`
width: 90%;
color: white;
`;

const Logo = styled.h1`
font-size: 30px;
font-weight: 600;
`;