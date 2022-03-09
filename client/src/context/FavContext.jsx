import localSFav from "helpers/localSFav";
import React, { createContext, useContext, useEffect, useState } from "react";
import favService from "services/fav.service";
import { useUser } from "./UserContext";

const FavContext = createContext();
const FavProvider = ({ children }) => {
  const [favData, setFavData] = useState();
  const [favSubtotal, setfavSubtotal] = useState(0);
  const [favTotal, setfavTotal] = useState(0);
  const { isLoggedIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (isLoggedIn) {
      const saveLocalFav = async () => {
        const favObj = localSFav
          .getItems()
          .map(({ product_id }) => favService.addToFav(product_id));

        await Promise.all(favObj);
        localSFav.clearfav();
        favService.getFav().then((res) => {
          setFavData(res?.data);
          setIsLoading(false);
        });
      };
      saveLocalFav();
    } else {
      const items = localSFav.getItems();
      if (items === null) {
        return;
      }
      setFavData({ items: [...items] });
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
   const quantity = favData?.items?.reduce((acc, cur) => {
     return acc + Number(cur.quantity);
   }, 0);
   const totalAmt = favData?.items.reduce((acc, cur) => {
     return acc + Number(cur.subtotal);
   }, 0);
   setfavSubtotal(totalAmt);
   setfavTotal(quantity);
 }, [favData]);

  const addItemFav = async (product) => {
    if (isLoggedIn) {
      try {
        const { data } = await favService.addToFav(product.product_id);
        setFavData({ items: [...data.data] });
      } catch (error) {
        return error;
      }
    } else {
      localSFav.addItemFav(product, 1);
      setFavData({ ...favData, items: localSFav.getItems() });
    }
  };

  const deleteItem = (product_id) => {
     if(isLoggedIn) {
        const {items} = favData;
        favService.removeFromFav(product_id).then(() => {
           const data = items.filter((item) => item.product_id !== product_id);
           setFavData({...favData, items: data})
        });
     } else {
        localSFav.removeItem(product_id);
        setFavData({...favData, items: localSFav.getItems()});
     }
  }

  return (
     <FavContext.Provider
      value={{
         isLoading,
         favData,
         setFavData,
         addItemFav,
         deleteItem,
         favTotal,
         favSubtotal
      }}>
         {children}
      </FavContext.Provider>
  )
};

const useFav = () => {
   const context = useContext(FavContext);
   if(context === undefined) {
      throw new Error("useFav must be used within a FavProvider");
   }
   return context;
}

export {FavProvider, useFav}
