
import Header from './Header';
import {AiOutlineApartment } from "react-icons/ai";

// import { IconName } from "react-icons/ai";
import {AiTwotoneRest } from "react-icons/ai";

export default function Body() {
    return (
        <div id='body1'>
            <Header />
            <div id='body1_1'>
                <p >Name<span>*</span></p>
                <p>Business Development Executive</p>
                <hr id='bodyhr1'></hr>
                {/* <br></br> */}
                <p style={{ color: 'blue' }}><AiOutlineApartment/>Interview Process Rounds</p>
                <div id='smallbox'>
                    {/* <div id='smallbox1'>Level</div>
                    <div id='smallbox2'>
                    </div>
                    <div id='smallbox3'></div>
                    <div id='smallbox4'></div> */}
                    <div id='body2'>

                        <div id='body2_1'>
                            <div id='body2_1_1' style={{color:'white'}}>1</div>
                            <div id='body2_1_2'><AiTwotoneRest/></div>


                        </div>
                        <div id='body2_2'>Level<span>*</span><p>1</p>
                            <hr id='tablehr1'></hr>
                        </div>
                        <div id='body2_3'>Name<span>*</span><p>Telephonic Round</p>
                            <hr id='tablehr2'></hr>
                        </div>
                        <div id='body2_4'>Select Interview<span>*</span><p>GIRISHPRASAD</p>
                            <hr id='tablehr3' ></hr>
                        </div>
                        <div id='body2_5'>
                        <div id='body2_5_1' style={{color:'white'}}>2</div>
                        <div id='body2_5_2'><AiTwotoneRest/></div>

                             </div>
                        <div id='body2_6'>Level<span>*</span><p>1</p>
                            <hr id='tablehr1'></hr></div>
                        <div id='body2_7'>Name<span>*</span><p>Telephonic Round</p>
                            <hr id='tablehr2'></hr></div>
                        <div id='body2_8'>Select Interview<span>*</span><p>GIRISHPRASAD</p>
                            <hr id='tablehr3' ></hr> </div>

                    </div>
                </div>


                <button id='add_new'>ADD NEW</button>
                
                <button id='update'>Update</button>
                
                <button id='cancel'>Cancel</button>
               
            </div>
        </div>
    )
}