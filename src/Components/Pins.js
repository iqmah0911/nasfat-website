import React from 'react'
import '../Components/Pins.css'

const Pins = () => {
    return (
        <div className="main-container">
            <div className="header">
                <h3>Pins
                    <div>
                       <a href=""> <i className="fas fa-plus" ></i></a>
                        <i className="fas fa-sync-alt"></i>
                    </div>
                </h3>

                <table className="main_table">
                    <thead className="table_header">
                        <th style={{width: "125px", padding:"20px"}}>ID</th>
                        <th style={{width: "125px"}}>Batch Number</th>
                        <th style={{width: "125px"}}>PIN</th>
                        <th style={{width: "125px"}}>Zone</th>
                        <th style={{width: "125px"}}>Status</th>
                        <th style={{width: "125px"}}>Used By</th>
                        <th style={{width: "125px"}}>Date Generated</th>
                        <th style={{width: "125px"}}>Date Used</th>
                        <th style={{width: "125px"}}>Actions</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td> 20436  </td>
                            <td> 1646557367 </td>
                            <td> 1646557367006030ILF </td>
                            <td> 8 </td>
                            <td> 0 </td>
                            <td>  </td>
                            <td> 2022-03-06 09:03:25 </td>
                            <td> 2022-03-06 09:03:25 </td>
                            
                            <td> <i className="fas fa-trash-alt"></i> </td>
                        </tr>

                        <tr>
                        <td> 20435  </td>
                    <td> 1646557367 </td>
                    <td> 1646557367006029ILF </td>
                    <td> 8 </td>
                    <td> 0 </td>
                    <td>  </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> <i className="fas fa-trash-alt"></i> </td>
   

                        </tr>

                        <tr>

                        <td> 20434  </td>
                    <td> 1646557367 </td>
                    <td> 1646557367006028ILF </td>
                    <td> 8 </td>
                    <td> 0 </td>
                    <td>  </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> <i className="fas fa-trash-alt"></i> </td>


                        </tr>

                        <tr>

                        <td> 20433  </td>
                    <td> 1646557367 </td>
                    <td> 1646557367006027ILF </td>
                    <td> 8 </td>
                    <td> 0 </td>
                    <td>  </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> <i className="fas fa-trash-alt"></i> </td>
                    

                        </tr>

                        <tr>
                        <td> 20432  </td>
                    <td> 1646557367 </td>
                    <td> 1646557367006026ILF </td>
                    <td> 8 </td>
                    <td> 0 </td>
                    <td>  </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> 2022-03-06 09:03:25 </td>
                    <td> <i className="fas fa-trash-alt"></i> </td>

                        </tr>


                    </tbody>

                </table>
            </div>




        </div>
    )
}

export default Pins