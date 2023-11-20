import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageContainer from './components/ImageContainer'

function App() {

  return (
   <div>
    <h1>Image Gallery</h1>
    <ImageContainer ImgSrc="../public/img/image-1.avif"  containerId="image1" altText="ceknsc"/>
    <ImageContainer ImgSrc="../public/img/image-2.avif"  containerId="image2" altText="ceknsc"/>
    <ImageContainer ImgSrc="../public/img/image-3.avif"  containerId="image3" altText="ceknsc"/>
   </div>
  )
}

export default App
