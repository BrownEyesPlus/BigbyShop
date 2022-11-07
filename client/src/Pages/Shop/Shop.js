import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import ProductListItem from '../../Share/Components/ProductListItem/ProductListItem'
import './shop.css'

const listItems = [
    {
        thumbnail: 'https://gdn.printerval.com/unsafe/fit-in/630x630/assets.printerval.com/2022/07/19/62d6fa5c07110-1658255964.jpg',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://target.scene7.com/is/image/Target/GUEST_693c1197-393c-4aa5-a4e6-70ec71be5419?wid=315&hei=315&qlt=60&fmt=pjpeg',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://target.scene7.com/is/image/Target/GUEST_bfcab585-7814-470b-8432-604efa4e5959',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://columbia.scene7.com/is/image/ColumbiaSportswear2/KC3711_363_f?$x1_grid$&v=1642418206',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://columbia.scene7.com/is/image/ColumbiaSportswear2/1930851_329_f?$x1_grid$&v=1642418206',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://columbia.scene7.com/is/image/ColumbiaSportswear2/1989601_327_f?$x1_grid$&v=1642418206',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTr3vHNHJ5gOIlZAxJgjIDJ2reRNtv7fNebkez-IXdlFwx91XXtYTZJsVu3AkuRsAuCA&usqp=CAU',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqr8orBQWguTCWkYH-dMA6WXSVSXMKTauz_LfvG3Qz4DLbZmKI-Q5eZyDUfzp5d83HB8&usqp=CAU',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeGWNhipu_o57ck_MXZQucWVp8T3J4kG79tbyLdToseozx7Uahn0Etek7AatJFoahsFs&usqp=CAU',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
    {
        thumbnail: 'https://m.media-amazon.com/images/I/61zJQGAZzeS._UX569_.jpg',
        sale: '20',
        title: 'Dau xanh rau ma',
        currentPrice: 400000,
        originPrice: 500000,
        likedQuantity: 459
    },
]

export default function Shop() {
    return (
        <div className='shop'>
            <div className='products-bar container'>
                <div className='products-top-bar row'>
                    <div className='products-by-gender col-4'>
                        <input type="radio" className="gender-check hidden-check" name="options" id="option1" autoComplete="off" defaultChecked />
                        <label className="gender-option" htmlFor="option1" >
                            Tất cả sản phẩm
                        </label>
                        <input type="radio" className="gender-check hidden-check" name="options" id="option2" autoComplete="off" />
                        <label className="gender-option" htmlFor="option2" >
                            Nam
                        </label>
                        <input type="radio" className="gender-check hidden-check" name="options" id="option3" autoComplete="off" />
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
                    {listItems.map((item, index) => (
                        <ProductListItem item={item} key={index} />
                    ))}
                </div>
            </div>
            <BlogsAd />
            <NewsLetter />
        </div>
    )
}
