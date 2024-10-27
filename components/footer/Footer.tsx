import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-800 px-4 py-8 text-white">
      <div className="container flex flex-col items-center justify-between lg:flex-row">
        {/* Logo & Description */}
        <div className="mb-4 flex-1 text-center md:mb-2 lg:text-left">
          <div className="rounded-md px-2 text-2xl font-semibold">
            <p className="inline-block rounded-md bg-gray-900 px-2 py-2">
              burada<span className="text-sm md:text-lg">.com</span>
            </p>
          </div>
          <p className="mt-2 px-2 text-gray-400">
            Güvenilir ürünler ve hizmetler sunuyoruz.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 items-center justify-center space-x-4">
          <Link href="/about" className="hover:text-gray-300">
            Hakkımızda
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Hizmetler
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            İletişim
          </Link>
          <Link href="/privacy" className="hover:text-gray-300">
            Gizlilik
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex flex-1 items-center justify-center lg:justify-end space-x-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} burada.com Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
