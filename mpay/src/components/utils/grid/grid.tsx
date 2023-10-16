import { Props } from "./interfaces";
import "./grid.styles.css";

export const Grid = ({ children }: Props) => {
  return (
    <section className="grid">{children}</section>
  )
}
