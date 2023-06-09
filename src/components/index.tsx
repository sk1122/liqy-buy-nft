import { useBuyToken } from "@/hooks/onmeta"
import { onMetaWidgetAtom, onrampURL, Provider, quoteAtom } from "@/state"
import { useAtom } from "jotai"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"
import { OnrampWebSDK } from '@onramp.money/onramp-web-sdk';
import { useAlpyne } from "@/hooks/alpyne"

const inter = Inter({ subsets: ['latin'] })

export const OnrampProvider = ({ setPaying }: { setPaying: any }) => {
    const { createWidget } = useBuyToken()
    const { generateURL } = useAlpyne()
    const [hidden, setHidden] = useState(true)
    const [widget, setWidget] = useAtom(onMetaWidgetAtom)
    const [url, setURL] = useAtom(onrampURL)

    const [quote] = useAtom(quoteAtom)

    // const loadWidget = async () => {
    //     if(!quote) return

        
    //     setURL()
    // }

    // useEffect(() => {
    //     loadWidget()
    // }, [quote])

    return (
        <div className="z-50 absolute top-0 left-0 bg-white w-full h-full justify-center items-center">
            <div className="z-50 w-full h-10 p-4 flex justify-center items-center">
                <h1 className="text-xl font-bold w-full h-full text-black" style={inter.style}>Liqy</h1>
                <div className="w-full h-full flex justify-end">
                    <button onClick={() => setHidden(hidden => !hidden)} type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
                        <svg viewBox="0 0 60 80" width="20" height="20">
                            <rect width="60" height="10" rx="4"></rect>
                            <rect y="30" width="60" height="10" rx="4"></rect>
                            <rect y="60" width="60" height="10" rx="4"></rect>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='w-full h-full justify-center items-center'>
                {url && 
                    <div className="w-full h-full ">
                        <iframe src={url}
                            height="630px"
                            width="100%"
                        />
                    </div>
                }
            </div>
            <div id="drawer-bottom-example" className={(hidden ? "hidden" : "") + " fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"} tabIndex={-1} aria-labelledby="drawer-bottom-label">
                <h5 id="drawer-bottom-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Cancel Buying NFTs?
                </h5>
                <button onClick={() => setHidden(true)} type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
                <div onClick={() => {document.getElementById("widget")?.remove();setPaying(false)}} className="px-4 py-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</div>
            </div>
        </div>
    )
}