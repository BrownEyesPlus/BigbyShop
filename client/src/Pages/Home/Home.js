import React from 'react'

import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
// import NavBar from '../../Share/Components/NavBar/NavBar'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import Categories from './Categories/Categories'
import Slides from './Sildes/Slides'
import Tags from './Tags/Tags'

const fakeHomeData = {
  categories: [
    {
      title: 'Mới nhất',
      list: [
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/batman-im-not-saying-funny-quote.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/black-lives-matter-say-their-names.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/boo-halloween.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/coffee-because-murder-is-wrong.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/costume-not-found-error-404-funny-halloween.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/costume-not-found-error-404-funny-halloween.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/fred-flintstone-tie.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/gaston-costume.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/globo-gym.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/harry-potter-harry-potter-i-solemnly-swear.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
      ]
    },
    {
      title: 'Hot nhất',
      list: [
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/im-someones-boo-halloween.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/jimmy-neutron.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/looney-tunes-bugs-bunny.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/looney-tunes-marvin-the-martian.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/magical-adventure.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/pumpkin-halloween.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/raining-hearts.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/rocket-power-regina.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/staypuft-marshmallow-man-shirt.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
        {
          id: 1,
          slug: '1',
          thumbnail: '/assets/images/products/tammy-mahalo-shirt.webp',
          name: 'Áo phông xịn xò',
          sale: 0.2,
          listedPrice: 124000,
          likes: 143
        },
      ]
    },
  ]
}

export default function Home() {
  return (
    <>
      {/* <NavBar/> */}
      <Slides />
      <Tags />
      <Categories categories={fakeHomeData.categories} />
      <BlogsAd />
      <NewsLetter />
    </>
  )
}
