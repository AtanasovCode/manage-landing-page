import styled from "styled-components";
import logo from '../assets/images/logo.svg';

const Nav = () => {
    return (
        <Container>
            <Logo 
                src={logo}
                alt="logo"
            />

            <Links>
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Logo = styled.img`
    height: 20px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Link = styled.div`
    font-size: 15px;
    margin: 0 22px;
`;

const GetStarted = styled.input`
    font-size: 15px;
    padding: 12px 35px;
    background-color: orange;
    color: #fff;
    border-radius: 14px;
`;