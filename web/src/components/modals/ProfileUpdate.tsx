import { useProfileUpdateModal } from "@/context/useUpdateProfileModal";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Backdrop, ImageUploader } from "@/lib";
import { updateCurrentUserProfile } from "@/redux/thunks/user";
import React, { useState } from "react";

const ProfileUpdate = () => {
  const [image, setImage] = useState("");
  const { onClose } = useProfileUpdateModal();
  const userState = useAppSelector((state) => state.user);
  const isLoading = userState.updating_profile_status === "pending";
  const userId = useAppSelector((state) => state.auth.userId);
  const dispatch = useAppDispatch();

  function handleUpdate(e: React.ChangeEvent) {
    e.stopPropagation();
    dispatch(updateCurrentUserProfile({ userId, image }));
    console.log("Image:", image);
  }

  const PUComponents = () => (
    <div onClick={(e) => e.stopPropagation()}>
      <ImageUploader
        setImage={setImage}
        image={image}
        ButtonAction={handleUpdate}
        hasButton
        buttonLabel="Save"
        buttonLoader={isLoading}
        buttonDisable={isLoading}
      />
    </div>
  );
  return (
    <Backdrop onClose={onClose}>
      <PUComponents />
    </Backdrop>
  );
};

export default ProfileUpdate;
