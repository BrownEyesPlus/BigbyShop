import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import ProductListItem from '../../Share/Components/ProductListItem/ProductListItem'
import './shop.css'

export default function Shop() {
  return (
    <div className='shop'>
        <div className='products-bar container'>
            <div className='products-top-bar row'>
                <div className='products-by-gender col-4'>
                    <input type="radio" className="gender-check hidden-check" name="options" id="option1" autoComplete="off" defaultChecked/>
                    <label className="gender-option" htmlFor="option1" >
                        Tất cả sản phẩm
                    </label>
                    <input type="radio" className="gender-check hidden-check" name="options" id="option2" autoComplete="off"/>
                    <label className="gender-option" htmlFor="option2" >
                        Nam
                    </label>
                    <input type="radio" className="gender-check hidden-check" name="options" id="option3" autoComplete="off"/>
                    <label className="gender-option" htmlFor="option3" >
                        Nữ
                    </label>
                </div>
                <div className='col-4'>
                    <div className='products-search'>
                        <form className="form-inline">
                            <div className="products-search-form">
                                <input type="text" className="products-search-input" id="inputProductsSearch" placeholder="Tìm kiếm sản phẩm" />
                            </div>
                            <button type="submit" className="btn-products-search">
                                <i className='fa fa-search'>
                                </i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className='col-4 flex-right'>
                    <label className='products-filter-btn' htmlFor="filter">
                        Filter <i className='fa fa-sliders'></i>
                    </label>
                </div>
            </div>
            <div className='products-filter'>
                
                <input className="filter-check hidden-check" name="filter" id="filter" 
                type="checkbox" autoComplete="off"
                />
                <div className='products-filter-options'>
                    <div className='row'>
                        <div className='filter-polygon'></div>
                        <div className='options-group col-3'>
                            <div className='options-group-title'>
                                Sắp xếp theo:
                            </div>
                                <input className="products-check hidden-check" name="standard" id="standard1"
                                value={'hello'} 
                                type="radio" autoComplete="off" defaultChecked
                                />
                                <label className="products-option" htmlFor="standard1" >Mới nhất</label>
                                <input className="products-check hidden-check" name="standard" id="standard2"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="standard2" >Phổ biến</label>
                                <input className="products-check hidden-check" name="standard" id="standard3"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="standard3" >Giá trung bình</label>
                                <input className="products-check hidden-check" name="standard" id="standard4"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="standard4" >Giá: từ thấp đến cao</label>
                                <input className="products-check hidden-check" name="standard" id="standard5"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="standard5" >Giá: từ cao đến thấp</label>
                        </div>
                        <div className='options-group col-3'>
                            <div className='options-group-title'>
                                Tầm giá:
                            </div>
                                
                                <input className="products-check hidden-check" name="price" id="price1"
                                value={'hello'} 
                                type="radio" autoComplete="off" defaultChecked
                                />
                                <label className="products-option" htmlFor="price1" >Tất cả</label>
                                
                                <input className="products-check hidden-check" name="price" id="price2"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="price2" >0 - 100.000đ</label>
                                
                                <input className="products-check hidden-check" name="price" id="price3"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="price3" >100.000đ - 200.000đ</label>
                                
                                <input className="products-check hidden-check" name="price" id="price4"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="price4" >200.000đ - 300.000đ</label>
                                
                                <input className="products-check hidden-check" name="price" id="price5"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="price5" >300.000đ - 400.000đ</label>
                                
                                <input className="products-check hidden-check" name="price" id="price6"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="price6" >400.000đ - 500.000đ</label>
                        </div>
                        <div className='options-group col-3'>
                            <div className='options-group-title'>
                                Kiểu:
                            </div>
                                
                                <input className="products-check hidden-check" name="type" id="type1"
                                value={'hello'} 
                                type="radio" autoComplete="off" defaultChecked
                                />
                                <label className="products-option" htmlFor="type1" >Tất cả</label>
                                
                                <input className="products-check hidden-check" name="type" id="type2"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="type2" >Áo</label>
                                
                                <input className="products-check hidden-check" name="type" id="type3"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="type3" >Quần</label>
                                
                                <input className="products-check hidden-check" name="type" id="type4"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="type4" >Bộ</label>
                                
                                <input className="products-check hidden-check" name="type" id="type5"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="type5" >Váy</label>
                        </div>
                        <div className='options-group col-3'>
                            <div className='options-group-title'>
                                Danh mục:
                            </div>
                                
                                <input className="products-check hidden-check" name="category" id="category1"
                                value={'hello'} 
                                type="radio" autoComplete="off" defaultChecked
                                />
                                <label className="products-option" htmlFor="category1" >Tất cả</label>
                                
                                <input className="products-check hidden-check" name="category" id="category2"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="category2" >Phổ biến</label>
                                
                                <input className="products-check hidden-check" name="category" id="category3"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="category3" >Giá trung bình</label>
                                
                                <input className="products-check hidden-check" name="category" id="category4"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="category4" >Giá: từ thấp đến cao</label>
                                
                                <input className="products-check hidden-check" name="category" id="category5"
                                value={'hello'} 
                                type="radio" autoComplete="off"
                                />
                                <label className="products-option" htmlFor="category5" >Giá: từ cao đến thấp</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='products container'>
            <div className='row product-lists'>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
            </div>
        </div>
        <BlogsAd/>
        <NewsLetter/>
    </div>
  )
}
