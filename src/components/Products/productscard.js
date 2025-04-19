
import Image from "next/image"
import { products } from "@/constant/products"


export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gray-100">
        <Image src={product.image || "/car.png"} alt= "Image" fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">Details of {product.category}</p>
        <p className="text-sm text-gray-700 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">Price</span>
          <span className="text-amber-600 font-bold">${product.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
