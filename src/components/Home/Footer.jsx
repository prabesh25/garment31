import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-white mt-20 text-black px-6 py-10 border-t">
        <p className="mb-10">HM.com / MEN</p>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Shop */}
        <div>
          <h3 className="font-bold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li>LADIES</li>
            <li>MEN</li>
            <li>KIDS</li>
            <li>HOME</li>
            <li>MAGAZINE</li>
          </ul>
        </div>

        {/* Corporate Info */}
        <div>
          <h3 className="font-bold mb-2">Corporate Info</h3>
          <ul className="space-y-1">
            <li>CAREER AT H&M</li>
            <li>ABOUT H&M GROUP</li>
            <li>SUSTAINABILITY H&M GROUP</li>
            <li>PRESS</li>
            <li>INVESTOR RELATIONS</li>
            <li>CORPORATE GOVERNANCE</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li>CUSTOMER SERVICE</li>
            <li>MY H&M</li>
            <li>FIND A STORE</li>
            <li>LEGAL & PRIVACY</li>
            <li>CONTACT</li>
            <li>SECURE SHOPPING</li>
            <li>COOKIE NOTICE</li>
            <li>COOKIE SETTINGS</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="mb-2">
            Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
          </p>
          <a href="#" className="underline">READ MORE</a>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold italic">H&M</div>
          <div className="mt-2">
            Nepa (Rs.) <a href="#" className="underline">CHANGE REGION</a>
          </div>
        </div>

        <div className="flex gap-4 text-xl">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-spotify"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-facebook-f"></i>
        </div>
      </div>

      <div className="text-center text-xs mt-4">
        The content of this site is copyright-protected and is the property of Pixpoint Solutions pvt.ltd
      </div>
    </footer>
  )
}

export default Footer;
