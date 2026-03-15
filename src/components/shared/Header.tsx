"use client";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    
    return (
        <header className="w-full shadow bg-white sticky top-0 z-50">

          {/*Main Header*/}
          <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <Menu size={26} />
            </button>

            {/* Logo */}
            <Link href="/">
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="Totsy logo"
                width={100}
                height={20}
                priority
              />
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-8 pb-3 text-sm font-medium">

        <Link href="/toys" className="hover:text-pink-500">
          Toys
        </Link>

        <Link href="/fashion" className="hover:text-pink-500">
          Kids Fashion
        </Link>

        <Link href="/books" className="hover:text-pink-500">
          Books
        </Link>

        <Link href="/learning" className="hover:text-pink-500">
          Learning
        </Link>

        <Link href="/games" className="hover:text-pink-500">
          Games
        </Link>

        <Link href="/gifts" className="hover:text-pink-500">
          Gifts
        </Link>

      </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-1/3">
              <Search size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search for Toys, Games..."
                className="w-full outline-none"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <Link href="/account">
                <User className="cursor-pointer" />
              </Link>

              <Link href="/wishlist">
                <Heart className="cursor-pointer"/>
              </Link>

              <Link href="/cart" className="relative">
                <ShoppingCart className="cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full">
                  2
                </span>
              </Link>
            </div>
        </div>
        
        {/* Navigation Menu */}
      

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t">

          <Link href="/toys">Toys</Link>
          <Link href="/fashion">Kids Fashion</Link>
          <Link href="/books">Books</Link>
          <Link href="/learning">Learning</Link>
          <Link href="/games">Games</Link>
          <Link href="/gifts">Gifts</Link>

        </div>
      )}
        </header>
    )
}