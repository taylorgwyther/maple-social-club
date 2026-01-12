import Link from "next/link";
import Newsletter from "./Newsletter";

const socialLinks = [
  { name: "EVENTS", href: "/upcoming" },
  { name: "INSTAGRAM", href: "https://instagram.com" },
  { name: "MEDIA", href: "/gallery" },
  { name: "SHOP", href: "/shop" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Tagline */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <span>MAPLE SOCIAL CLUB WELCOMES ALL PEOPLE.</span>
          <span>EQUALLY.</span>
          <span>HAVE FUN.</span>
          <span>BE KIND.</span>
          <span>STAY CURIOUS.</span>
        </div>

        {/* Newsletter */}
        <div className="mb-8 flex justify-center">
          <Newsletter />
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-gray-500">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
