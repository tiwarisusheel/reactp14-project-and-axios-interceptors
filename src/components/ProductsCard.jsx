import { Star, ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-5">
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star
            size={17}
            className="fill-amber-400 text-amber-400"
          />
          <span className="text-sm font-semibold text-gray-700">
            {product.rating.rate}
          </span>
          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Cart */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;