import { SearchArea } from './components/SearchArea'
import { Card } from './components/Card'
import { createContext, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export const Context = createContext({
    city: '',
    setCity: (city: string) => {}
})

const queryClient = new QueryClient()

export const fetchData = async (city: string) => {
    const api_key = "063457221f6c70084b5e71dd16122c3e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.weather[0].main)
    console.log(data)
    return data;
}


function App() {

  const [city, setCity] = useState('' as string)
  
  return (
    <>
        <QueryClientProvider client={queryClient}>
          <Context.Provider value={{city, setCity}}>
              <div className='main'>
                <h1>My Weather app using React and Typescript</h1>
                <SearchArea />
                <Card />
              </div>
           </Context.Provider>
        </QueryClientProvider>
    </>
  )
}

export default App
