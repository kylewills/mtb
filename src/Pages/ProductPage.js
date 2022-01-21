import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

// function ProductPage (props){
//     console.log(props.match.params.id);
//     // const product = data.bikeproducts.find(x => Number(x._id) === Number(props.match.params.id));
//     // const product = data.bikeproducts.find(x => x._id === props.match.params.id);
//     return <div><h1>product.name</h1>
//                 {/* <Link to="/"> Back to results... </Link>  */}
//                 {/* <h1>{product.name}</h1> */}

//             </div>
// }

function ProductPage (props) {
    // console.log(props.match.params.id);
    // const product = data.bikeproducts.find(x => x._id === props.match.params.id);
    const product = data.bikeproducts.find(x => Number(x._id) === Number(props.match.params.id));
    return <div>
                <div  className='back-to-home'>
                    <Link to="/"> <h2 >Back to Home Page...</h2> </Link>
                </div>
               <div className="product-page-details">
                    <div className='product-page-details-image'>
                        <img src={product.image} alt='product'></img>
                        
                    </div>
                    <div className='product-page-details-info'>
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Stars ({product.numReviews} reviews)
                            </li>
                            <li>
                                Price:<b> £{product.price}</b>
                            </li>
                            <li>
                                Desciption
                                <div>
                                    {product.description}
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='product-page-details-actions'>
                    <ul>
                        <li>
                            Price: £{product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Quantity: <select>
                                <option>{1}</option>
                                <option>{2}</option>
                                <option>{3}</option>
                                <option>{4}</option>
                                <option>{5}</option>
                            </select>
                        </li>
                    </ul>
                    <li>
                        <button className='button'>Add to your Trolley</button>
                    </li>

                </div>
        
            </div>
}

export default ProductPage;