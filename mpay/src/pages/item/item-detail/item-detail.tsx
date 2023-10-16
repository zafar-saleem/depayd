import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { Header } from "./components/header";
import "./item-detail.styles.css";
import "./components/header/header.styles.css";
import like from "../assets/like.webp";
import flag from "../assets/flag.webp";
import comment from "../assets/comment.webp";
import sold from "../assets/sold.webp";
import { Bar } from "./components/bar";
import { Centerise } from "../../../components/utils/centerise";

export const ItemDetail = () => {
  const { slug } = useParams();
  const { isLoading, error, data } = useQuery('items/:id', async () => {
    const { data } = await axios.get(
      `http://localhost:8000/items/${slug}`
    );

    return data;
  });

  if (isLoading) {
    return (
      <Centerise>
        <p>Loading...</p>
      </Centerise>
    )
  }

  if (error) {
    return (
      <Centerise>
        <p className="txt-error">There was an error retrieving requested information</p>
      </Centerise>
    )
  }

  const {
    price,
    shipping_fee,
  } = data;

  return (
    <>
      <Header {...data}></Header>
      <div className="cover">
        {data.is_sold_out && <img src={sold} alt="sold" className="cover-sold" />}
        <img className="cover-product mt-400" src={data.image} alt={data.name} />
      </div>
      <h2 className="title txt-alin-l pr-100 pb-100 pl-100">{data.name}</h2>
      <div className="actions txt-alin-r">
        <span className="actions-c1">
          <Link className="actions-c1__like-c" to="#">
            <img className="like" src={like} alt="like icon" />
            <span className="txt-000">のりしん</span>
          </Link>
          <span className="like-count ml-000">{data.like_count}</span>
        </span>
        <Link className="actions__comment-c ml-200" to="#">
          <img className="actions__comment" src={comment} alt="like icon" />
          <span className="txt-000 ml-000 txt-bold">のりしん</span>
        </Link>
        <span className="flag-c txt-r mr-100">
          <img className="flag" src={flag} alt="flag icon" />
        </span>
      </div>
      <h3 className="desc p-100 txt-color-400">のりしん</h3>
      <p className="txt-color-800 pl-100 pr-100 mb-500">
        {data.description}
      </p>
      <Bar price={price} shippingfee={shipping_fee} />
    </>
  )
}
