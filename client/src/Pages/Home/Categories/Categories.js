import './categories.css'
import ProductListItem from '../../../Share/Components/ProductListItem/ProductListItem'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

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

export default function Categories() {
    return (

        <div className='categories'>
            <div className='part category'>
                <div className='container'>
                    <h2 className='category-title'>
                        Danh muc
                    </h2>
                    <div className='row product-lists'>
                        {listItems.map((item, index) => (
                            <ProductListItem item={item} key={index} />
                        ))}
                    </div>
                    <div className='btn-see-more'>
                        See more...
                    </div>
                </div>
            </div>

            <div className='part category' style={{ background: 'linear-gradient(0deg, #F4F1E9, #F4F1E9), #FFFFFF' }}>
                <div className='container'>
                    <h2 className='category-title'>
                        Danh muc
                    </h2>
                    <div className='row product-lists'>
                        {listItems.map((item, index) => (
                            <ProductListItem item={item} key={index} />
                        ))}
                    </div>
                    <div className='btn-see-more'>
                        See more...
                    </div>
                    <NavLink to="/shop">DDi nao</NavLink>
                </div>
            </div>

            {/* <div className='part category'>
            <div className='container'>
                <h2 className='category-title'>
                    Danh muc
                </h2>
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
                <div className='btn-see-more'>
                    See more...
                </div>
            </div>
        </div> */}

        </div>
    )
}
