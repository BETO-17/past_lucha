import { useEffect, useState } from 'react';
import { getProducts } from '../../scripts/storage';

export default function StatsCards({ totalItems = 0, lowStock = 0, categories = 0 }) {
  const [values, setValues] = useState({ totalItems, lowStock, categories });

  useEffect(() => {
    const products = getProducts();
    setValues({
      totalItems: products.length || 124,
      lowStock: products.filter((product) => Number(product.stock || 0) < 10).length || 8,
      categories: new Set(products.map((product) => product.category).filter(Boolean)).size || 5,
    });
  }, []);

  const stats = [
    {
      label: 'Total Items',
      value: values.totalItems,
      icon: 'fa-box-archive',
      accent: 'bg-[#ffc7dc] text-[#bd0b70]',
    },
    {
      label: 'Low Stock',
      value: values.lowStock,
      icon: 'fa-triangle-exclamation',
      accent: 'bg-[#ffd1d1] text-[#b92d35]',
    },
    {
      label: 'Categories',
      value: values.categories,
      icon: 'fa-box',
      accent: 'bg-[#efd6d7] text-[#7c5f62]',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 mb-5 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="min-h-[72px] rounded-[8px] bg-white border border-[#f5dbe3] shadow-[0_10px_24px_rgba(128,46,73,0.06)] px-5 py-4 flex items-center gap-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(128,46,73,0.08)]">
          <div className={`h-8 w-8 rounded-[5px] flex items-center justify-center ${stat.accent}`}>
            <i className={`fas ${stat.icon} text-[14px]`}></i>
          </div>
          <div>
            <p className="text-[12px] text-[#7c6870] leading-none">{stat.label}</p>
            <p className="mt-1 text-[13px] font-semibold text-[#55444a]">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
