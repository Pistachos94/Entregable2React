import React, { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Loading from './Loading';
const WeatherApp = () => {
    const { data: weather, loading } = useFetch();
    let icon = weather.weather?.[0].icon;
    const linkIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

    const [changeDegree, setchangeDegree] = useState(false);

    const fahren = (1.8 * (weather.main?.temp - 273.15) + 32).toFixed(2);
    const celsius = (weather.main?.temp - 273.15).toFixed(2);
    const degreeChanged = () => {
        setchangeDegree(!changeDegree)
    }
    switch(icon){
        case icon="01d":
            document.body.style='background-image:url(https://wallpaperaccess.com/full/8132764.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="01n":
            document.body.style='background-image:url(https://wallpaperaccess.com/full/121188.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="02d":
            document.body.style='background-image:url(https://images.alphacoders.com/101/1018909.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="02n":
            document.body.style='background-image:url(https://wallpaperaccess.com/full/218850.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="03d":
            document.body.style='background-image:url(https://cdn2.unrealengine.com/2-3840x2160-c55fb58b8ad4.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="03n":
            document.body.style='background-image:url(https://r4.wallpaperflare.com/wallpaper/902/674/370/the-sky-girl-stars-clouds-wallpaper-e9f0186d014a2dcbc607b88f90d1163d.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="04d":
            document.body.style='background-image:url(https://wallpapercave.com/wp/wp6289220.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="04n":
            document.body.style='background-image:url(https://live.staticflickr.com/5758/22448249491_e3e9ddcddf_b.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="09d":
            document.body.style='background-image:url(https://lh3.googleusercontent.com/eCDEuezs924soP5kmTXrQHoCXP30I2azNPTe5S7P0rfyOQ1hieKYdzzPTW3o0rBzagCicZWdrGhqgBgD-qjym_gapio3W3sa2OV_T_Ww); background-size:cover; background-attachment: fixed'
            break;
        case icon="09n":
            document.body.style='background-image:url(https://64.media.tumblr.com/81a8ac7e0117a3da2fe6e0e5131b8d4b/tumblr_nh3dv4yJsg1txt22yo1_500.gifv); background-size:cover; background-attachment: fixed'
            break;
        case icon="10d":
            document.body.style='background-image:url(https://fondosmil.com/fondo/27688.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="10n":
            document.body.style='background-image:url(https://i.pinimg.com/originals/3c/ed/76/3ced76e4a575af1919fe6883cfe35743.jpg); background-size:cover; background-attachment: fixed'
            break;                   
        case icon="11d":
            document.body.style='background-image:url(https://i.blogs.es/ff958a/650_1000_tormenta/1366_2000.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="11n":
            document.body.style='background-image:url(https://wallpaperaccess.com/full/1563505.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="13d":
            document.body.style='background-image:url(https://i.pinimg.com/originals/3c/15/6f/3c156fbfdda9c6b1f32e2e832ffa5ddf.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="13n":
            document.body.style='background-image:url(https://wallpapercave.com/wp/wp6858485.jpg); background-size:cover; background-attachment: fixed'
            break;
        case icon="50d":
            document.body.style='background-image:url(https://c.wallhere.com/photos/d9/49/The_Garden_of_Words_anime_animation-55026.jpg!d); background-size:cover; background-attachment: fixed'
            break;
        case icon="50n":
            document.body.style='background-image:url(https://www.10wallpaper.com/wallpaper/1366x768/1301/foggy_night-amazing_natural_scenery_wallpaper_1366x768.jpg); background-size:cover; background-attachment: fixed'
            break;           
    }
    return (
        <div>
            {loading===false?(
                            <div className='weatherCont'>
                            <div className='weather'>
                                <h1 className='textCenter'>Wheather App</h1>
                                <p className='city textCenter'>{weather.name}, {weather.sys?.country}</p>
                                <div className="iconDegreeCont disflex justifyCent">
                                    <div className="iconCont disflex justifyCent">
                                        <div className="icon">
                                            <img src={linkIcon} alt="icon" />
                                        </div>
                                    </div>
                                    <div className="degree textCenter">
                                        {changeDegree ? (<>{celsius}° C</>) : (<>{fahren}° F </>)}
                                    </div>
                                </div>
            
                                <div className="infoCont">
                                    <div className="fullInfo">
                                        <p className='textCenter'>{weather.weather?.[0].description}</p>
                                        <ul className="info">
                                            <li><span>Wind speed:</span> {weather.wind?.speed} m/s</li>
                                            <li><span>Clouds:</span> {weather.clouds?.all}%</li>
                                            <li><span>Pressure:</span> {weather.main?.pressure}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="buttonCont disflex justifyCent">
                                    <button onClick={degreeChanged}>{changeDegree? "Change to F°": "Change to C°"}</button>
                                </div>
                            </div>
            
                        </div>
            ):(<Loading />)}

        </div>
    );
};

export default WeatherApp;