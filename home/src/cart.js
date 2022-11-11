// import React, { useEffect } from "react";
// import { BehaviorSubject } from "rxjs";

// const API_SERVER = "http://localhost:8080";

// export const jwt = new BehaviorSubject(null);
// // export const cart = new BehaviorSubject(null);

// export const getCart = async () => {
//   // const res = await fetch(`${API_SERVER}/cart`, {
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     Authorization: `Bearer ${jwt.value}`,
//   //   },
//   // });
//   // const data = await res.json();

//   // cart.next(data);
//   setCart(data);
//   return data;
// };

// export const addToCart = async (id) => {
//   const res = await fetch(`${API_SERVER}/cart`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${jwt.value}`,
//     },
//     body: JSON.stringify({ id }),
//   });
//   const data = await res.json();

//   getCart();
// };

// export const clearCart = async () => {
//   const res = await fetch(`${API_SERVER}/cart`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${jwt.value}`,
//     },
//   });
//   const data = await res.json();

//   getCart();
// };

// export const login = async (username, password) => {
//   const res = await fetch(`${API_SERVER}/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });
//   const data = await res.json();

//   jwt.next(data.access_token);
//   getCart();
//   return data.access_token;
// };

// export const useLoggedIn = () => {
//   const { loggedIn, setLoggedIn } = useStore();

//   useEffect(() => {
//     setLoggedIn(!!jwt.value);

//     const subscribeToJwt = () => {
//       return jwt.subscribe((c) => {
//         setLoggedIn(!!jwt.value);
//       });
//     };

//     subscribeToJwt();
//   }, []);

//   return loggedIn;
// };
