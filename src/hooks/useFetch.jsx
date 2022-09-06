import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData]=useState({});
    const [loading, setLoading]=useState(true);
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(success);
        document.body.style='background:skyblue'
        function success(pos) {
            const crd = pos.coords;
            const lat=crd.latitude;
            const lon=crd.longitude; 

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cdec766990f5dbfac383e165a4686520`)
                .then(res=>setData(res.data))
                setLoading(false)
          }
         
    },[])

    return{data, loading};
};

export default useFetch;