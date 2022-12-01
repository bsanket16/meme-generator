import { useState, useEffect } from 'react'
import '../App.css'

export const MainContent = () => {

  const [memeImage, setMemeImage] = useState({
      topText: "",
      bottomText: "",
      image: ""
  })

  const [memeData, setMemeData] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setMemeData(data.data.memes))
  }, [])

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * 100)
    const {url} = memeData[randomIndex]
    
    setMemeImage(prevMeme => ({
      ...prevMeme,
      image: url
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMemeImage(prevMemeData => {
      return {
        ...prevMemeData,
        [name]: value
      }
    })
  }

  return (
    <div className="mt-[1rem] select-none">

      <div className='form'>
        <div className="flex justify-center">
          <input onChange={handleChange} name="topText" value={memeImage.topText} className="w-[20rem] p-2 m-8 appearance-none outline-none bg-white rounded-md indent-2" type={"text"} placeholder="Primary Text"></input>
          <input onChange={handleChange} name="bottomText" value={memeImage.bottomText} className="w-[20rem] p-2 m-8 appearance-none outline-none bg-white rounded-md indent-2" type={"text"} placeholder="Secondary Text"></input>
        </div>
        <button onClick={handleClick} className="w-[26rem] bg-red p-3 rounded-md block m-auto mt-4 text-white font-bold text-[1.1rem]">Generate a new meme image!</button>
      </div>

      <div className='w-[1000px] h-[400px] m-auto  mt-14 relative flex justify-center'>
        {memeImage.image && 
          <>
            <img className='w-full h-full absolute' src={memeImage.image} alt="meme"></img>
            <div className="text-white bg-black p-2 absolute top-4 font-['Bangers'] text-5xl">{memeImage.topText}</div>
            <div className="text-white bg-black p-2 absolute bottom-4 font-['Bangers'] text-5xl">{memeImage.bottomText}</div>
          </>
        }
      </div>

    </div>
  )
}