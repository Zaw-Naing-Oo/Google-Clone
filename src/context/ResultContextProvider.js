import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);

    // for loading
    const [isLoading, setIsLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');


    // we would want viedos/ images/ search  so type is dynamic that what type we want.
    const getResults = async (type) => {
      setIsLoading(true);


    // You can get this header in Goodle search api from rapid api
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'US',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      }
    });


     const data = await response.json();
    //  console.log(type, data)


     if(type.includes('/news')) {
      setResults(data.entries); 
      // console.log(data.entries)
     }else if(type.includes('/image')) {
       setResults(data.image_results);
     } else {
      // console.log(data)
      setResults(data.results);
     }
     

    //  console.log(data);
    //  setResults(data);
     setIsLoading(false);
   }

   return (
    <ResultContext.Provider value={{ getResults, results, setResults, searchTerm, setSearchTerm, isLoading }}>
        { children }
    </ResultContext.Provider>
   )
}

export const useResultConext = () => useContext(ResultContext);
