import { Props } from "./interfaces";
import "./centerise.styles.css";

export const Centerise = ({ children }: Props) => {
  return (
    <section className="center">{children}</section>
  )
}
