import Blog from './BLog/Blog'
import './blogsad.css'

export default function BlogsAd() {
  return (
    <div className='blogs-ad part'>
        <h3 className='blogs-ad-title'>
            Khám phá bài viết
        </h3>
        <hr className='blogs-ad-line'/>
        <div className='blogs-ad-content'>
            <div className='container '>
                <div className='row blogs'>
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
        </div>
    </div>
  )
}
