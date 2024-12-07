import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden p-4 mb-6 flex flex-col items-center">
            <img
                className="w-full h-48 object-cover mb-4"
                src={product.image}
                alt={product.name}
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm mb-4">{product.description}</p>
            <p className="text-xl mb-4">{product.price}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
}
