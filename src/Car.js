import { useState } from 'react';
function Car() {
    const [color, setColor] = useState("#002200");
    return (
        <div className='shadow-lg rounded-lg my-5 flex flex-wrap gap-3 md:w-96 m-auto justify-center items-center p-4'>
            <div className='w-96 my-5 m-auto'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 640.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
                    fill={color} stroke="none">
                    <path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9
                    -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421
                    -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80
                    c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5
                    -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58
                    13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132
                    -143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230
                    50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106
                    29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45
                    461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460
                    -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180
                    28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2
                    190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274
                    -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139
                    c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30
                    c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539
                    71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59
                    326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194
                    -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141
                    -88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39
                    -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9
                    256 -20z"/>
                    <path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410
                    113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467
                    -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209
                    -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242
                    -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110
                    237 178 385 206 84 16 235 11 320 -11z"/>
                    <path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48
                    31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>
                    <path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0
                    15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>
                    <path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3
                    121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>
                    <path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9
                    181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>
                    <path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13
                    -45 -6z"/>
                    <path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42
                    41 100 -1 143 -33 32 -78 38 -120 15z"/>
                    <path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
                    -54 2z"/>
                    <path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49
                    -58 29z"/>
                    <path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23
                    103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>
                    <path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0
                    86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>
                    <path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24
                    45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>
                    <path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101
                    l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>
                    <path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262
                    68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>
                    <path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289
                    -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392
                    1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67
                    -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516
                    745 122 40 289 42 419 5z"/>
                    <path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23
                    18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>
                    <path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60
                    128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>
                    <path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7
                    278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>
                    <path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5
                    172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>
                    <path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23
                    19 -46 5z"/>
                    <path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12
                    39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>
                    <path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
                    -54 2z"/>
                    <path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25
                    44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>
                    <path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61
                    210 250 207 258 -4 12 -176 17 -272 7z"/>
                    <path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0
                    20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>
                    <path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68
                    26z"/>
                    <path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103
                    l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>
                    <path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0
                    130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>
                    </g>
                </svg>
            </div>
            <div>
                <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color</label>
                <input type="color" onChange={(e) => setColor(e.target.value)} id="color" className="p-0.5 shadow bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Color" />
            </div>
            <div className='w-full'>
                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="modalEl">
                Toggle modal
                </button>
                <div id="modalEl" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                    Terms of Service
                                </h3>
                                <button type="button"  data-modal-toggle="modalEl" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Car;