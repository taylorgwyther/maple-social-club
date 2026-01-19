import Link from "next/link";

const events = [
  { id: '1', title: "Pool Party - Nov' 25", slug: 'pool-party-nov-25', color: '#F0552A' },
  { id: '2', title: "MAC Halloween Party - Oct' 25", slug: 'mac-halloween-oct-25', color: '#FF91C6' },
  { id: '3', title: "1st Birthday - Nov' 25", slug: 'first-birthday-nov-25', color: '#002C45' },
  { id: '4', title: "Coffee & DJ's - Sep' 25", slug: 'coffee-djs-sep-25', color: '#F4F49D' },
  { id: '5', title: "Florence Road - Oct' 25", slug: 'florence-road-oct-25', color: '#E14C94' },
  { id: '6', title: "House Party - Oct' 25", slug: 'house-party-oct-25', color: '#F4F49D' },
  { id: '7', title: "Pool Party - Sep' 25", slug: 'pool-party-sep-25', color: '#E14C94' },
  { id: '8', title: "House Party - Aug' 25", slug: 'house-party-aug-25', color: '#F0552A' },
];

export default function GalleryPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-3xl px-8 pt-12 pb-24 lg:px-16">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              style={{ marginLeft: index % 3 === 0 ? '10%' : '0', marginRight: index % 3 === 1 ? '10%' : '0' }}
            >
              <Link
                href={`/gallery/${event.slug}`}
                className="flex items-start gap-3 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-24 h-32 sm:w-28 sm:h-36 rounded-lg flex items-center justify-center text-white text-xs"
                  style={{ backgroundColor: event.color }}
                >
                  Photo
                </div>
                <p className="text-sm text-[#002C45] font-light max-w-[120px] leading-tight">
                  {event.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
