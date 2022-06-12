import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [location, setLocation] = useState("");

  const [lon, setLon] = useState('')
  const [lat, setLat] = useState('')
  const [address, setAddress] = useState('')



  const token = `pk.eyJ1IjoiaHV5dGhhaXNsbmEiLCJhIjoiY2s2cnBkYnJ4MDhpZDNucGtkcWd1NjVnbCJ9.Sm5nLs50orhq04iKl76a1Q`
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${token}`
  const secretKey = 'f6f1631a73b7a3e4ad6e03a659675bbd'
  const urlW = `https://api.darksky.net/forecast/${secretKey}/1,2/?units=ca`

  const searchLocation = (event) => {
    if (event.key === "Enter"){
      axios.get(urlW).then((response) => {
        console.log(response)
      });
      setLocation("");
    }
  };

  useEffect(() => {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.get(url).then((response) => {
      console.log(response.data)
    }).catch(err => {console.log(err)});
    const secretKey = 'f6f1631a73b7a3e4ad6e03a659675bbd'
    const urlW = `https://api.darksky.net/forecast/${secretKey}/${lat},${lon}/?units=ca`
    axios.get(urlW,
    ).then((res) => {
          console.log(res.data)
        })
      }
  );

    return (
        <div className="app">
          <div className="search">
            <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter City"
                type="text"
            />
          </div>
          {address}
          <br/>
          Lon: {lon}
          <br/>
          Lat: {lat}
        </div>
    );


}
export default App;
