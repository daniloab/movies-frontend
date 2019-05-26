import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdClose, MdSearch } from 'react-icons/md'

import global from '../../helpers/Global'

const fadein = keyframes`{
    from { opacity: 0; }
    to   { opacity: 1; }
}`

const fadeout = keyframes`
    from { opacity: 1; }
    to   { opacity: 0; display: none;}
`

const Title = styled.a``
const RightNavbar = styled.div``
const List = styled.ul``
const Item = styled.li``

const LeftNavBar = styled.div`
    color: white;
    font-weight: 600;
    font-size: 1.8rem;
    height: 5rem;
    display: flex;

    svg {
        margin-right: .5rem;
    }
`

const HeaderWrapper = styled.header`
    top: 0;
    right: 0;
    left: 0;
    position: fixed;    
    max-height: 5rem;
    z-index: 1030;
    padding: 1.5rem 1rem;
    background: ${global.style.primaryColor};
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

    ${Title} {        
        color: white;
        margin: 0;
        text-decoration: none;

        &:hover {
            cursor: pointer;
        }
    }

    ${RightNavbar} {
        display: flex;
        align-items: center;

        li:hover{
            cursor: pointer;
            
            svg{
                cursor: pointer;
                transform: scale(1.5);
            }
        }

        
    }

    ${List} {
        display: flex;
        padding-left: 0;
        margin: 0;
        list-style: none;
        
        ${Item} {
            padding: 1rem;

            svg {
                color: white;
                font-size: 2rem;
                cursor: default;
                transition: all .2s ease-in-out;
            }
            
            &:hover {
                cursor: pointer;
                color: #242424d1;
                transition: color 0.3s;
            }
        }
    }
`;

const StyledSearchBox = styled.div`
    display: ${props => props.change ? 'flex' : 'none'};
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    background: #fff;
    z-index: 12;
    border-radius: 0;
    animation: ${props => props.change && `${fadein} 0.5s`}
    
    &:focus-within {
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        box-shadow: 0 0 0 0.2rem #f88a1a96; 
    }
`

const SearchBox = ({ children, change }) => (
    <StyledSearchBox
        change={change}
    >
        {children}
    </StyledSearchBox>
)

const SearchInput = styled.input`
    background: transparent;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    font-family: Montserrat,sans-serif !important;
    &:focus {
        outline: none;           
    }
`

const BtnClose = styled.button`
    position: absolute;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    color: #999;
`

const Header = props => {

    const [changeHeader, setChangeHeader] = useState(false)

    const handleChangeHeader = () => setChangeHeader(!changeHeader)
    const handleChange = () => console.log('handleChangeInput')
    const handleKeyUp = () => console.log('handleKeyUpInput')

    return (
        <>
            <HeaderWrapper>
                <StyledSearchBox change={changeHeader}>
                    <BtnClose onClick={handleChangeHeader}>
                        <MdClose />
                    </BtnClose>
                    <SearchInput
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        type="text" placeholder="tell me the name of the movie and let the work with me..." />
                </StyledSearchBox>
                <LeftNavBar>
                    <Title href="/">{global.appName}</Title>
                </LeftNavBar>
                <RightNavbar>
                    <List>
                        <Item>
                            <MdSearch />
                        </Item>
                    </List>
                </RightNavbar>
            </HeaderWrapper>
        </>
    )
}

export default Header;
