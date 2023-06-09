import { atom } from "jotai";

export const onMetaWidgetAtom = atom<any>(undefined)
export const onMetaAlready = atom<boolean>(false)

export enum Provider {
    ONRAMP = "ONRAMP",
    ONMETA = "ONMETA",
    ALPYNE = "ALPYNE",
    TRANSAK = "TRANSAK"
}

export const onrampProviderAtom = atom<Provider>(Provider.ONRAMP)

export const BASE_URL = "http://localhost:5001/v1";

export const onrampURL = atom<string>("")
export const nftAtom = atom<any>(undefined)
export const quoteAtom = atom<any>(undefined)