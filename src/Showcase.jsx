import styled from "styled-components";
import bg from "./assets/bg.png";
import logo from "./assets/recrowdly-logo.png";
import Gif from "./assets/mainGif.gif";
import insikt from "./assets/insikt.png";
import craft from "./assets/craft.png";
import roost from "./assets/roost.png";
import farmwise from "./assets/farmwise.png";
import fidare from "./assets/fidare.png";
import cape from "./assets/cape.png";

const Showcase = () => {
    return ( 
        <Frame>
           <nav className="text-white flex items-center">
            <div className="logo-name flex space-x-4">
                <img src={logo} alt="logo" />
                <h1 className="text-3xl">Recrowdly</h1>
            </div>

            <ul className="nav-list flex items-center space-x-10 ml-96">
                <li>Home</li>
                <li>Pricing</li>
                <li>Portfolio</li>
                <li>Review</li>
            </ul>

            <button className="bg-white text-black px-5 ml-16 py-1 rounded-2xl">Book a Meeting</button>
           </nav>

           <main className="flex text-white mt-40 space-x-32 items-center">
            <div className="showcase-text">
                <h1 className="text-6xl font-bold">Light. Camera. 
                Reaction!</h1>
                <p className="text-justify font-normal">We make animated videos for businesses to tell your product or service story, educate more customers and drive more revenue. With 2D and 3D animation, design and copywriting, we make your story and value proposition easy to remember.</p>

                <div className="sub-section flex items-center h-16 justify-between mt-14 bg-white text-black pl-7 rounded-3xl">
                    <input type="email" placeholder="Enter your email address" className="text-black outline-none w-44"/>
                    <button className="bg-black text-white h-16 w-36 rounded-3xl">Subscribe</button>
                </div>
            </div>
            <div className="gify">
                <img src={Gif} alt="main-gify"className="rounded-md ml-5" />
            </div>
           </main>

           <div className="brands flex items-center mt-44 space-x-16">
            <img src={insikt} alt="brand-logo" />
            <img src={craft} alt="brand-logo" />
            <img src={roost} alt="brand-logo" />
            <img src={farmwise} alt="brand-logo" />
            <img src={fidare} alt="brand-logo" />
            <img src={cape} alt="brand-logo" />
           </div>
        </Frame>
     );
}

const Frame = styled.div`
    width: cover;
    background-color: #000;
    height: 1024px;
    background-image: url(${bg});
    filter: brightness(110%);
    opacity: .86;
    padding-left: 5.75rem;
    padding-right: 6.25rem;
    padding-top: 2rem;
    padding-bottom: 3.8rem;

    ul>li:hover {
        cursor: pointer;
        font-weight: 600;
    }

    .showcase-text  h1 {
        width: 442px;
        line-height: 1.5;
    }

    .showcase-text p {
        width: 472px;
    }

    .showcase-text .sub-section {
        width: 434px;
        // height: 60px;
    }

    .gify img {
        height: 430px;
        width: 609px;
    }
`
 
export default Showcase;