import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Data } from "../helpers/types";
import Photo from "./Photo";

const API = createApi({
  accessKey: "ntQWhYoc7SD4SIE_wjgR-HivgCHodVy85UTVX_YZoB8",
});

const SearchBar = (): JSX.Element => {
  const [data, setPhotosResponse] = useState<Data>();
  useEffect(() => {
    API.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result as unknown as Data);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(`something went wrong!${e}`);
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="feed">
      <ul className="columnUl">
        {data?.response.results?.map((item) => (
          <div>{item.id}</div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
