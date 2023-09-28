import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Github = () => {
    const data = useLoaderData()
    // const[data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-3xl bg-gray-500 text-white text-center m-4 p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json()
}
