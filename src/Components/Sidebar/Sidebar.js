import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { context } from '../../Context/Context'

function Sidebar() {

    const [expand, setExpand] = useState(false)
    const { onSent, previousPrompt, setRecentPrompt ,newChat} = useContext(context)

    const loadPrompt =async (prompt) =>{

        setRecentPrompt(prompt)

        await onSent(prompt)
    }

    const extended = () => {

        setExpand(prev => !prev)
    
    }



    return (
        <div className="sidebar" id='sidebarSlide'>
            <div className="sidebar-top">
                <div onClick={() => extended()} className="hamburger">
                    <i class="fa-solid fa-bars fa-2x"></i>
                </div>



                <div onClick={()=>newChat()} className="newchat">
                    <p className='text-center'><i class="fa-regular fa-plus fa-lg"></i> {expand ? "New chat" : null}  </p>
                </div>

                {expand ? <div className="recent">
                    <p className="recent-input">Recent</p>
                    {previousPrompt.map((item, index) => {
                        return (
                            <p onClick={()=>loadPrompt(item)} className='recent-icon'><i class="fa-regular fa-message"></i>{item.slice(0, 18)}...</p>
                        )

                    })}

                </div> : null}



            </div>
            <div className='sidebar-bottom'>
                <div className="bottom-item">

                    <span><p><i class="fa-regular fa-circle-question"></i>  {expand ? "Help" : null}</p></span>
                </div>

                <div className="bottom-item">
                    <span><p><i class="fa-solid fa-clock-rotate-left"></i> {expand ? "Activity" : null}</p></span>
                </div>

                <div className="bottom-item">
                    <span><p><i class="fa-solid fa-gear"></i> {expand ? "settings" : null}</p></span>
                </div>


                {expand ? <div className='sidebar-address mt-3'>
                    <p>Kerala,India</p>
                    <p>From your IP address.Update location</p>
                </div>
                    : null}



            </div>






        </div>
    )
}

export default Sidebar