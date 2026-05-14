import { useEffect, useState } from 'react';
import { getProducts } from '../../scripts/storage';

const fallbackProducts = [
  {
    id: 1,
    name: 'Tres Leches Classic',
    sku: 'TL-001',
    category: 'Spoonable Cakes',
    price: 8.5,
    stock: 45,
  },
  {
    id: 2,
    name: 'Mango Carlota',
    sku: 'MC-042',
    category: 'Fruit Desserts',
    price: 9,
    stock: 2,
  },
  {
    id: 3,
    name: 'Choco-Flan Jar',
    sku: 'CF-011',
    category: 'Layered Jars',
    price: 10.5,
    stock: 18,
  },
];

export default function ProductTable({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts.length ? initialProducts : fallbackProducts);

  useEffect(() => {
    const storageProducts = getProducts();
    setProducts(storageProducts.length ? storageProducts.slice(0, 3) : fallbackProducts);
  }, []);

  const getStatusBadge = (stock) => {
    if (stock <= 0) return { text: 'Out of Stock', className: 'bg-[#ffe1e4] text-[#b92d35]' };
    if (stock < 10) return { text: 'Low Stock', className: 'bg-[#ffdce2] text-[#d64a5b]' };
    return { text: 'Active', className: 'bg-[#ffe3e8] text-[#c9687d]' };
  };

  const formatPrice = (price) => `$${Number(price || 0).toFixed(2)}`;

  return (
    <div className="rounded-[8px] border border-[#f1d7de] bg-white overflow-hidden shadow-[0_12px_26px_rgba(128,46,73,0.06)]">
      <div className="h-10 bg-[#fff0f4] border-b border-[#f0d7df] px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="h-6 px-3 rounded-[4px] bg-white border border-[#ead3da] text-[10px] text-[#7c6870] flex items-center gap-1 transition hover:border-[#bd0b70] hover:text-[#bd0b70]">
            <i className="fas fa-filter text-[8px]"></i>
            Filter
          </button>
          <button className="h-6 px-3 rounded-[4px] bg-white border border-[#ead3da] text-[10px] text-[#7c6870] flex items-center gap-1 transition hover:border-[#bd0b70] hover:text-[#bd0b70]">
            <i className="fas fa-sort text-[8px]"></i>
            Sort
          </button>
        </div>

        <div className="text-[10px] text-[#8a747b]">
          Showing 1-{Math.min(10, products.length)} of 124
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="h-10 bg-[#f3dddf] border-b border-[#ead0d5]">
              <th className="w-9 px-3 text-left">
                <input type="checkbox" className="h-3 w-3 rounded border-[#e2bcc8]" />
              </th>
              <th className="w-[30%] px-3 text-left text-[11px] font-bold text-[#5d4a51]">Product Name</th>
              <th className="w-[24%] px-3 text-left text-[11px] font-bold text-[#5d4a51]">Category</th>
              <th className="w-[12%] px-3 text-left text-[11px] font-bold text-[#5d4a51]">Price</th>
              <th className="w-[10%] px-3 text-left text-[11px] font-bold text-[#5d4a51]">Stock</th>
              <th className="w-[13%] px-3 text-left text-[11px] font-bold text-[#5d4a51]">Status</th>
              <th className="w-[11%] px-3 text-left text-[11px] font-bold text-[#5d4a51]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const status = getStatusBadge(Number(product.stock || 0));

              return (
                <tr key={product.id} className="h-[54px] border-b border-[#f5e7eb] bg-white transition hover:bg-[#fff9fb] last:border-b-0">
                  <td className="px-3">
                    <input type="checkbox" className="h-3 w-3 rounded border-[#e2bcc8]" />
                  </td>
                  <td className="px-3">
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-[4px] bg-[#f7e4e6] text-[#a07f86] flex items-center justify-center">
                        <i className={`fas ${index === 0 ? 'fa-cake-candles' : index === 1 ? 'fa-ice-cream' : 'fa-cookie'} text-[10px]`}></i>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12px] font-semibold text-[#604c53] leading-none truncate">{product.name}</p>
                        <p className="text-[9px] text-[#9a858c] mt-1">SKU: {product.sku || `PRD-${product.id}`}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 text-[12px] text-[#6b5960]">{product.category || 'Spoonable Cakes'}</td>
                  <td className="px-3 text-[12px] font-semibold text-[#5c4b51]">{formatPrice(product.price)}</td>
                  <td className="px-3">
                    <span className={`text-[12px] font-semibold ${Number(product.stock || 0) < 10 ? 'text-[#e34a56]' : 'text-[#5c4b51]'}`}>
                      {product.stock || 0}
                    </span>
                    {Number(product.stock || 0) < 10 && <span className="ml-1 text-[#e34a56] text-[10px]">low</span>}
                  </td>
                  <td className="px-3">
                    <span className={`px-2 py-1 rounded-full text-[9px] font-semibold ${status.className}`}>
                      {status.text}
                    </span>
                  </td>
                  <td className="px-3">
                    <div className="flex items-center gap-1 text-[#8f747b]">
                      <button className="h-6 w-6 rounded-[4px] transition hover:bg-[#fdebf2] hover:text-[#bd0b70]">
                        <i className="fas fa-pen text-[10px]"></i>
                      </button>
                      <button className="h-6 w-6 rounded-[4px] transition hover:bg-[#fdebf2] hover:text-[#bd0b70]">
                        <i className="fas fa-trash text-[10px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="h-10 bg-[#fff0f4] border-t border-[#f0d7df] px-4 flex items-center justify-between">
        <button className="text-[10px] text-[#c0a7ae]">Previous</button>
        <div className="flex items-center gap-3 text-[11px] text-[#7c6870]">
          <button className="h-6 w-6 rounded-[4px] bg-[#bd0b70] text-white font-bold">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
        </div>
        <button className="text-[10px] text-[#7c6870]">Next</button>
      </div>
    </div>
  );
}
