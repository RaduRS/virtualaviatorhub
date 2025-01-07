import React from "react";
import Link from "next/link";
import { FacebookIcon, YoutubeIcon, InstagramIcon } from "lucide-react";

const socialLinks = [
  { href: "https://facebook.com", alt: "Facebook", Icon: FacebookIcon },
  { href: "https://instagram.com", alt: "Instagram", Icon: InstagramIcon },
  { href: "https://youtube.com", alt: "YouTube", Icon: YoutubeIcon },
];

const SITE_NAME = "Virtual Aviator Hub";
const COPYRIGHT_YEAR = new Date().getFullYear();

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    console.log("Subscribed Email:", email);
  };

  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Topics
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest insights on aviation and flight
            simulation.
          </p>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border px-3 py-2 rounded-l-md w-2/3"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@virtualaviatorhub.com"
              className="hover:underline"
            >
              support@virtualaviatorhub.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 234 567 890
            </a>
          </p>

          <h3 className="font-bold text-lg mt-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2 justify-center md:justify-start">
            {socialLinks.map(({ href, alt, Icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${alt} profile`}
                className="text-white hover:text-blue-500 transition"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-4">
        <p className="text-sm text-gray-500">
          © {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
