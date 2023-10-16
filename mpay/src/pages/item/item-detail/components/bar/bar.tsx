import "./bar.styles.css";
import { Props } from "./interface";

export const Bar = ({ price, shippingfee }: Props) => {
  // console.log(price);
  return (
    <div className="bar p-100">
      <span className="mr-000">¥{price}</span>
      <span className="shipping-fee ml">{shippingfee}</span>
      <button className={`btn btn-add pt-000 pb-000 pl-100 pr-100 ${price.toString().length > 2 ? `ml-900` : `ml-1000`}`}>なちのりつ</button>
    </div>
  )
}
