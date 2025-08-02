import { useState } from "react"
import styled from "styled-components"

export const Nav = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <Container>
      <NavBar>
        <LogoLink href="#Top">
          <Logo src="shift_towards_good.png" />
        </LogoLink>
        <DesktopNav>
          <NavLink href="#WhoWeAre">Who We Are</NavLink>
          <NavLink href="#HowYouCanHelp">
            How You
            <br />
            Can Help
          </NavLink>
          <NavLink href="#HowWeMatch">
            How We Match
            <br />
            Donations
          </NavLink>
        </DesktopNav>
        <EndNav>
          <DonateButton
            onClick={() =>
              (window.location.href =
                "https://www.gofundme.com/f/shift-towards-good-for-medical-aid-for-palestinians")
            }
          >
            DONATE
          </DonateButton>
          {showNav ? (
            <HamburgerButton
              style={{ rotate: "45deg" }}
              onClick={() => setShowNav((prev) => !prev)}
            >
              <Burger viewBox="0 0 100 100" width="40" height="40">
                <rect y="0" width="10" height="100" x="45"></rect>
                <rect y="45" width="100" height="10"></rect>
              </Burger>
            </HamburgerButton>
          ) : (
            <HamburgerButton onClick={() => setShowNav((prev) => !prev)}>
              <Burger viewBox="0 0 100 80" width="40" height="40">
                <rect y="5" width="100" height="10"></rect>
                <rect y="35" width="100" height="10"></rect>
                <rect y="65" width="100" height="10"></rect>
              </Burger>
            </HamburgerButton>
          )}
        </EndNav>
      </NavBar>

      <MobileNav
        style={{
          right: showNav ? "0" : "-100vw",
        }}
      >
        <MobileNavLink href="#WhoWeAre" onClick={() => setShowNav(false)}>
          Who We Are
        </MobileNavLink>
        <MobileNavLink href="#HowYouCanHelp" onClick={() => setShowNav(false)}>
          How You Can Help
        </MobileNavLink>
        <MobileNavLink href="#HowWeMatch" onClick={() => setShowNav(false)}>
          How We Match Donations
        </MobileNavLink>
      </MobileNav>
    </Container>
  )
}

const MobileNavLink = styled.a`
  font-size: 24px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  padding-bottom: 16px;
  padding-top: 16px;
  border-top: 1px solid #4e4e4e;
  padding-left: 16px;
  &:last-child {
    border-bottom: 1px solid #4e4e4e;
  }
`

const MobileNav = styled.div`
  width: 100vw;
  right: 0;
  height: 100svh;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 90px;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (orientation: landscape) {
    display: none;
  }
`

const HamburgerButton = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (orientation: landscape) {
    display: none;
  }
`

const EndNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Burger = styled.svg`
  width: 40px;
  height: 40px;
`

const DesktopNav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (orientation: portrait) {
    display: none;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 150px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (orientation: portrait) {
    height: 90px;
  }
`

const NavBar = styled.div`
  width: 60%;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  gap: 32px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  @media (orientation: portrait) {
    width: 100vw;
    border-radius: 0;
  }
`

const LogoLink = styled.a`
  height: 100%;
`

const Logo = styled.img`
  height: 100%;
  padding: 16px;
  cursor: pointer;
  margin-left: 8px;
`

const NavLink = styled.a`
  font-size: 1.3vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: black;
  text-decoration: none;

  &:hover {
    /* background-color: #eee; */
    text-decoration: underline;
  }
`

const DonateButton = styled.button`
  border: none;
  background-color: #e62a2a;
  color: white;
  height: 100%;
  padding: 0 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 24px;
  font-weight: 600;

  &:hover {
    background-color: #d32626;
  }

  @media (orientation: portrait) {
    padding: 0 20px;
  }
`
