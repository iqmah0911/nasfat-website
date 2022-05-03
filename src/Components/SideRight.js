import React from 'react'
import './SideRight.css'
import { useState } from 'react'



export default function SideRight(){
  const[clicked, setClicked]=useState(true)
  const myhandle = () => {   // THESE HERE TOO
    setClicked(!clicked);
  };
  return (
    
    <div className='side-right'>
      <div className='upper'>
      

      <div className='left-header'>
      
      <i className={clicked ? 'fa fa-bars' : 'fa fa-times'} onClick={myhandle}/>

        
            </div>
            <div className='right-header'>
              <div className='img-border'>
                 <img alt="img" className="img-circle avatar" width="40" src="http://members.nasfat.org/assets/img/profile.png"></img>
                 </div>
                <p>Iqmah</p>
                <i className="fa fa-caret-down" aria-hidden="true"></i>  
        </div>
      </div>
      
      <div className='button'>
        <div className='sub-header'>
            <p>Welcome iqmahoseni@gmail.com!</p>
            <div className='inner-content'>
              <li><a href=''>Home / </a></li>
              <span> Dashboard</span>
            </div>
            

        </div>
        <div className='row'>
                <div className='cards'>
                  
                     <div className='inner-box'>
                     <div className="right-inner">
                       <h4>NEW MEMBERS THIS MONTH</h4>
                       <div>213</div>
                       </div>
                       <i className="fa fa-user-plus fa-5x"></i>
                     </div>
                     
                     
                    
                </div>
                <div className='cards'>
                     <h4>Keneth</h4>
                     <p>Backend</p>
                </div>
                <div className='cards'>
                     <h4>Emmanuel</h4>
                     <p>Content Manager</p>
                </div>
                <div className='cards'>
                     <h4>Amarachi</h4>
                     <p>Frontend Developer</p>
                </div>
                <div className='cards'>
                     <h4>Calistus</h4>
                     <p>UI/UX Design</p>
                </div>
                <div className='cards'>
                     <h4>Agboola</h4>
                     <p>UI/UX Design</p>
                </div>
                <div className='cards'>
                     <h4>Agboola</h4>
                     <p>UI/UX Design</p>
                </div>
                <div className='cards'>
                     <h4>Agboola</h4>
                     <p>UI/UX Design</p>
                </div>
                </div>
         
        </div>
        
        
    </div>
  )
}
