import styled from "styled-components";
import dressed from "./assets/dressed.png"
import cloud from "./assets/cloud.png"
import drawing from "./assets/drawing.png"

const Portfolio = () => {
    return ( 
        <Con>
            <header className="text-center text-black">
                <h2 className="pt-10 font-bold text-3xl">Portfolio</h2>
                <p className="text-center pt-2 text-sm">We’ve created hundreds of videos for satisfied customers.Here are just a few</p>
            </header>

            <main className="mt-20 flex flex-col pl-48 pr-48">
                <div className="flex space-x-40 items-center">
                    <img src={dressed} alt="img" />
                    <div>
                        <h2 className="font-bold text-3xl mb-4">Dressed to thrill</h2>
                        <p style={{width: '472px'}}>We worked with Pantrei to create a video that captured the excitement and engagement of their brand.
                       </p>
                       <p style={{width: '442px'}} className='mt-4'>The result was a 46% increase in monthly website visitors and a 31% increase in conversion from July to september.</p>
                        <h4 className="mt-2 font-bold">Pantrei</h4>
                    </div>
                </div>

                <div className="flex space-x-32 items-center mt-24">
                    <div>
                        <h2 className="font-bold text-3xl mb-4">Software on cloud nine</h2>
                        <p style={{width: '472px'}}>Recloud Technologies worked with us to drive brand messaging, conversions, and marketplace participation through video.
                       </p>
                       <p style={{width: '442px'}} className='mt-4'>The rest was massive success of their digital experience.</p>
                        <h4 className="mt-2 font-bold">RedCloud</h4>
                    </div>
                    <img src={cloud} alt="img" />
                </div>

                <div className="flex space-x-40 items-center mt-24">
                <img src={drawing} alt="img" />
                    <div>
                        <h2 className="font-bold text-3xl mb-4 w-80 leading-tight">Straight from the drawing board</h2>
                        <p style={{width: '472px'}}>Punch Digital Agency worked with our animation studio to take their UI/UX and graphics design work, and bring them into video.
                       </p>
                       <p style={{width: '442px'}} className='mt-4'>Our “Good design is good business” campaign drove a 2X Increase in cold email marketing conversions.</p>
                        <h4 className="mt-2 font-bold">Punch</h4>
                    </div>
                </div>
            </main>
        </Con>
     );
}

const Con = styled.div`
    height: 1326px;
    background: #fff;

`
 
export default Portfolio;