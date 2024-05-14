import React from 'react';
import Katalog from "./Katalog";
import { useState } from 'react';
import Banner from './Banner';

export default function BannerOrKatalog() {
    const [KatalogShow, setKatalogShow] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center">
            {KatalogShow ? <Katalog setKatalogShow={setKatalogShow} /> : <Banner />}
            <button
                onClick={() => { setKatalogShow(true) }}
                className="mt-4 bg-transparent text-black font-bold py-2 px-3 rounded-full border-2 border-yellow-600 transition duration-300 hover:bg-amber-50 hover:bg-opacity-100 hover:bg-gradient-to-r from-transparent to-amber-100"
            >
                לצפייה במוצרים
            </button>
        </div>
    )
}
