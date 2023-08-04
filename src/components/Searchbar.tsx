import React  from "react";
import graph3 from "../assets/Searchbaricon.png";
import "./Searchbar.css";
export default function Searchbar(){
    const[input , setInput] =React.useState("");
    console.log(input);
    const fetchData =(value:string) =>{
       fetch("https://jsonplaceholder.typicode.com/users").then((response)=> response.json()).then((json) =>{
        const results= json.filter((user:ObjectConstructor)=>{
            console.log(user);
            return  (
                value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(value)
              );
        });
        console.log(results);
       });

    };

const handleChange= (value:string) => {
    setInput(value);
    fetchData(value);

};
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
       {/* <div className="input-wraper"></div> */}
       {/* <img src={graph3} alt="graph3" id="Searchbaricon"/> */}
       {/* <input placeholder="Search Stock" /> */} 
       <input value={input}
        onChange={(e)=> handleChange(e.target.value)}
       type="search" placeholder="Search stock" style={{width:'60%', display:'block', backgroundColor:'linear-gradient(180deg, #FAFAFA 0%, rgba(250, 250, 250, 0.00) 100%)', outline:0, borderRadius:5, border:'1px solid #4961A7',fontSize:18, height:30, padding:'20px 10px' }}/>
       <img src={graph3} alt="graph3" id="Searchbaricon"/>
       </div>
    );
}


// import React, {useState} from 'react'

// function Searchbar() {

//     const [searchInput, setSearchInput] = useState("");
   
//     const stock = [
   
//      { name: "DMart"},
//      { name: "Britannia Industries"},
//      { name: "Lumax"},
//      { name: "APL Apollo Tubes India Ltd"},
//      { name: "Marksans Pharma India Ltd"},
     
     
   
//    ];
   
//    const handleChange = (e) => {
//      e.preventDefault();
//      setSearchInput(e.target.value);
//    };
   
//    if (searchInput.length > 0) {
//        stock.filter((stock) => {
//        return stock.name.match(searchInput);
//    });
//    }

//    return(
//     <div >
   
//    <input
//       type="search"
//       placeholder="Search stock"
//       onChange={handleChange}
//       value={searchInput} />
   
//    <table>
//      {/* <tr>
//        <th>stock</th>
       
//      </tr> */}
   
//    {stock.map((stock) => {
//    return(

//     <div>
//     <tr>
//       <td>{stock.name}</td>
      
//     </tr>
//   </div>
//    )
   
//    })}
//    </table>
   
//    </div>
   
//    )
//    }
   
//    export default Searchbar;
   