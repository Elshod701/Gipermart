import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import AboutCard from "./AboutCard/AboutCard";
import { nanoid } from "nanoid";
const About = () => {
  const { datakey } = useParams();
  const [categoryCard, setCategoryCard] = React.useState([]);
  const [item, setItem] = React.useState([]);
  const filtered = categoryCard.filter((e) => e.datakey == datakey);

  React.useEffect(() => {
    request(`/${datakey}`).then((res) => setItem(res.data));
  }, []);

  React.useEffect(() => {
    request("/category").then((res) => setCategoryCard(res.data));
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container flex items-center gap-3">
            <Link to="/">Главная / </Link>
            <p>{filtered[0]?.title}</p>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="wrapper w-[1000px]">
              <h1 className="title text-[24px] font-jost-semibold py-7">
                {filtered[0]?.title}
              </h1>
              <div className="box flex flex-wrap items-center justify-between gap-x-[48px] gap-y-[20px]">
                {item?.map((e) => (
                  <Link to={`/single/${e.brand}/${e.id}`} key={nanoid()}>
                    <AboutCard {...e} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default About;
