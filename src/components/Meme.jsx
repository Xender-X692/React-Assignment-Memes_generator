import React from 'react'
import './style.css'
import memesData from './Memedata'

const Meme = () => {
    // const [memeImage, setMemeImage] = React.useState('https://i.imgflip.com/1g8my4.jpg');
    const [meme,setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: 'https://i.imgflip.com/1g8my4.jpg'
    });
    
    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prev => ({
        ...prev,randomImage: url
      }));
      
    }

    function letterHandler(e){
      const {name,value} = e.target;
      console.log(name,value)
      setMeme(prev =>({
        ...prev,[name]: value
      }))
    }
  return (
    <main>
        <div className='form'>
            
            <input type="text"  name='topText' className='form-input' value={meme.topText} onChange={letterHandler} placeholder='Top text'/>
            <input type="text"  name='bottomText' className='form-input' value={meme.bottomText} onChange={letterHandler} placeholder='Bottom text'/>
            <button type='btn' className='form-btn' onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className="meme">
                <img src={meme.randomImage} alt='img' className="meme-Image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  )
}

export default Meme