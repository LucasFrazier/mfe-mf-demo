import create from "zustand";
import { productData } from "./data";
import { getJwt, getCart } from "./logic";

export const useStore = create((set) => ({
  // User
  loggedIn: false,
  username: "",
  password: "",
  jwt: "",
  login: async (username, password) => {
    set(() => ({ username: username }));
    set(() => ({ password: password }));
    set(() => ({ loggedIn: true }));
    const token = await getJwt(username, password);
    set(() => ({ jwt: token }));
    const cartData = await getCart(token);
    set(() => ({ cart: cartData.cartItems }));
  },
  logout: () => {
    set(() => ({ username: "" }));
    set(() => ({ password: "" }));
    set(() => ({ loggedIn: false }));
    set(() => ({ jwt: "" }));
    set(() => ({ cart: [] }));
  },
  // Cart
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
  //Products
  products: productData,
  setProducts: (products) => set(() => ({ products: products })),
}));
