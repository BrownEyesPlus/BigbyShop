import './blog.css'

export default function Blog() {
  return (
    <div className='blog'>
        <div className='blog-image' style={{background: 'url(' + "assets/images/image-6.png" + ')'}}>

        </div>
        <div className='blog-date'>April 4, 2022</div>
        <h4 className='blog-title'>
            Thời trang mùa đông nên chọn màu gì để mặc?
        </h4>
        <p className='blog-description'>
            Mùa đông lạnh bạn vẫn có thể diện những chiếc váy 2 dây, váy hoa điệu đà được mà không lo giá...
        </p>
    </div>
  )
}
