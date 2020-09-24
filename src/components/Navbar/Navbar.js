import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Button} from '../../globalStyles'
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn
} from './Navbar.elements'



const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
          <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        VALEY
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu click={click} onClick={handleClick}>
                        <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/product">
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            <NavBtnLink to="/sign-up">
                                <Button>SIGN UP</Button>
                            </NavBtnLink>
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
