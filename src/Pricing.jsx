import styled from "styled-components";
import bg from "./assets/bg.png";
import info from "./assets/InfoIcon.png"
import success from "./assets/success.png"


const Pricing = () => {
    return ( 
        <Frame>
            <h2 className="text-white pt-10 font-bold text-3xl">Pricing Model</h2>

            <main className="prices flex space-x-10 items-end mt-12">
               <div className="w-80 h-96 bg-white rounded-lg flex flex-col p-5">
                    <img src={info} alt="icon" className="ml-auto" />
                    <h2 className="text-2xl font-bold mr-auto">30 Seconds</h2>
                    <div className="bg-black mt-3" style={{
                        height: '2px',
                        width: '280px'
                    }}></div>

                    <div className="flex space-x-3 mt-4">
                        <img src={success} alt="icon" />
                        <p>Commercial video (2D)</p>
                    </div>

                    <div className="flex space-x-8 mr-5 mt-7">
                        <h2 className="text-2xl font-bold mr-auto">$2,000</h2>
                        <button className="h-8 w-24 bg-black text-white text-base font-thin rounded-2xl">Pay now</button>
                    </div>
                    <div className="bg-black mt-6" style={{
                        height: '2px',
                        width: '280px'
                    }}></div>

                    <div className="flex space-x-3 mt-6">
                        <img src={success} alt="icon" />
                        <p>Commercial video (3D)</p>
                    </div>

                    <div className="flex space-x-8 mr-5 mt-7">
                        <h2 className="text-2xl font-bold mr-auto">$2,000</h2>
                        <button className="h-8 w-24 bg-black text-white text-base font-thin rounded-2xl">Pay now</button>
                    </div>
               </div>


               <div className="w-80 bg-white rounded-lg flex flex-col p-5" style={{height: '430px'}}>
                    <img src={info} alt="icon" className="ml-auto" />
                    <h2 className="text-2xl font-bold mr-auto">1 Minute</h2>
                    <div className=" mt-3" style={{
                        height: '2px',
                        width: '280px'
                    }}></div>

                    <div className="flex space-x-3 mt-4 items-center">
                        <img src={success} alt="icon" />
                        <p className="text-left">Detailed explainer video with 
                            2D asset on decided color pallette
                            (Extra palettes incur additonal costs.)
                        </p>
                    </div>

                    <div className="flex space-x-8 mr-5 mt-7">
                        <h2 className="text-2xl font-bold mr-auto">$3,000</h2>
                        <button className="h-8 w-24 bg-black text-white text-base font-thin rounded-2xl">Pay now</button>
                    </div>
                

                    <div className="flex space-x-3 mt-6 items-center">
                        <img src={success} alt="icon" />
                        <p className="text-left">Explainer video $3,500 with 3D 
                            asset on color decided palette</p>
                    </div>

                    <div className="flex space-x-8 mr-5 mt-7">
                        <h2 className="text-2xl font-bold mr-auto">$3,500</h2>
                        <button className="h-8 w-24 bg-black text-white text-base font-thin rounded-2xl">Pay now</button>
                    </div>
               </div>

               <div className="w-80 bg-white rounded-lg flex flex-col p-5" style={{height: '474px'}}>
                    <img src={info} alt="icon" className="ml-auto" />
                    <h2 className="text-2xl font-bold mr-auto text-left w-36">1 and a half to 
                        2 minutes </h2>

                    <div className="bg-black mt-6" style={{
                    height: '2px',
                    width: '280px'
                    }}></div>

                    <div className="flex space-x-3 mt-4 items-center">
                        <img src={success} alt="icon" />
                        <p className="text-left">Detailed explainer video 
                        with detailed asset</p>
                    </div>

                    <div className="flex space-x-8 mr-5 mt-52">
                        <h2 className="text-2xl font-bold mr-auto">$2,000</h2>
                        <button className="h-8 w-24 bg-black text-white text-base font-thin rounded-2xl">Pay now</button>
                    </div>
               </div>
            </main>

            <div className="addons bg-white text-black mt-12 rounded-lg pl-14 pr-14 pt-5 text-left" style={{height: '164px', width: '1043px'}}>
                <h3 className="mr-auto text-2xl font-bold mb-3">Add-on</h3>

                <div className="flex space-x-10">
                    <ul>
                        <li className="mb-2">Live actor or actress: $350</li>
                        <li>Copywriting and story direction: $500</li>
                    </ul>

                    <ul>
                        <li className="mb-2">Asset creation 2D or 3D: $45/hour</li>
                        <li>Each video includes two sets of revisions</li>
                    </ul>

                    <ul>
                        <li>Additional revisions billed at $45/hr</li>
                    </ul>
                </div>
            </div>
        </Frame>
     );
}

const Frame = styled.div`
    width: cover;
    background-color: #000;
    height: 877px;
    background-image: url(${bg});
    filter: brightness(110%);
    opacity: .86;
    padding-left: 190px;
    padding-right: 187px;
    padding-bottom: 58px;
    text-align: center;

`

 
export default Pricing;