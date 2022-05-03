
import React from 'react'
import '../Components/Members.css'

const Members = () => {
    return (
        <div className="main-container">
            <div className="header">
                <h3>Members
                    <div>
                     <a href="">   <i className="fas fa-plus" ></i> </a>
                        
                        <i className="fas fa-sync-alt"></i>
                    </div>
                </h3>
            </div>


            <div className="main-table" >
                <thead className="table-header">

                    <th style={{ width: "125px" ,  padding: "0 10px" }}>Actions</th>
                    <th style={{ width: "125px" ,  padding: "0 10px" }}>ID</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>access_code</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>First Name</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Last Name</th>
                    <th style={{ width: "125px",  padding: "0 10px"}}>Other Name</th>
                    <th style={{ width: "125px",  padding: "0 20px" }}>Date of Birth</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Sex</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Phone</th>
                    <th style={{ width: "125px" ,  padding: "0 10px"}}>Marital_Status</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Reg No</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Zone</th>
                    <th style={{ width: "125px" ,  padding: "0 10px"}}>State</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Branch</th>
                    <th style={{ width: "125px",  padding: "0 10px" }}>Email</th>
                    <th style={{ width: "125px" ,  padding: "0 10px"}}>Created</th>
                </thead>

                <tbody>
                    <tr>
                        <td>


                            <ul>
                                <li> <i className="fas fa-edit icon"></i></li>
                                <li><i className="fas fa-search icon"></i></li>
                                <li><i className="fas fa-trash-alt icon"></i></li>
                            </ul>
                        </td>

                        <td> 60467 </td>
                        <td> 16470027723 </td>
                        <td> Idiat </td>
                        <td> Adedeji </td>
                        <td> Ajoke </td>
                        <td> November 10, 1958 </td>
                        <td> female </td>
                        <td> 08053358064 </td>
                        <td> widow </td>
                        <td> 62 </td>
                        <td> LAGOS ZONE 1 </td>
                        <td> 30 </td>
                        <td> Imowo-Nla </td>
                        <td> idiatadedeji@gmail.com </td>
                        <td> 2022-03-11 12:46:12 </td>
                    </tr>

                    <tr>

                        <td>
                            <ul>
                                <li> <i className="fas fa-edit icon"></i></li>
                                <li><i className="fas fa-search icon"></i></li>
                                <li><i className="fas fa-trash-alt icon"></i></li>
                            </ul>

                        </td>

                        <td> 60466 </td>
                        <td> 16469858969 </td>
                        <td> Awujo-Ola </td>
                        <td> Harif </td>
                        <td> Olawale </td>
                        <td> March 19, 2009 </td>
                        <td> male </td>
                        <td> 07046155767 </td>
                        <td> single </td>
                        <td> 61 </td>
                        <td> LAGOS ZONE 1 </td>
                        <td> 30 </td>
                        <td> Imowo-Nla </td>
                        <td> abidemioritoke@yahoo.com </td>
                        <td> 2022-03-11 08:04:56 </td>
                    </tr>

                    <tr>
                        <td>
                            <ul>
                                <li> <i className="fas fa-edit icon"></i></li>
                                <li><i className="fas fa-search icon"></i></li>
                                <li><i className="fas fa-trash-alt icon"></i></li>
                            </ul>
                        </td>

                        <td> 60465 </td>
                        <td> 16469084623 </td>
                        <td> Aseesat </td>
                        <td> Salamin </td>
                        <td> Funmilayo </td>
                        <td> December 3, 1990 </td>
                        <td> female </td>
                        <td> 08020562883 </td>
                        <td> single </td>
                        <td> 60 </td>
                        <td> LAGOS ZONE 1 </td>
                        <td> 24 </td>
                        <td> Imowo-Nla </td>
                        <td> aseesat@gmail.com </td>
                        <td> 2022-03-10 10:34:22 </td>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li> <i className="fas fa-edit icon"></i></li>
                                <li><i className="fas fa-search icon"></i></li>
                                <li><i className="fas fa-trash-alt icon"></i></li>
                            </ul>


                        </td>
                        <td> 60464 </td>
                        <td> 16469080289 </td>
                        <td> Muniroh </td>
                        <td> Lawal </td>
                        <td> Yetunde </td>
                        <td> April 2, 2003 </td>
                        <td> female </td>
                        <td> 07017488992 </td>
                        <td> single </td>
                        <td> 59 </td>
                        <td> LAGOS ZONE 1 </td>
                        <td> 24 </td>
                        <td> Imowo-Nla </td>
                        <td> yetundemunirat22@gmail.com </td>
                        <td> 2022-03-10 10:27:08 </td>
                    </tr>

                    <tr>
                        <td>
                            <ul>
                                <li> <i className="fas fa-edit icon"></i></li>
                                <li><i className="fas fa-search icon"></i></li>
                                <li><i className="fas fa-trash-alt icon"></i></li>
                            </ul>
                        </td>
                        <td> 60463 </td>
                        <td> 16469075745 </td>
                        <td> Alimot </td>
                        <td> Arowosaye </td>
                        <td> Olasunbo </td>
                        <td> January 15, 1975 </td>
                        <td> female </td>
                        <td> 08175862003 </td>
                        <td> married </td>
                        <td> 58 </td>
                        <td> LAGOS ZONE 1 </td>
                        <td> 27 </td>
                        <td> Imowo-Nla </td>
                        <td> logistics@gmail.com </td>
                        <td> 2022-03-10 10:19:34 </td>
                    </tr>

                    <tr>
                        <td>
                            <ul>
                                <li> <i className="fas fa-edit icon"></i></li>
                                <li><i className="fas fa-search icon"></i></li>
                                <li><i className="fas fa-trash-alt icon"></i></li>
                            </ul>
                        </td>
                        <td> 60462 </td>
                        <td> 16468998472 </td>
                        <td> Ramot </td>
                        <td> Akinyemi </td>
                        <td> Eyitayo </td>
                        <td> July 25, 1975 </td>
                        <td> female </td>
                        <td> 08087668096 </td>
                        <td> married </td>
                        <td> 57 </td>
                        <td> LAGOS ZONE 1 </td>
                        <td> 23 </td>
                        <td> Imowo-Nla </td>
                        <td> ramotayusuph@gmail.com </td>
                        <td> 2022-03-10 08:10:47 </td>

                    </tr>
                </tbody>

            </div>

            {/* <div className="sub-menu">
            <ul className="menu">
                <li className="main">
                    <a href="#search">
                        <button>Search Members</button>
                    </a>
                </li>
                <li className="main">
                    <a href="#import">
                        <button>Import Members</button>
                    </a>

                </li>

                <li className="main">
                    <a href="#http://members.nasfat.org/member/xls">
                        <button>Export Members List to Excel</button>
                    </a>
                </li>
                   <li className="main">
                <a href="#http://members.nasfat.org/upload/excel_template/xls">
                    <button>Download excel Template</button>
                </a>
                </li>



            </ul>

            <hr />


        </div> */}
        </div>

    )
}

export default Members