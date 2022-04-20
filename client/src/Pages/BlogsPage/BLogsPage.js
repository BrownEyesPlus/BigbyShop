import Blog from '../../Share/Components/BlogsAd/BLog/Blog'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import './blogsPage.css'

export default function BLogsPage() {
  return (
    <div className='blogs-page'>
        <div className='blogs-page-top' style={{background: 'url(' + 'assets/images/blogs-background.jpg' +')'}}>
            <div className='blogs-page-top-mask'>
                <h2 className='blogs-page-title'>
                    Clothes Blogs
                </h2>
            </div>
        </div>
        <div className='blogs container'>
            <div className='row'>
                <div className='col-4'>
                    <Blog/>
                </div>
                <div className='col-4'>
                    <Blog/>
                </div>
                <div className='col-4'>
                    <Blog/>
                </div>
                <div className='col-4'>
                    <Blog/>
                </div>
                <div className='col-4'>
                    <Blog/>
                </div>
            </div>
        </div>
        <NewsLetter/>
    </div>
  )
}
