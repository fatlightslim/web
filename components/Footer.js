import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="py-8 text-center md:text-left">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
          <div className="flex items-center flex-col lg:flex-row mx-auto">
              <Logo />
            <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">
              Copyright © 2020
            </span>
          </div>

          <div className="navbar mx-auto">
            <ul className="navbar-nav flex flex-">
              <li className=" active px-md-3 px-2">
                <a
                  className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className=" px-md-3 px-2">
                <a
                  className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out"
                  href="features.html"
                >
                  Features
                </a>
              </li>
              <li className=" px-md-3 px-2">
                <a
                  className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out"
                  href="pricing.html"
                >
                  Pricing
                </a>
              </li>
              <li className=" px-md-2 px-2 hidden lg:block">
                <a
                  className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out"
                  href="login.html"
                >
                  Login
                </a>
              </li>
              <li className=" px-md-2 px-2 signup hidden lg:block">
                <a
                  className=" text-md text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold cursor-pointer transition duration-500 ease-in-out"
                  href="signup.html"
                >
                  Signup for free
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
