export default function Header() {
  return (
    <div className="relative w-[210px]">
      <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-[#b99da7] text-[10px]"></i>
      <input
        type="text"
        placeholder="Search products..."
        className="h-8 w-full rounded-[6px] border border-[#efcbd7] bg-white/75 pl-8 pr-3 text-[11px] text-[#6d5960] outline-none focus:border-[#bd0b70] focus:ring-2 focus:ring-[#f8bfd3]"
      />
    </div>
  );
}
