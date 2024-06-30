import { useCreateCommunity } from "@/context/useCreateCommunity";
import { useToaster } from "@/hooks/useToast";
import { Backdrop, Button, COptions } from "@/lib";
import {
  ContentHeader,
  Create_Between,
  Create_Community,
  Create_Input,
  Image_Selector,
  Selected_Image,
  StyledShareContainer,
  Styled_Create_Wrap,
} from "@/styles/components/styled";
import { SpaceBetween, poppins, poppinsSemibold } from "@/styles/global";
import React, { useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const CreateCommunity = () => {
  const { onClose } = useCreateCommunity();
  const imgRef = useRef<any>();
  const [image, setImage] = useState("");
  const { toast } = useToaster();

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    if (file && file[0]) {
      const newImage = URL.createObjectURL(file[0]);
      setImage(newImage);
    } else {
      toast("error", "Error chosing image");
    }
  }
  const Create = () => (
    <StyledShareContainer>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>New Community</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <Create_Community>
        <Create_Between>
          <Styled_Create_Wrap>
            <p className={poppins.className}>Name</p>
            <Create_Input placeholder="Name" />
          </Styled_Create_Wrap>
          <Styled_Create_Wrap>
            <p className={poppins.className}>Description</p>
            <Create_Input placeholder="Description" />
          </Styled_Create_Wrap>
        </Create_Between>
        <Create_Between>
          <COptions label="Type" variant="type" />
          <COptions label="Options for joining" variant="join" />
        </Create_Between>
        <Styled_Create_Wrap>
          <p className={poppins.className}>Select image</p>
          {image ? (
            <Selected_Image
              src={image}
              width={110}
              height={110}
              alt="Selected_Image"
              onClick={() => imgRef.current.click()}
              priority
            />
          ) : (
            <Image_Selector onClick={() => imgRef.current.click()}>
              <IoIosAdd size={30} />
            </Image_Selector>
          )}
          <input
            type="file"
            ref={imgRef}
            hidden
            onChange={handleImage}
            accept="image/png,image/jpg"
          />
        </Styled_Create_Wrap>
        <Button label="Create" width="auto" radius="sm" variant="primary" />
      </Create_Community>
    </StyledShareContainer>
  );
  return (
    <Backdrop>
      <Create />
    </Backdrop>
  );
};

export default CreateCommunity;
