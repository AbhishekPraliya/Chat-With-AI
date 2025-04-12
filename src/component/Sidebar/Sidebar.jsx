import { useContext, useState } from 'react'
import assets from "../../assets/assets.js"
import "./Sidebar.css"
import { Context } from '../../context/Context.jsx'

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context)

    const loadPrompt=(prompt)=>{
        setRecentPrompt(prompt);
        onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img className="menu" onClick={()=>setExtended(prev=>!prev)} src={assets.menu} alt="img" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus} alt="" />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended
                ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item,index)=>{
                            return(
                                <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                                    <img src={assets.message} alt="" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                    </div>
                :null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting} alt="" />
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
