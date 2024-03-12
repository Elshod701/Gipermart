import React from "react";
import { useParams, Link } from "react-router-dom";
import { request } from "../../config/request";
import SingleCard from "./SingleCard";

const Single = () => {
  const product = useParams();
  const [single, setSingle] = React.useState();

  React.useEffect(() => {
    request
      .get(`${product.brand}/${product.id}`)
      .then((res) => setSingle(res.data));
  }, []);

  return (
    <main>
      <section>
        <div className="container flex items-center gap-3">
          <Link to="/">Главная </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="box">
            <SingleCard {...single} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Single;
