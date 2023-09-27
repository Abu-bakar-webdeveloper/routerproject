import React, { useEffect, useState } from 'react'

export const Github = () => {
    const[data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='text-3xl bg-gray-500 text-white text-center m-4 p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}
