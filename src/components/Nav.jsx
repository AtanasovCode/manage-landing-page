import styled from "styled-components";
import logo from '../assets/images/logo.svg';
import iconClose from '../assets/images/icon-close.svg';
import menu from '../assets/images/icon-hamburger.svg';

const Nav = ({
    navOpen,
    setNavOpen,
}) => {

    const getIconSrc = () => {
        return navOpen === true ? iconClose : menu;
    }

    const toggleMenu = () => {
        setNavOpen(!navOpen);
    }

    return (
        <Container>

            <MenuIcon
                src={getIconSrc()}
                alt="menu icon"
                onClick={toggleMenu}
            />

            <Logo
                src={logo}
                alt="logo"
            />

            <Links active={navOpen}>
                <Link>Pricing</Link>
                <Link>Product</Link>
                <Link>About Us</Link>
                <Link>Careers</Link>
                <Link>Community</Link>
            </Links>

            <GetStarted
                type="button"
                value="Get Started"
            />
        </Container>
    );
}


export default Nav;


const Container = styled.div`
    padding: 45px 65px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 10;

    @media (max-width: 800px) {
        padding: 25px;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 450px) {
        padding: 25px 20px;
    }
`;

const MenuIcon = styled.img`
    display: none;

    @media (max-width: 800px) {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;

const Logo = styled.img`
    height: 20px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;

    @media (max-width: 800px) {

        display: none;
        flex-direction: column;

        ${props => props.active && `
            min-width: 300px;
            display: flex;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            padding: 25px;
            background-color: #fff;
        `}
    }
`;

const Link = styled.div`
    margin: 0 22px;

    @media (max-width: 800px) {
        margin: 10px 0;
    }
`;

const GetStarted = styled.input`
    padding: 12px 35px;
    background-color: ${props => props.theme.brightRed};
    color: #fff;
    border-radius: 20px;
    transition: all .3s ease-in;

    &:hover {
        cursor: pointer;
        box-shadow: 5px 5px 5px 0 rgba(246, 134, 106, .4);
        background-color: hsl(12, 88%, 69%);
    }

    @media (max-width: 800px) {
        display: none;
    }
`;