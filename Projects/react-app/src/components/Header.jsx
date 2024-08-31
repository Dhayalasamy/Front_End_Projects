import { Link } from "react-router-dom";

function Header({ children }) {
  return (
      <div
        className="fixed  h-10 top-0 start-0 z-50 flex justify-between w-full bg-stone-950 py-1 "
      >
        <div className="flex items-center mx-auto ">
          <p className="flex items-center text-xs text-center md:text-sm font-normal text-neutral-50 animate-slideFromUp">
            <span>
              Sign up and get 30% off to your first Order.
              <Link
                to="signup"
                className="inline-flex items-center ml-2  text-blue-500 hover:underline"
              >
                Sign Up Now
                {/*----------------svg for arrow icon-----------------*/}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                {/*----------------svg for arrow icon-----------------*/}
              </Link>
            </span>
          </p>
        </div>
        {children}
      </div>
  );
}

export default Header;
