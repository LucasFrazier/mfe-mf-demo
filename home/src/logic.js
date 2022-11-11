const API_SERVER = "http://localhost:8080";

// Product
export const getProducts = async () => {
  const res = await fetch(`${API_SERVER}/products`);
  const data = await res.json();

  return data;
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_SERVER}/products/${id}`);
  const data = await res.json();

  return data;
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// User
export const getJwt = async (username, password) => {
  const res = await fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await res.json();

  return data.access_token;
};

//Cart
export const getCart = async (jwt) => {
  const res = await fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await res.json();

  return data;
};

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

// export const deleteCart = async (jwt) => {
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
