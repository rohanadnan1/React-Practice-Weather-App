import { useQuery} from '@tanstack/react-query'
import {useContext} from 'react'
import { Context } from '../App'
import { fetchData } from '../App'

export const Card = () => {

    const { city } = useContext(Context)

    const { data, isLoading, error} = useQuery({queryKey: ['data', city], queryFn: () => fetchData(city)});

    if (isLoading) return <div style={{fontSize: '1.2rem', fontWeight: 'bolder'}}>Loading...</div>
    
    if(error) return <div style={{fontSize: '1.2rem', fontWeight: 'bolder'}}>Error: Wrong Info OR Poor Internet Connection</div>

    if(data) return(
        <>
            <div className="card">
                <h1>City Name: {data.name}</h1>
                <h2>Weather Condition: {data.weather[0].main}</h2>
                <h2>Temprature: {Math.round(data.main.temp - 273)} degree</h2>
            </div>
        </>
    )
}