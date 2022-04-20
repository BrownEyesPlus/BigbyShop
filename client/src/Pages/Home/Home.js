import React from 'react'
import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import Categories from './Categories/Categories'
import Slides from './Sildes/Slides'
import Tags from './Tags/Tags'

export default function Home() {
  return (
    <>
    <Slides/>
    <Tags/>
    <Categories/>
    <BlogsAd/>
    <NewsLetter/>
    </>
  )
}
