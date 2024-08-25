import satData from "./satData";
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>
        Name
        Type of Satellite
        Launch Date
        Status
       </th>
       {/* <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th> */}
     </tr>
     </thead>
     <tbody>
     <tr>
       <td>
        {sat.map((data,id) => <li key = {data.id}>
                {data.name}
                {data.type}
                {data.launchDate}
                {data.operational = true ? ("Active"): ("Inactive")}</li>)}
       {/* {
          sat.map((data => {
            return data.id ? (
              <td key = {data.id}>
                {data.name}
                {data.type}
                {data.launchDate}
                {data.operational = true ? ("Active"): ("Inactive")}
                </td>  
            ) : null;
}))
      } */}
       </td>
     </tr>
     </tbody>
   </table>
  );
};

export default Table;