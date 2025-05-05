import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-700 pb-10">
        <div className="flex-1">
          <h3 className="font-semibold mb-2">BE THE FIRST TO KNOW</h3>
          <p className="mb-4">Sign up for updates from mettā muse.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="px-4 py-2 w-full max-w-xs rounded-l-md text-black"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">CURRENCY</h3>
            <p>🇺🇸 USD</p>
            <p className="text-xs text-gray-400 mt-1">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div>
          <h4 className="font-semibold mb-3">mettā muse</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">QUICK LINKS</h4>
          <ul className="space-y-1">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">FOLLOW US</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                className="w-6 h-6"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                className="w-6 h-6"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">mettā muse ACCEPTS</h4>
          <div className="flex flex-wrap gap-2">
            <img
              src="https://img.icons8.com/color/48/000000/google-pay-india.png"
              className="h-6"
              alt="GPay"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              className="h-6"
              alt="Mastercard"
            />
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              className="h-6"
              alt="Visa"
            />
            <img
              src="https://img.icons8.com/color/48/000000/amex.png"
              className="h-6"
              alt="Amex"
            />
            <img
              src="https://img.icons8.com/color/48/000000/apple-pay.png"
              className="h-6"
              alt="Apple Pay"
            />
            <img
              src="https://img.icons8.com/color/48/000000/paypal.png"
              className="h-6"
              alt="PayPal"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
