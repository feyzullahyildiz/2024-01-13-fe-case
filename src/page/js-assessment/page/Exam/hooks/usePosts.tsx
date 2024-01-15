import { useEffect, useState } from "react";

export type Response = IItem[];

export interface IItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Response | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res: IItem[]) => {
        setData(res);
      })
      .catch(() => {
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading };
};
