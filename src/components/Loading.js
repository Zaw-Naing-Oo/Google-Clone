import React from 'react'
// import loader, { Puff } from 'react-loader-spinner';
import { Puff } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className=' flex justify-center items-center'>
        {/* <loader type={Puff} color='#00BFFF' height={550} width={80} /> */}
        <Puff
          height={550} 
          width={100}
          color='#00BFFF'
          ariaLabel='loading'
        />
    </div>
  )
}

export default Loading