import logo from "./assets/recrowdly-logo.png";
import styled from "styled-components";
const Footnote = () => {
    return ( 
        <Frame>

            <hr className="pb-10" />
          <nav className="text-white flex items-center mb-10">
            <div className="logo-name flex space-x-4">
                <img src={logo} alt="logo" />
                <h1 className="text-3xl">Recrowdly</h1>
            </div>

            <ul className="nav-list flex items-center space-x-10 ml-64">
                <li>Home</li>
                <li>Pricing</li>
                <li>Portfolio</li>
                <li>Review</li>
            </ul>

            <h3 className="text-black ml-7 font-bold">A Punch group company</h3>

           </nav>
        </Frame>
     );
}

const Frame = styled.div`
    height: 100px;
    background: #575757;
    padding-left: 150px;
    padding-right: 100px;
`
 
export default Footnote;