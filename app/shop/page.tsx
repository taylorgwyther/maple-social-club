export default function ShopPage() {
  const products = [
    { id: "1", name: "Belt cap", price: "$35", borderColor: "border-pink-400" },
    { id: "2", name: "Tote bag", price: "$25", borderColor: "border-blue-400" },
    { id: "3", name: "Playing cards", price: "$15", borderColor: "border-yellow-400" },
    { id: "4", name: "Beach towel", price: "$45", borderColor: "border-orange-400" },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">SHOP</h1>
        <p className="text-sm text-gray-500 mb-8">Coming soon - Shopify integration</p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className={`aspect-square bg-gray-100 rounded-lg border-4 ${product.borderColor} mb-3`}>
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.name}</p>
              <p className="text-xs text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
