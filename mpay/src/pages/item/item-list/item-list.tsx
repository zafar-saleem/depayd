import {
  useQuery,
} from "react-query";
import axios from "axios";
import { Nav } from "./components/nav";
import { Card } from "./components/card";
import { Grid } from "../../../components";
import { IItem } from "./interfaces";
import { Spinner } from "../../../components/utils/spinner";
import { Centerise } from "../../../components/utils/centerise";
import React from "react";

export const ItemList = () => {
  const [category, updateCategories] = React.useState<number[]>([]);
  const [products, updateProducts] = React.useState<IItem[]>([]);
  const [filtered, updateFilteredProducts] = React.useState<IItem[]>([]);
  const { isLoading, error, data } = useQuery('items', async () => {
    const { data } = await axios.get("http://localhost:8000/items");

    return data;
  });

  React.useEffect(() => {
    if (data) {
      updateProducts(data.data);
      updateCategories([0, ...new Set([...data.data.map((category: IItem) => category.category_id)])]);
    }

  }, [data]);

  const filter = React.useCallback((id: number) => {
    updateFilteredProducts([]);
    if (id === 0) return updateFilteredProducts(products);
    updateFilteredProducts(() => ([...products.filter((product: IItem) => product.category_id === id && product)]));
  }, [products]);

  if (isLoading) {
    return (
      <Centerise>
        <Spinner>Loading...</Spinner>
      </Centerise>
    )
  }

  if (error) {
    return (
      <Centerise>
        <p className="txt-error">An error occured while retrieveing your request</p>
      </Centerise>
    )
  }

  return (
    <>
      <Nav categories={category} filter={filter} />
      <Grid>
        {
          filtered.length > 0 ? filtered?.map((item: IItem, index: number) => (
            <Card {...item} key={`${item.id}-${index}`} />
          )) : products?.map((item: IItem, index: number) => (
            <Card {...item} key={`${item.id}-${index}`} />
          ))
        }
      </Grid>
    </>
  )
}
