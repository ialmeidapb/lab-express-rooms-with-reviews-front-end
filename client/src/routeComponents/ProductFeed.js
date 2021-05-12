import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import api from "../apis/index";

function ProductFeed() {
    const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await api.get("/rooms");

        setRooms([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRooms();
  }, []);

  return (
    <div className="row">
      {rooms.map((room) => {
        return (
          <div key={room._id} className="col-12 col-sm-4 col-md-3">
            <ProductCard room={room} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductFeed;