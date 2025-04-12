/* eslint-disable react/no-danger-with-children */
// import React from 'react'
import { useContext } from "react"
import assets from "../../assets/assets"
import "./Main.css"
import { Context } from "../../context/Context"
const Main = () => {

    // eslint-disable-next-line no-unused-vars
    const {input, setInput,recentPrompt, setRecentPrompt,prevPrompt, setPrevPrompt,showResult, setShowResult,loading, setLoading,resultData, setResultData,onSent,newChat}=useContext(Context);

    
    return (
        <div className="main">
            <div onClick={()=>newChat()} className="nav">
                <p>ChatWithAI</p>
                <img src={assets.user} alt="" />
            </div>
            <div className="main-content">

                {!showResult
                ?<>
                    <div className="greet">
                        <p><span>Hello,Dev.</span></p>
                        <p>How can I help you</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest the beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize the concept: urban planning</p>
                            <img src={assets.bulb} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team building activities for our work restoration</p>
                            <img src={assets.message} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code} alt="" />
                        </div>
                    </div>
                </>
                :<div className="result">
                    <div className="result-title">
                        <img src={assets.user} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini} alt="" />
                        {loading
                        ?<div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter') onSent()}} value={input} type="text" placeholder="Enter the prompt here"/>
                        <div>
                            <img src={assets.addImage} alt="" />
                            <img src={assets.mic} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium, perferendis inventore nam enim, non vitae assumenda ducimus maxime laborum atque aliquam nulla aperiam cum voluptatem! Unde officiis possimus doloribus!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
