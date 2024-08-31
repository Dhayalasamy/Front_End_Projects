import { useState } from "react"
import { Link } from "react-router-dom";


import Sidebar from "./Sidebar"
function Navbar({display}){
    const [openMenu, setOpenMenu] = useState(false)
    const [showTab1, setShowTab1] = useState(false)
    const [showTab2, setShowTab2] = useState(false)
    return (
        <div className={`bg-white ${!display ? 'mt-0' : 'mt-10'}`}> {/*navbar for both smaller and larger device*/}
            {/* navbar for both smaller device : show/hide based on Side bar for smaller device*/}
            {openMenu && <div className={` relative z-40 lg:hidden `} open={openMenu} onClose={setOpenMenu} >
                {/*backdrop styling [overall screen]*/}
                <div transition className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-900 ease-linear data-[closed]:opacity-0" ></div>
                    {/* show/hide based on Side bar for smaller device */} {/*PARENT FLEXBOX*/}
                    <div className={`fixed inset-0 z-40 flex ${!display ? 'mt-0' : 'mt-10'}`}>
                        {/*CHILD FLEXBOX*/}
                        <Sidebar openMenu={setOpenMenu}/>
                    </div>
            </div>
            }
            {/* navbar for both larger device */}
            <header className="relative bg-white">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button type="button" onClick={() => setOpenMenu(true)}  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>

                        <div className="ml-4 flex lg:ml-0">
                            <Link to="/">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                            </Link>
                        </div>

                        <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                            <div className="flex">
                                <div className="relative flex">
                                {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                                <button type="button" onClick={() => setShowTab1(true)} className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600" aria-expanded="false">Women</button>
                                </div>

                                {showTab1 && <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                                <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    
                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        <div>
                                            <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                                            <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Tops</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Dresses</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Pants</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Denim</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Sweaters</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">T-Shirts</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Jackets</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Activewear</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Browse All</a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Watches</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Wallets</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Bags</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Sunglasses</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Hats</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Belts</a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Full Nelson</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">My Way</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Re-Arranged</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Counterfeit</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Significant Other</a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>}
                                
                            </div>
                            <div className="flex">
                                <div className="relative flex">
                                <button type="button" onClick={() => setShowTab2(true)} className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Men</button>
                                </div>
                                {showTab2 && <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                                <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                        
                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        <div>
                                            <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                                            <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Tops</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Pants</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Sweaters</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">T-Shirts</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Jackets</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Activewear</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Browse All</a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Watches</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Wallets</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Bags</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Sunglasses</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Hats</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Belts</a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Re-Arranged</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Counterfeit</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">Full Nelson</a>
                                            </li>
                                            <li className="flex">
                                                <a href="#" className="hover:text-gray-800">My Way</a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>}
                            
                                
                            </div>

                            <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
                            <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
                            </div>
                        </div>

                        <div className="ml-auto flex items-center">
                        
                            <div className="flex lg:ml-6">
                                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Search</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="ml-4 flow-root lg:ml-6">
                                <a href="#" className="group -m-2 flex items-center p-2">
                                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                            
                            <div class="ml-4 lg:ml-6 hidden lg:flex">
                                <a href="#" className="flex items-center px-3 p-1 text-blue-700 bg-White border border-blue-700   hover:text-white hover:bg-blue-700  font-medium rounded-full text-sm  text-center">Sign in</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

            )
        }

        export default Navbar