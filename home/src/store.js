import create from "zustand";
import { productData } from "./productData";

export const useStore = create((set) => ({
  loggedIn: false,
  username: "",
  password: "",
  login: (username, password) => {
    set(() => ({ username: username }));
    set(() => ({ password: password }));
    set(() => ({ loggedIn: true }));
  },
  logout: () => {
    set(() => ({ username: "" }));
    set(() => ({ password: "" }));
    set(() => ({ loggedIn: false }));
  },
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set(() => ({ cart: [] })),
  products: productData,
  setProducts: (products) => set(() => ({ products: products })),
}));
