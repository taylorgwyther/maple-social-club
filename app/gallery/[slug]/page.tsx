import Link from "next/link";
import { notFound } from "next/navigation";

const events: Record<string, { title: string; color: string }> = {
  'pool-party-nov-25': { title: "Pool Party - Nov' 25", color: '#F0552A' },
  'mac-halloween-oct-25': { title: "MAC Halloween Party - Oct' 25", color: '#FF91C6' },
  'first-birthday-nov-25': { title: "1st Birthday - Nov' 25", color: '#002C45' },
  'coffee-djs-sep-25': { title: "Coffee & DJ's - Sep' 25", color: '#F4F49D' },
  'florence-road-oct-25': { title: "Florence Road - Oct' 25", color: '#E14C94' },
  'house-party-oct-25': { title: "House Party - Oct' 25", color: '#F4F49D' },
  'pool-party-sep-25': { title: "Pool Party - Sep' 25", color: '#E14C94' },
  'house-party-aug-25': { title: "House Party - Aug' 25", color: '#F0552A' },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventGalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events[slug];

  if (!event) {
    notFound();
  }

  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-4xl px-8 pt-12 pb-24 lg:px-16">
        <div className="mb-8">
          <Link
            href="/gallery"
            className="text-sm text-[#002C45] font-light hover:opacity-70 transition-opacity"
          >
            &larr; Back to Gallery
          </Link>
          <h1 className="text-sm text-[#002C45] font-light mt-6">
            {event.title}
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="p-2 rounded-lg"
              style={{ backgroundColor: event.color }}
            >
              <div className="w-full aspect-[3/4] bg-white/20 rounded flex items-center justify-center text-white/60 text-xs">
                Photo {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
