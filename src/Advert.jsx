import styled from "styled-components";
import twoD from "./assets/2dAnim.png";
import threeD from "./assets/3dAnim.png";
import Media from "./assets/MixedMedia.png";
import ad1 from "./assets/advert1.png";
import ad2 from "./assets/advert2.png";

const Advert = () => {
    return ( 
        <Frame>
           <header className=" flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center lh-1/5 mb-2">Recrowdly creates 2D and 3D animations with unique design and copywriting</h2>
            <p className="text-center text-sm">Our services cover the entire garnut needed to get your business’s value proposition shared, reshared, understood, and re-reshared.</p>
           </header>

           <div className="advert-showcase flex space-x-10">
                <div className="flex flex-col w-80 mt-16">
                    <img src={twoD} alt="2d animation" />
                    <div className="box flex flex-col items-center text-center pl-8 pr-8 pt-1 pb-1 h-36 rounded-t-none rounded-lg bg-white shadow-lg -mt-8">
                        <h3 className="font-bold mt-2 mb-2 text-lg">2D Animation</h3>
                        <p className="w-64">Go classic with a lively 2D animated video that brings your idea to life with vivid colors and motion. </p>
                    </div>
                </div>

                <div className="flex flex-col w-80 mt-16">
                    <img src={threeD} alt="2d animation" />
                    <div className="box flex flex-col items-center text-center pl-8 pr-8 pt-1 pb-1 h-36 rounded-t-none rounded-lg bg-white shadow-lg -mt-8">
                        <h3 className="font-bold mt-2 mb-2 text-lg">3D Animation</h3>
                        <p>3D models interact with reality to lend your concept new dimensions. </p>
                    </div>
                </div>

                <div className="flex flex-col w-80 mt-16">
                    <img src={Media} alt="2d animation" />
                    <div className="box flex flex-col items-center text-center pl-8 pr-8 pt-1 pb-1 h-36 rounded-t-none rounded-lg bg-white shadow-lg -mt-8">
                        <h3 className="font-bold mt-2 mb-2 text-lg">Mixed Media</h3>
                        <p>Get the best of both 2D and 3D worlds to really bring the most out of your concept.</p>
                    </div>
                </div>
           </div>

           <section className="display mt-20">
                <div className="flex space-x-36">
                    <div className="descr">
                        <h2 className="font-bold text-3xl">Make a long story short</h2>
                        <p className="mt-5 text-['#6D6262']">Every company has a unique story to tell. Most try explaining to their customers what they do - but even then it gets lost in the noise because because there is so much content available and it’s all the same.
                        Recrowdly tells your story in a way that cant be forgotten.</p>
                    </div>
                    <img src={ad1} alt="advert pics" />
                </div>

                <div className="flex space-x-36 mt-32">
                    <img src={ad2} alt="advert pics" />
                    <div className="descr">
                        <h2 className="font-bold text-3xl w-80">A video is worth a thousand words</h2>
                        <p className="mt-5 text-['#6D6262']">Explaining what you do isn’t always easy. Most internet SaaS and E-commerce websites struggle with relaying their value proposition effectively - we think outside the box to get your message acroos to your audience.</p>
                    </div>
                </div>
           </section>
        </Frame>
     );
}


const Frame = styled.div`
    height: 1301px;
    padding: 60px 188px 133px 183px;
    background: #fcfcfc;

    header {
        h2 {
            width: 630px;
        }
        p {
            width: 600px;
        }
    }

    section .descr p {
        width: 470px;
    }
`
 
export default Advert;