import { Link } from "react-router-dom";
import "./nav.styles.css";
import arrow from "./assets/arrow.webp";
import { Props } from "./interfaces";
import React from "react";

const list = [
  {
    category: 0,
    label: "すべて",
    active: true,
  },
  {
    category: 2,
    label: "千寿と",
    active: false,
  },
  {
    category: 3,
    label: "のりしん",
    active: false,
  },
  {
    category: 4,
    label: "タンク",
    active: false,
  },
  {
    category: 5,
    label: "ちきい",
    active: false,
  },
]

export const Nav = ({ categories, filter }: Props) => {
  const [state, updateState] = React.useState(list);

  React.useEffect(() => {
    updateState(list?.map((item, index) => {
       if (index === 0) {
        item.active = true;
        return item;
       } else {
        item.active = false;
        return item;
      }
    }));
  }, []);
  
  return (
    <>
      <nav className="nav txt-alin-c">
        {
          state.map((item, index) => (
            <Link key={index} className={`nav-item ${item?.active && 'active'}`} to={`#${categories[index]}`} onClick={(event) => {
              event.preventDefault();
              filter(categories[index]);
              state.map((item) => {
                item.active = false;
                if (item.category === categories[index]) {
                  item.active = !item.active;
                }
              });
            }}>
              {item.label}
              {item.active && <img src={arrow} alt="indicator active" className="indicator" />}
            </Link>
          ))
        }
      </nav>
    </>
  )
}
