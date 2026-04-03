import Image from "next/image";
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
           
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
       
          </Link>
          <p className="text-[#5f6368] text-sm leading-7  mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="flex gap-4">
            {/* Social Links remain horizontal on all screens */}
            <SocialLink href="#" label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.928l4.279 5.659zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>

            {/* Facebook */}
            <SocialLink href="#" label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialLink>

            {/* Instagram */}
            <SocialLink href="#" label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialLink>

            {/* GitHub */}
            <SocialLink href="#" label="GitHub">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>
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
