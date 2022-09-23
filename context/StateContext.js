import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [timeLeft, setTimeLeft] = useState();

  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  useEffect(() => {
    const interval = setInterval(() => {
      const daysLeft =
        new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        ).getDate() - new Date().getDate();
      const hoursLeft = 24 - new Date().getHours();
      const minutesLeft = 60 - new Date().getMinutes();
      const secondsLeft = 60 - new Date().getSeconds();

      const days = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
      const hours = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
      const minutes = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
      const seconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
      setTimeLeft(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let foundProduct;
  let index;  


  // save cartItems, totalQuantities, qty, totalPrice so they persist on refresh
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    const totalQuantities = localStorage.getItem("totalQuantities");
    const totalPrice = localStorage.getItem("totalPrice");

    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
    if (totalQuantities) {
      setTotalQuantities(JSON.parse(totalQuantities));
    }
    if (totalPrice) {
      setTotalPrice(JSON.parse(totalPrice));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cartItems, totalQuantities, totalPrice, qty]);

  // clear local storage

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems?.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to cart`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        currentMonth,
        timeLeft,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
