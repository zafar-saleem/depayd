import { Link } from "react-router-dom";
import "./card.styles.css";
import { IItem } from "../../interfaces";
import sold from "../../../assets/sold.webp";
import like from "../../../assets/like.webp";

export const Card = ({ ...rest }: IItem) => {
  const truncateTitle = (title: string) => {
    if (title.length > 14) {
      return `${title.substring(0, 15)}...`;
    }
    return title;
  };

  return (
    <div className="card">
      {rest.is_sold_out && <img src={sold} alt="sold" className="sold" />}
      <img className="card-cover" src={rest.image} alt={rest.name} />
      <div className="card-meta">
        <h1 className="card-meta__title"><Link to={`detail/${rest.id}`}>{truncateTitle(rest.name)}</Link></h1>
        <div className="card-meta__c1">
          <span className="card-meta__price">¥{rest.price}</span>
          <span className="card-meta__likes">
            <img src={like} alt="sold" className="like" />
            <span className="card-meta__count">{rest.like_count}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
