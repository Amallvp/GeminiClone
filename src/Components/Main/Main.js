import React, { useContext } from 'react'
import './Main.css'
import DrawIcon from '@mui/icons-material/Draw';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SendIcon from '@mui/icons-material/Send';
import { context } from '../../Context/Context';

function Main() {


    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(context)


    return (



        <div className="main">
            <div className="nav">

                <div className="nav-name">
                    <p>Gemini</p>
                </div>
                <di className="nav-img">
                    <img className='nav-img' src="https://i.postimg.cc/3wgcBjc7/profile.jpg" alt="" />
                </di>


            </div>

            <div className="main-container">


                {!showResult ? <>

                    <div className="main-name">
                        <h1 className='name'>Hello Amal</h1>
                        <h1 className='name1'>How can I help you today ?</h1>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <p><span>provide question for to help prepare an interview</span></p>
                            <DrawIcon className='icon'></DrawIcon>
                        </div>

                        <div className="card">
                            <p><span>provide question for to help prepare an interview</span></p>
                            <LightbulbCircleIcon className='icon'></LightbulbCircleIcon>
                        </div>
                        <div className="card">
                            <p><span>provide question for to help prepare an interview</span></p>
                            <DrawIcon className='icon'></DrawIcon>
                        </div>
                        <div className="card">
                            <p><span>provide question for to help prepare an interview</span></p>
                            <LightbulbCircleIcon className='icon'></LightbulbCircleIcon>
                        </div>
                    </div> </>

                    : <>
                        <div className="result">
                            <div className="result-title">

                                <img className='result-img' src="https://i.postimg.cc/3wgcBjc7/profile.jpg" alt="" />
                                <p>{recentPrompt}</p>
                                </div>
                                <div className="result-data">
                                    <img className='result-icon mb-3' src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="" />
                                    {loading ?
                                    
                                <div className='loader'>

                                <hr />
                                <hr />
                                <hr />
                                </div>
                                :   <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                    </div></div>

                    </>}


                <div className="main-bottom">

                    <div className="searchbox">

                        <input className="input" onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder='Enter a prompt here ' />

                        <AddPhotoAlternateIcon className='btm-icon'></AddPhotoAlternateIcon>
                        <MicNoneIcon className='btm-icon'></MicNoneIcon>
                    {input ? <SendIcon className='btm-icon' onClick={() => onSent()} ></SendIcon> : " " }   
                    </div>
                    <p className="bottom-info mt-3">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>


            </div>


        </div>


    )
}

export default Main