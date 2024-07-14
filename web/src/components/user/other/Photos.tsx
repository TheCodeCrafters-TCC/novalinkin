import { getUserCollections } from "@/helper/get";
import { useAppSelector } from "@/hooks/state";
import { NoData } from "@/lib";
import { getDevice } from "@/styles/global";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Photos = () => {
  const user = useAppSelector((state) => state.user.currentUser);
  const [photos, setPhotos] = useState<any>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const data = await getUserCollections(user._id);
      setPhotos(data);
    };
    getPhotos();
  }, [user]);

  console.log("photos:", photos);

  return (
    <PhotosWrap>
      {/* {photos.length < 1 ? (
        <NoData />
      ) : (
        photos.map((imageGroup: any, groupIndex: any) => (
          <PhotosWrap key={groupIndex}>
            {imageGroup.map((image: any, index: any) => (
              <Photo
                key={index}
                src={image?.url}
                alt={image.public_id}
                width="100"
              />
            ))}
          </PhotosWrap>
        ))
      )} */}
      <NoData />
    </PhotosWrap>
  );
};

export default Photos;

const PhotosWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
`;
const Photo = styled.img`
  width: 260px;

  @media screen and (max-width: ${getDevice("md")}) {
    width: 50px;
  }
`;
