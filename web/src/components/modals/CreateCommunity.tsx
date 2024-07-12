import { useCreateCommunity } from "@/context/useCreateCommunity";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { useToaster } from "@/hooks/useToast";
import { Backdrop, Button, COptions } from "@/lib";
import { SelectCType, SelectOption } from "@/redux/systemSlice";
import { createCommunity } from "@/redux/thunks/community";
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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const CreateCommunity = () => {
  const { onClose } = useCreateCommunity();
  const imgRef = useRef<any>();
  const [image, setImage] = useState<any>("");
  const { toast } = useToaster();
  const communityState = useAppSelector((state) => state.community);
  const isLoading = communityState.creation_status === "pending";
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const placeholderImg =
    "https://res.cloudinary.com/dv4mozbaz/image/upload/v1720606010/placeholder-groups.6cd09088_jufsdc.png";

  const [form, setForm] = useState({
    name: "",
    desc: "",
    joinOption: "",
    type: "",
    profile: "",
  });

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setForm({ ...form, profile: reader.result as any });
      };
      reader.readAsDataURL(file[0]);
    } else {
      toast("error", "Error chosing image");
    }
  }
  const nameInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLInputElement>(null);

  async function getPlaceImage() {
    if (!image || !form.profile) {
      const response = await fetch(placeholderImg);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("BlobRead:", reader.result);
        setForm({ ...form, profile: reader.result as any });
      };
      reader.readAsDataURL(blob);
    }
  }

  useEffect(() => {
    getPlaceImage();
  }, [image]);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [form.name]);
  useEffect(() => {
    if (descInputRef.current) {
      descInputRef.current.focus();
    }
  }, [form.desc]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit() {
    dispatch(
      createCommunity({
        ownerId: user.userId,
        communityName: form.name,
        communityDesc: form.desc,
        communityType: form.type,
        joinOption: form.joinOption,
        communityProfile: form.profile,
      })
    );
    setForm({
      ...form,
      name: "",
      desc: "",
      type: "",
      joinOption: "",
      profile: "",
    });
    dispatch(SelectOption(""));
    dispatch(SelectCType(""));
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
            <Create_Input
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              name="name"
              ref={nameInputRef}
            />
          </Styled_Create_Wrap>
          <Styled_Create_Wrap>
            <p className={poppins.className}>Description</p>
            <Create_Input
              placeholder="Description"
              value={form.desc}
              name="desc"
              onChange={handleChange}
              ref={descInputRef}
            />
          </Styled_Create_Wrap>
        </Create_Between>
        <Create_Between>
          <COptions label="Type" variant="type" setData={setForm} data={form} />
          <COptions
            label="Options for joining"
            variant="join"
            setData={setForm}
            data={form}
          />
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
        <Button
          label="Create"
          width="auto"
          radius="sm"
          variant="primary"
          Loading={isLoading}
          disabled={isLoading}
          onActionClick={handleSubmit}
        />
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
