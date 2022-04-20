import './tags.css'

export default function Tags() {
  return (
    <div className='tags'>
        <div className='part'>
            <div className='container'>
                <div className='row' style={{margin: '0 -12px'}}>
                    <a href='#' className='col-4 tag-wrap'>
                        <div className='tag' style={{background: 'url(' + "assets/images/image-3.png" + ')'}}>
                        <div className='mask-tag center-box'>
                                <div className='btn-tag'>
                                    Nam
                                </div>
                            </div> 
                        </div>   
                    </a>
                    <a href='#' className='col-4 tag-wrap' >
                        <div className='tag' style={{background: 'url(' + "assets/images/image-2.png" + ')'}}>
                        <div className='mask-tag center-box'>
                                <div className='btn-tag'>
                                    Nữ
                                </div>
                            </div> 
                        </div>   
                    </a>
                    <a href='#' className='col-4 tag-wrap' >
                        <div className='tag' style={{background: 'url(' + "assets/images/image-4.png" + ')'}}>
                        <div className='mask-tag center-box'>
                                <div className='btn-tag'>
                                    Khác
                                </div>
                            </div> 
                        </div>   
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
