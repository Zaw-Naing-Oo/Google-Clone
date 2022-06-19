import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useResultConext } from '../context/ResultContextProvider'
import Loading from './Loading'

const Result = () => {

    // console.log(useResultConext());
    const { getResults, results, searchTerm, isLoading } = useResultConext();

    // for dynamic url. Ex => /images/ ,  /viedos,
    const location = useLocation();
    // console.log(location);

    useEffect( () => {
      if(searchTerm){
        if(location.pathname === '/videos') {
          getResults(`/search/q=${searchTerm} videos`);
        }else {
          getResults(`${location.pathname}/q=${searchTerm}&num=40`);
        }
      }
      
    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />;

    switch(location.pathname) {

        case '/search' : 
        return(
          <div className="lg:px-56 md:px-12 flex flex-wrap justify-between space-y-6">
            {results?.map(({ link, title }, index) => (
              <div key={index} className="md:w-2/5 w-full mt-2">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                </a>
              </div>
            ))}
          </div>
        );

        case '/image' : 
        return (
          <div className="flex flex-wrap justify-center items-center">

            {/* As image and link are object, I use destucturing syntax again */}
            {results?.map(({ image, link: { href, title } }, index) => (
              <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            ))}
          </div>
        );

        case '/news' : 
        return (
          <div className="lg:px-56 md:px-12 flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
            {results?.map(({ links, title, id, source }) => (
              <div key={id} className="md:w-2/5 w-full">
                <a href={links?.[0].ref} target="_blank" rel='noreferrer' className='hover:underline'>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className='flex gap-4'>
                  <a href={source?.href} target="_blank" rel='noreferrer' className='hover:underline'>
                      {source?.href}
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
        case '/videos' : 
        return(
          <div className='flex flex-wrap justify-center items-center gap-12'>
             { results.map((result, index) => (
               <div key={index} className="p-2">
                 
                 <ReactPlayer url={result.link} controls width="355px" height="200px" />
               </div>
             ))}
          </div>
        );
        default: return 'Error';
    }
}

export default Result