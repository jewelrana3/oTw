import Link from "next/link";

const companyLinks = ["About", "Features", "Works", "Career"];
const helpLinks = [
  "Customer Support",
  "Delivery Details",
  "Terms & Conditions",
  "Privacy Policy",
];
const resourceLinks = [
  "Free eBooks",
  "Development Tutorial",
  "How to – Blog",
  "Youtube Playlist",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Added: grid-cols-1 (mobile) -> md:grid-cols-2 (tablet) -> lg:grid-cols-[1.6fr_1fr_1fr_1fr] (desktop) */}
      <div className="px-6 sm:px-10 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
        {/* Brand Section */}
        {/* Added: 'md:col-span-2 lg:col-span-1' to let the brand span full width on tablets if desired */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="text-[28px] font-bold tracking-tight no-underline block mb-5"
          >
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </Link>
          <p className="text-[#5f6368] text-sm leading-7 max-w-full  mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="flex gap-4">
            {/* Social Links remain horizontal on all screens */}
            <SocialLink href="#" label="Twitter">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.928l4.279 5.659zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>
            {/* ... Other SocialLinks */}
          </div>
        </div>

        {/* Column Sections */}
        {/* These will stack on mobile and sit 2-per-row on tablet */}
        <FooterCol title="Company" links={companyLinks} />
        <FooterCol title="Help" links={helpLinks} />
        <FooterCol title="Resources" links={resourceLinks} />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1e1b3a] text-center py-6 px-6 sm:px-10 ">
        <p className="text-[#9e9eb8] text-sm leading-relaxed">
          © Copyright {currentYear}, All Rights Reserved by{" "}
          <span className="text-[#c5c5d8]">XYz</span>
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center hover:bg-[#4285F4] hover:text-white transition-colors no-underline"
    >
      {children}
    </Link>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[15px] font-semibold text-[#3c4043] mb-5">{title}</h4>
      <ul className="list-none flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors no-underline"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
