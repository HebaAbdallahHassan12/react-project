import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Network() {
    let[network,setnetwork]=useState([]);


  async  function getMovies(net){
        let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${net}/week?api_key=de9607d516fff03489625b9731085035`);
       
        setnetwork(data.results);
        console.log(data.results);
    }

    useEffect(()=>{
getMovies('credits',setnetwork)
    },[])
//   return (
//     <div className='container'>
//         <div className="row">
//           {  
//           network.map((movie,i)=><div key={i} className="col-md-3">
//             <h3>{movie.title}</h3>
//             <p>{movie.overview}</p>
//           </div>)
//           }
               
//        </div>
//     </div>
//   )
}
