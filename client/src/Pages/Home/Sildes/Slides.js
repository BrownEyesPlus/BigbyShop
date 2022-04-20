import './slides.css'

export default function Slides() {
  return (
    <div className='slides row'>
        <div className='slide h-100'>
          <div className='slide-polygon'>
            <img src='assets/images/Polygon 1.png'/>
            <img src='assets/images/Polygon 2.png'/>
            <img id='polygon3' src='assets/images/Polygon 3.png'/>
          </div>
          
            <div className='slide-content center-box h-100'>
              <div className='container row h-100'>
                <div className='left-slide row h-100'  style={{background: 'url(' + "assets/images/slide-image-1.png" + ')'}}>
                    {/* <img className='img-fluid'
                    src='' alt=''
                    /> */}
                  </div>
                  <div className='right-slide center-box'>
                    <div className='slide-info'>
                      <h2 className='slide-title'>
                        Thời trang mùa đông
                      </h2>
                      <p className='slide-description'>
                        ĂN MẶC THEO PHONG CÁCH, ĐƯỢC GIẢM GIÁ ĐẾN 20% MÙA HÈ NÀY!
                      </p>
                    </div>
                  </div>
              </div>                    
            </div>
                     
        </div>
    </div>
  )
}
