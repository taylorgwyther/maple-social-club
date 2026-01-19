export default function PartnersPage() {
  const partnerCategories = [
    { title: "VENUE PARTNERS", count: 4 },
    { title: "BRANDS", count: 4 },
    { title: "VIDEOGRAPHERS", count: 2 },
    { title: "PHOTOGRAPHERS", count: 2 },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">PARTNERS</h1>
        <p className="text-sm text-gray-500 mb-8">Coming soon</p>

        <div className="grid md:grid-cols-2 gap-12">
          {partnerCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: category.count }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
                  >
                    <span className="text-xs">Partner logo</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
