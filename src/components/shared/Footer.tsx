"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t">

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">Totsy</h2>
          <p className="text-gray-600 mt-3 text-sm">
            Totsy is your happy place for kids toys, learning games,
            and fun gifts. Safe, colorful and loved by parents.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-pink-500" />
            <Instagram className="cursor-pointer hover:text-pink-500" />
            <Twitter className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/toys">Toys</Link></li>
            <li><Link href="/fashion">Kids Fashion</Link></li>
            <li><Link href="/books">Books</Link></li>
            <li><Link href="/learning">Learning</Link></li>
            <li><Link href="/games">Games</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Join Our Newsletter</h3>

          <p className="text-gray-600 text-sm mb-3">
            Get updates about new toys and special offers.
          </p>

          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full outline-none text-sm"
            />

            <button className="bg-pink-500 text-white px-4 flex items-center">
              <Mail size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Totsy. All rights reserved.
      </div>

    </footer>
  );
}
