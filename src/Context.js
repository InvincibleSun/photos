import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

let storage = localStorage.getItem("cart") || [];
if (typeof storage === "string") {
  storage = JSON.parse(storage);
}

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState(storage);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedFavArr = allPhotos.map((img) => {
      if (id === img.id) {
        return { ...img, isFavorite: !img.isFavorite };
      }
      return img;
    });

    setAllPhotos(updatedFavArr);
  }

  function addToCart(pickedPhoto) {
    const newCardItems = [...cartItems, pickedPhoto];
    setCartItems(newCardItems);
    localStorage.setItem("cart", JSON.stringify(newCardItems));
  }

  function removeFromCart(id) {
    const newCardItems = cartItems.filter((img) => img.id !== id);
    setCartItems(newCardItems);
    localStorage.setItem("cart", JSON.stringify(newCardItems));
  }

  function emptyCart() {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return (
    <Context.Provider
      value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
