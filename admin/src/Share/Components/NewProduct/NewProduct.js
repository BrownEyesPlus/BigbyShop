import './newProduct.css'
import { useEffect, useState } from 'react'

export default function NewProduct() {
  const [image, setImage] = useState()


  const getImage = (image) => {
    if (typeof (image) === 'object' && image !== null) {
      return URL.createObjectURL(image)
    }
    return image
  }

  const displayImage = getImage(image)

  return (
    <div className="new-product-frame">
      <div className="container">
        <div className="new-product">
          <div className="close-wrap">
            <label className="btn-close" htmlFor="new-product-check">
              <i className="fa fa-close"></i>
            </label>
          </div>
          <div className="new-product-wrap">
            <div className="product-image-frame col-6">
              <label htmlFor="product-image-upload" className="product-image center-box"

                style={{ background: `url(${displayImage || '/assets/images/background-upload-clothes.jpg'})` }}

              >
                <form action="/action_page.php">
                  <input type="file" id="product-image-upload" name="filename" onChange={e => setImage(e.target.files[0])} />
                </form>
              </label>
            </div>
            <div className="product-content col-4">
              <input className="product-title mt-12px"
                type="text" id="product-name" name="product-name" placeholder="Tên sản phẩm..." />
              <span className="product-code">
                Mã sản phẩm:
                <input className="mt-12px ml-12px"
                  type="text" id="product-code" name="product-code" placeholder="" />
              </span>
              <div className="mt-12px product-price">
                Giá bán (vnd):
                <input className=""
                  type="number" id="product-price" name="product-price" placeholder="" min={0} />
              </div>


              <hr className="product-content-line mt-12px hidden" />
              <div className="product-type">
                <span> Thể loại: </span>
                <input className="ml-12px"
                  list="admin-type" defaultValue="" />
                <datalist id="admin-type">
                  <option value="Mặc định">
                    Mặc định
                  </option>
                  <option value="Xanh">
                    Xanh
                  </option>
                </datalist>
              </div>
              <div className="product-color-name row">
                <span> Màu sắc: </span>
                <input className="product-color-choose ml-12px mt-12px" type="color" id="favcolor" name="favcolor" defaultValue="#ff0000" />
                {/* <label htmlFor="favcolor" className="product-color" style={{backgroundColor: "gray"}}>
                            </label> */}
                <input className="ml-12px" name="favcolor"
                  list="admin-color" defaultValue="Mặc định" />
                <datalist id="admin-color">
                  <option value="Cam">
                    Cam
                  </option>
                  <option value="Xanh">
                    Xanh
                  </option>
                  <option value="#000000">
                    Đen
                  </option>
                </datalist>
              </div>

              <hr className="product-content-line mt-12px" />
              <div className="product-description">
                <span>Mô tả:</span>
                <textarea className="mt-12px"
                  id="product-des" name="product-des" rows={6} cols={50} placeholder="Điền mô tả sản phẩm tại đây ..."
                />
              </div>
              <div className="product-material mt-12px">
                <span>Chất liệu:</span> <input type="text" name="product-material" id="product-material" />
              </div>
              <div className="new-product-actions">
                <div className="row">
                  <div className="new-product-action btn-cancel">
                    Hủy
                  </div>
                  <div className="new-product-action btn-add">
                    Thêm mới
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
