import React from 'react'
import '../Components/Users.css'

const Users = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h3>
          Users
          <div className="pull-right">

            <ol className="breadcrumb">
              <li>
                <a href="http://members.nasfat.org"> Home</a>
              </li>

              <li className="active">/ Users</li>
            </ol>







          </div>


        </h3>
        <div className="btn-sucess">
         <a href=""> <i className="fas fa-plus plus" ><button className='btn'>Add User</button></i></a>


        <select name="selectList" id="selectList">
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Banned">Banned</option>
          <option value="Unconfirmed">Unconfirmed</option>
        </select>
        <div className="search">
        <input type="text" placeholder="Search for Users...." className='input'  />
        <i className="fas fa-search icon srch"></i>
        </div>
        </div>



      </div>
<table className="main__table">
  <thead className="table__header">
  
                        <th style={{width: "125px" , padding: "8px"}}>Username</th>
                        <th style={{width: "125px"}}>Full Name</th>
                        <th style={{width: "125px" , textAlign: "center"}}>Email</th>
                        <th style={{width: "125px"}}>Zone ID</th>
                        <th style={{width: "170px"}}>Branch ID</th>
                        <th style={{width: "170px"}}>Reg No.</th>
                        <th style={{width: "170px"}}> Registration Date</th>
                        <th style={{width: "125px"}}>Status</th>
                        <th style={{width: "300px", textAlign: "center"}}>Actions</th>

  </thead>
  <tbody>
  <tr>
  <td>igboho@nasfat.org</td>
                        <td>Igboho branch</td>
                        <td>igboho@nasfat.org</td>
                        <td>6</td>
                        <td>123</td>
                        <td></td>
                        <td>2021-07-12</td>
                        <td> <button className='act'>Active</button></td>
                            <td className='text-center'>
                              <ul className='_menu'>
                                <li>
                               <a href=""> <i className="fas fa-list i icon1"></i> </a>
                              <a href=""> <i className="fas fa-eye i icon2"></i> </a>
                           <a href=""> <i className="fas fa-edit i icon3"></i></a>
                           <a href="">  <i className="fas fa-trash-alt i  icon4"></i> </a>
                       
                                </li>
                              </ul>
                              
                            </td>
                            
                        </tr>

                        <tr>
                        <td>imowonla@nasfat.org</td>
                        <td>Imowo-Nla group</td>
                        <td>imowonla@nasfat.org</td>
                        <td>1</td>
                        <td>357</td>
                        <td></td>
                        <td>2022-02-06</td>
                        <td> <button className='act'>Active</button></td>
                            <td>
                            <ul className='_menu'>
                                <li>
                               <a href=""> <i className="fas fa-list i icon1"></i> </a>
                              <a href=""> <i className="fas fa-eye i icon2"></i> </a>
                           <a href=""> <i className="fas fa-edit i icon3"></i></a>
                           <a href="">  <i className="fas fa-trash-alt i  icon4"></i> </a>
                       
                                </li>
                              </ul>
                              
                            </td>
                       


                        </tr>

                        <tr>

                        <td>ughelli@nasfat.org</td>
                        <td>Ughelli Branch </td>
                        <td>ughelli@nasfat.org</td>
                        <td>9</td>
                        <td>181</td>
                        <td></td>
                        <td>2022-01-16</td>
                        <td> <button className='act'>Active</button></td>
                            <td>
                            <ul className='_menu'>
                                <li>
                               <a href=""> <i className="fas fa-list i icon1"></i> </a>
                              <a href=""> <i className="fas fa-eye i icon2"></i> </a>
                           <a href=""> <i className="fas fa-edit i icon3"></i></a>
                           <a href="">  <i className="fas fa-trash-alt i  icon4"></i> </a>
                       
                                </li>
                              </ul>
                              
                            </td>
                        </tr>

                        <tr>
                        <td>N/A</td>
                        <td>biola </td>
                        <td>ayomidebiola.a@gmail.com</td>
                        <td>16</td>
                        <td>289</td>
                        <td></td>
                        <td>2021-12-22</td>
                        <td> <button className='act'>Active</button></td>
                            <td>
                            <ul className='_menu'>
                                <li>
                               <a href=""> <i className="fas fa-list i icon1"></i> </a>
                              <a href=""> <i className="fas fa-eye i icon2"></i> </a>
                           <a href=""> <i className="fas fa-edit i icon3"></i></a>
                           <a href="">  <i className="fas fa-trash-alt i  icon4"></i> </a>
                       
                                </li>
                              </ul>
                              
                            </td>
                        </tr>

                        <tr>

                        <td>okuku@nasfat.org</td>
                        <td>Okuku branch</td>
                        <td>okuku@nasfat.org</td>
                        <td>8</td>
                        <td>354</td>
                        <td></td>
                        <td>2021-11-07</td>
                        <td> <button className='act'>Active</button></td>
                            <td>
                            <ul className='_menu'>
                                <li>
                               <a href=""> <i className="fas fa-list i icon1"></i> </a>
                              <a href=""> <i className="fas fa-eye i icon2"></i> </a>
                           <a href=""> <i className="fas fa-edit i icon3"></i></a>
                           <a href="">  <i className="fas fa-trash-alt i  icon4"></i> </a>
                       
                                </li>
                              </ul>
                              
                            </td>

                        </tr>

                        <tr>

                        <td>ago-are@nasfat.org</td>
                        <td>Ago-Are branch</td>
                        <td>ago-are@nasfat.org</td>
                        <td>6</td>
                        <td>353</td>
                        <td></td>
                        <td>2021-07-12</td>
                        <td> <button className='act'>Active</button></td>
                            <td>
                            <ul className='_menu'>
                                <li>
                               <a href=""> <i className="fas fa-list i icon1"></i> </a>
                              <a href=""> <i className="fas fa-eye i icon2"></i> </a>
                           <a href=""> <i className="fas fa-edit i icon3"></i></a>
                           <a href="">  <i className="fas fa-trash-alt i  icon4"></i> </a>
                       
                                </li>
                              </ul>
                              
                            </td>
                        </tr>


  </tbody>



</table>
    </div>
  )
}

export default Users