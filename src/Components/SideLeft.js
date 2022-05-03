import React, { useState } from 'react'
import './SideLeft.css'
import {Link} from 'react-router-dom';




export default function SideLeft() {
      const[link, setLink]=useState(true)
      const[links, setLinks]=useState(true)
      const[manage, setManage]=useState(true)
      const[pin, setPin]=useState(true)
      
      const[role, setRole]=useState(true)
      
      
      
      


      const handle = () => {   // THESE HERE TOO
            setLink(!link);
          };

          const handles = () => {   // THESE HERE TOO
            setLinks(!links);
          };

          const handleManage = () => {   // THESE HERE TOO
            setManage(!manage);
          };

          const handlePin = () => {   // THESE HERE TOO
            setPin(!pin);
          };

          const handleRole = () => {   // THESE HERE TOO
            setRole(!role);
          };
         
  return (
     

    <div className='side-left'>
         <div className='first'>
            <img src="http://members.nasfat.org/assets/img/nst-logo.png" alt="NASFAT Membership Portal" className="nasfat-user"/>
             <img alt="img" className="img-avatar" width="100" src="http://members.nasfat.org/assets/img/profile.png"></img>
             <h3>Iqmah</h3>
          </div>
          <ul className='aside-container'>
               <div className='inner dashboard'>
               <div className='inners'>
               <i className="fa fa-list" style={{color: 'white'}}></i>
                   <li ><Link to='Dashboard/' style={{color : 'white'}}> Dashboard</Link></li>
               </div>
               <i className="fas fa-less-than" style={{visibility: 'hidden'}}></i>
               </div>
          <div className='inner' onClick={handles}>
               <div className='inners'>
                   <i className="fa fa-list" aria-hidden="true"></i>
                   <li><a href='#'>Parameters</a></li>
               </div>
               <i className={links? 'fa fa-angle-left' : 'fa fa-angle-down'}></i>
          </div>
          <div className={links ? "dropdowns" : "displays close"}>
                    
          <li><Link to='/Branches'>Branches</Link></li>
                    <Link to='/Zones'>Zones</Link>
                    <a href=''>Committees</a>
                    <a href=''>Professions</a>
                    <a href=''>Educational Qualifications</a>
                    

               </div>
          
               <div className='inner'onClick={handleManage}>
                  <div className='inners'>
                   <i className="fa fa-list" aria-hidden="true"></i>
                   <li><a href=''>Membership Management</a></li>
                  </div>
                  <i className={manage? 'fa fa-angle-left' : 'fa fa-angle-down'}></i>
               </div>
               <div className={manage ? "droppin" : "displaypin close"}>
                    
               <Link to='/Members'>List All Members</Link>
               <Link to='/Zones'>Add New Members</Link>
               <Link to='/Birthdays'>Birthdays</Link>
               <Link to='/Zones'>Membership Cards</Link>
                  
                    

               </div>
          
               <div className='inner' onClick={handlePin}>
                  <div className='inners'>
                   <i className="fa fa-list" aria-hidden="true"></i>
                   <li><a href=''>PINs</a></li>
                  </div>
                  <i className={pin? 'fa fa-angle-left' : 'fa fa-angle-down'}></i>
               </div>

               <div className={pin ? "dropdowns" : "displays close"}>
                    
                <Link to='/Pins'>List All Pins</Link>
                    <a href=''>Generate PINs</a>
                    

               </div>
              
              
          <div className='inner'onClick={handle}>
               <div className='inners'>
               <i className="fa fa-list" aria-hidden="true"></i>
                   <li><a href='#'>Report</a></li>
               </div>
               <i className={link? 'fa fa-angle-left' : 'fa fa-angle-down'}></i>
          </div>
          <div className={link ? "dropdown" : "display close"}>
                    
                    <a href=''>Gender Reports</a>
                    <a href=''>Qualification Reports</a>
                    <Link to='/professional'>Professional Reports</Link>
                    <a href=''>Zonal Reports</a>
                    <a href=''>Branch Reports</a>
                    

               </div>
               


          <div className='inner'onClick={handle}>
               <div className='inners'>
               <i className="fa fa-users" aria-hidden="true"></i>
                   <li><a href='#'>Users</a></li>
               </div>
               <i className={link? 'fa fa-angle-left' : 'fa fa-angle-down'}></i>
          </div>
          <div className={link ? "dropdown" : "display close"}>
                    
          <Link to='/Users'>Users</Link>
                    
                    

               </div>
          <div className={role ? "droprole" : "displayrole close"}>
                    
          <Link to='/Zones'>Roles</Link>
          <Link to='/Zones'>Permissions</Link>
                    

               </div>

          

           </ul>
    
      
    </div>
  )
}

