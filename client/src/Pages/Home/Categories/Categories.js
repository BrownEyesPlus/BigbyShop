import './categories.css'
import ProductListItem from '../../../Share/Components/ProductListItem/ProductListItem'

export default function Categories() {
  return (

    <div className='categories'>
        <div className='part category'>
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
        </div>

        <div className='part category' style={{background: 'linear-gradient(0deg, #F4F1E9, #F4F1E9), #FFFFFF'}}>
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
