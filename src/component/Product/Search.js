import React, { Fragment, useState } from 'react'
import "./Search.css"
import {useNavigate} from "react-router-dom";
import MetaData from '../layout/MetaData';

const Search = () => {
    const[keyword, setKeyword] = useState("")
    const navigate = useNavigate(); 

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`); 
        } else {
            navigate("/products");
        }
  };

  return (
    <div>
        <Fragment>
        <MetaData title="Search Here"/>
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder= "Search Here"
                    onChange={(e)=> setKeyword(e.target.value)}
                />
                <input type="submit" value="Search"/>
            </form>
        </Fragment>
    </div>
  )
}

export default Search





// import React, { Fragment, useState, useEffect } from 'react'
// import "./Search.css"

// const Search = ({history}) => {
//     const[keyword, setKeyword] = useState("")


//     const searchSubmitHandler = (e) => {
//         e.preventDefault();
//         if (keyword !== undefined) {
//             history.push(`/products/${keyword}`)
//         } else {
//             history.push("/products")
//         }
//     }

//   return (
//     <div>
//         <Fragment>
//             <form className='searchBox' onSubmit={searchSubmitHandler}>
//                 <input
//                     type="text"
//                     placeholder= "Search Here"
//                     onChange={(e)=> setKeyword(e.target.value)}
//                 />
//                 <input type="submit" value="Search"/>
//             </form>
//         </Fragment>
//     </div>
//   )
// }

// export default Search