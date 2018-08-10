import React from 'react';
import Logo from '../Logo'
import styled from 'styled-components';
import { Wrapper } from '../Layout';

const HeaderWrapper = styled.header`
    padding: 10px 0;
    margin-bottom: 40px;
    background-color: white;
`

const Header = () => (
    <HeaderWrapper>
        <Wrapper>
            <Logo width="140" />
        </Wrapper>
    </HeaderWrapper>
)


export default Header;
