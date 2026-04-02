import Link from 'next/link';

const companyLinks = ['About', 'Features', 'Works', 'Career'];
const helpLinks = ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'];
const resourceLinks = ['Free eBooks', 'Development Tutorial', 'How to – Blog', 'Youtube Playlist'];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="text-[28px] font-bold tracking-tight no-underline block mb-5">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </Link>
          <p className="text-[#5f6368] text-sm leading-7 max-w-[280px] mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
            accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
            amet adipiscing fermentum.
          </p>
          <div className="flex gap-4">
            {/* Twitter */}
            <SocialLink href="#" label="Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.928l4.279 5.659zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialLink>
            {/* Facebook */}
            <SocialLink href="#" label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialLink>
            {/* Instagram */}
            <SocialLink href="#" label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </SocialLink>
            {/* GitHub */}
            <SocialLink href="#" label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* Company */}
        <FooterCol title="Company" links={companyLinks} />
        {/* Help */}
        <FooterCol title="Help" links={helpLinks} />
        {/* Resources */}
        <FooterCol title="Resources" links={resourceLinks} />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1e1b3a] text-center py-4 px-10">
        <p className="text-[#9e9eb8] text-sm">
          © Copyright 2024, All Rights Reserved by <span className="text-[#c5c5d8]">XYz</span>
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
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
            <Link href="#" className="text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors no-underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}