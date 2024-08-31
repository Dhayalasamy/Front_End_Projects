
import { useState } from "react"

function Sidebar({openMenu}){
    const [showTab1, setShowTab1] = useState(false)
    const [showTab2, setShowTab2] = useState(false)
    
   return (
    <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        {/*close menu for smaller device*/}
        <div className="flex px-4 pb-2 pt-5">
            <button type="button" onClick={() => openMenu(false)}  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Close menu</span>
                {/*close button*/}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        {/*Tab buttons*/}
        <div className="mt-2">
            <div className="border-b border-gray-200">
            <div className="-mb-px flex space-x-8 px-4" >
                <button onClick={() => setShowTab1(true)} className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" type="button">Women</button>
                <button onClick={() => setShowTab2(true)} className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" type="button">Men</button>
            </div>
        </div>
        {/*Tab-1*/}
        {showTab1 &&  <div id="tabs-1-panel-1" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
            
            <div>
            <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
            <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Dresses</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Pants</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Denim</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Sweaters</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">T-Shirts</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Jackets</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Activewear</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Browse All</a>
                </li>
            </ul>
            </div>
            <div>
            <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
            <ul role="list" aria-labelledby="women-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Wallets</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Bags</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Sunglasses</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Hats</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Belts</a>
                </li>
            </ul>
            </div>
            <div>
            <p id="women-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
            <ul role="list" aria-labelledby="women-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">My Way</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Counterfeit</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Significant Other</a>
                </li>
            </ul>
            </div>
        </div>}
        {/*Tab-2*/}
        {showTab2 && <div id="tabs-1-panel-2" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
            <div className="grid grid-cols-2 gap-x-4">
            <div className="group relative text-sm">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-cover object-center"/>
                </div>
                <a href="#" className="mt-6 block font-medium text-gray-900">
                <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                New Arrivals
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
            </div>
            <div className="group relative text-sm">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-cover object-center"/>
                </div>
                <a href="#" className="mt-6 block font-medium text-gray-900">
                <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                Artwork Tees
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
            </div>
            </div>
            <div>
            <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
            <ul role="list" aria-labelledby="men-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Pants</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Sweaters</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">T-Shirts</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Jackets</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Activewear</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Browse All</a>
                </li>
            </ul>
            </div>
            <div>
            <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
            <ul role="list" aria-labelledby="men-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Wallets</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Bags</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Sunglasses</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Hats</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Belts</a>
                </li>
            </ul>
            </div>
            <div>
            <p id="men-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
            <ul role="list" aria-labelledby="men-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Counterfeit</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
                <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-500">My Way</a>
                </li>
            </ul>
            </div>
        </div>}
        </div>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Company</a>
            </div>
            <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Stores</a>
            </div>
        </div>
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
                <a href="#" className="-m-2 block p-2 text-blue-700 bg-White border border-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 hover:text-white hover:bg-blue-700  font-medium rounded-full text-sm  text-center">Sign in</a>
            </div>
        </div>

    
    </div>
   )
}

export default Sidebar