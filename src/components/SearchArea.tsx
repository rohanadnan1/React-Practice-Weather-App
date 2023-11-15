import { fetchData } from "../App"
import { Context } from "../App"
import { useContext, useEffect , useState} from "react"
import { useQuery } from '@tanstack/react-query'


export const SearchArea = () => {

   
    const { setCity, city, setIsData } = useContext(Context)
    const { refetch } = useQuery({queryKey: ['data', city], queryFn: () => fetchData(city)});
    const [input, setInput] = useState('' as string)
    
    useEffect(()=>{
        refetch()
    },[refetch, city])

    const handleData = () => {
        setCity(input)
        setIsData(true)
    }

    return(
        <>
            <div className="search-div">
                <input type="text" placeholder="Enter City..." onChange={(e)=>setInput(e.target.value)} />
                <button onClick={handleData}>Search Weather</button>
            </div>
        </>
    )
}