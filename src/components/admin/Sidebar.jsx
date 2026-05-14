import { useState } from 'react';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('inventory');

  const menuItems = [
    { id: 'dashboard', icon: 'fa-border-all', label: 'Dashboard', href: '/admin' },
    { id: 'inventory', icon: 'fa-boxes-stacked', label: 'Inventory', href: '/admin' },
    { id: 'appointments', icon: 'fa-calendar-days', label: 'Appointments', href: '/admin/appointments' },
    { id: 'moderation', icon: 'fa-square-poll-horizontal', label: 'Moderation', href: '/admin/moderation' },
  ];

  return (
    <aside className="hidden h-screen w-[174px] shrink-0 flex-col border-r border-[#f1dfe4] bg-[#fffafa] shadow-[8px_0_30px_rgba(128,46,73,0.04)] md:flex">
      <div className="h-[62px] px-5 flex items-center gap-2 border-b border-[#f5e4e9]">
        <i className="fas fa-cake-candles text-[#bd0b70] text-base"></i>
        <h1 className="text-[12px] font-bold text-[#bd0b70]">Dona Lucha</h1>
      </div>

      <div className="px-4 pt-4 pb-3">
        <div className="rounded-[7px] border border-[#f1cbd8] bg-[#fdebf2] px-3 py-3 flex items-center gap-3 shadow-[0_8px_16px_rgba(128,46,73,0.04)]">
          <div className="h-8 w-8 rounded-[6px] bg-[#f8bfd3] text-[#bd0b70] flex items-center justify-center">
            <i className="fas fa-shield-heart text-sm"></i>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#684a55] leading-none">Admin Panel</p>
            <p className="text-[10px] text-[#8b747b] mt-1">Management Suite</p>
          </div>
        </div>
      </div>

      <div className="px-3 py-2">
        <button className="w-full h-9 rounded-[5px] bg-[#bd0b70] text-white text-[12px] font-bold shadow-[0_8px_14px_rgba(189,11,112,0.18)] hover:bg-[#a60962] transition flex items-center justify-center gap-2">
          <i className="fas fa-plus text-[11px]"></i>
          New Product
        </button>
      </div>

      <nav className="flex-1 px-3 pt-8 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex items-center gap-3 h-8 px-3 rounded-[5px] text-[12px] transition ${
              activeMenu === item.id
                ? 'bg-[#ffd9e8] text-[#bd0b70] font-semibold shadow-[0_6px_14px_rgba(189,11,112,0.08)]'
                : 'text-[#755f67] hover:bg-[#fdebf2]'
            }`}
            onClick={() => setActiveMenu(item.id)}
          >
            <i className={`fas ${item.icon} w-4 text-[12px]`}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="px-3 pb-4">
        <a
          href="/admin/settings"
          className="flex items-center gap-3 h-8 px-3 rounded-[5px] text-[12px] text-[#755f67] hover:bg-[#fdebf2] transition"
        >
          <i className="fas fa-gear w-4 text-[12px]"></i>
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
}
