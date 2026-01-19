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
    <footer className="bg-[#FBF9F1]">
      <div className="mx-auto max-w-2xl px-8 pt-24 pb-12 lg:px-16">
        {/* Tagline */}
        <div className="mb-4 text-[#002C45] font-bold text-sm md:text-base font-[family-name:var(--font-poppins)]">
          <p className="flex justify-between">
            <span>MAPLE SOCIAL CLUB WELCOMES ALL PEOPLE,</span>
            <span>EQUALLY.</span>
          </p>
          <p className="flex justify-between">
            <span>HAVE FUN,</span>
            <span>BE KIND,</span>
            <span>STAY CURIOUS.</span>
          </p>
        </div>

        {/* Newsletter */}
        <div className="mb-8">
          <Newsletter />
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#002C45] font-[family-name:var(--font-poppins)] font-light">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
