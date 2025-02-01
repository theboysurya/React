import React from 'react'

function ProductInfo() {
    const product = {
        name : "Laptop",
        price: 1200,
        availability: true
    }


    return (
        <div>
            <p>
                Product: {product.name},<br />
                Price: ${product.price},<br />
                Availability: {
                    product.availability != true ? "In Stock" : "Out of Stock"
                }
            </p>
        </div>
    )
}

export default ProductInfo