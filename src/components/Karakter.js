import axios from "axios"
import { useEffect , useState } from "react"
import "../components/Karakter.css"


const Karakter = () => {

    const [starWars, setStarWars] = useState([])

    useEffect (() => {
        axios.get("https://swapi.dev/api/people/")
        .then((resp)=>{
            setStarWars(resp.data)
        })
    },[])

    const bilgileriGoster = (item) => {
       return console.log(item.name)
    }

    return<div>
        <div className="selectChButton">
            {starWars.map((ch) => {
                return <div className="chPage" key={ch.name}>
                    <h3>{ch.name}</h3>
                     <button onClick={() =>bilgileriGoster(ch)
                    }> Bilgileri Göster</button>
                    </div>   
            })}
        </div>
    </div>
}

  export default Karakter