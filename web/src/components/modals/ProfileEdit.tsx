import { useProfileEdit } from "@/context/useProfileEdit";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Backdrop, Button } from "@/lib";
import { updateCurrentUser } from "@/redux/thunks/user";
import {
  StyledShareContainer,
  ContentHeader,
  DescInput,
  DescWrap,
  InputWrap,
  SpaceInputs,
  StyledInputWrapper,
  NameInput,
  StyledEditContainer,
  EditButtonWrap,
} from "@/styles/components/styled";
import { colors, poppins, poppinsSemibold } from "@/styles/global";
import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const ProfileEdit = () => {
  const { onClose } = useProfileEdit();
  const userState = useAppSelector((state) => state.user);
  const user = userState.currentUser;
  const dispatch = useAppDispatch();
  const isLoading = userState.updating_status === "pending";
  const userId = user._id;
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    description: user?.description,
    location: user?.location,
    website: user?.website,
    twitter_url: user?.twitter_url,
    linkedin_url: user?.linkedin_url,
  });

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const websiteInputRef = useRef<HTMLInputElement>(null);
  const twitterInputRef = useRef<HTMLInputElement>(null);
  const linkedinInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    }
  }, [form.firstName]);
  useEffect(() => {
    if (lastNameInputRef.current) {
      lastNameInputRef.current.focus();
    }
  }, [form.lastName]);
  useEffect(() => {
    if (descInputRef.current) {
      descInputRef.current.focus();
    }
  }, [form.description]);
  useEffect(() => {
    if (locationInputRef.current) {
      locationInputRef.current.focus();
    }
  }, [form.location]);
  useEffect(() => {
    if (websiteInputRef.current) {
      websiteInputRef.current.focus();
    }
  }, [form.website]);
  useEffect(() => {
    if (twitterInputRef.current) {
      twitterInputRef.current.focus();
    }
  }, [form.twitter_url]);
  useEffect(() => {
    if (linkedinInputRef.current) {
      linkedinInputRef.current.focus();
    }
  }, [form.linkedin_url]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  function update() {
    dispatch(updateCurrentUser({ userId, form }));
  }

  const PopupEdit = () => (
    <StyledEditContainer>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Edit Profile</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <StyledInputWrapper>
        <SpaceInputs>
          <InputWrap>
            <p className={poppins.className}>First Name</p>
            <NameInput
              className={poppins.className}
              placeholder="Edit Firstname"
              value={form.firstName}
              name="firstName"
              onChange={handleChange}
              ref={firstNameInputRef}
            />
          </InputWrap>
          <InputWrap>
            <p className={poppins.className}>Last Name</p>
            <NameInput
              className={poppins.className}
              placeholder="Edit Lastname"
              value={form.lastName}
              name="lastName"
              onChange={handleChange}
              ref={lastNameInputRef}
            />
          </InputWrap>
        </SpaceInputs>
        <InputWrap>
          <p className={poppins.className}>Description</p>
          <DescWrap>
            <MdDescription size={20} />
            <DescInput
              className={poppins.className}
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              name="description"
              ref={descInputRef}
            />
          </DescWrap>
        </InputWrap>
        <SpaceInputs>
          <InputWrap>
            <p className={poppins.className}>Location</p>
            <DescWrap>
              <FaLocationDot size={20} />
              <DescInput
                className={poppins.className}
                placeholder="Location"
                value={form.location}
                name="location"
                onChange={handleChange}
                ref={locationInputRef}
              />
            </DescWrap>
          </InputWrap>
          <InputWrap>
            <p className={poppins.className}>Website</p>
            <DescWrap>
              <TbWorld size={20} />
              <DescInput
                className={poppins.className}
                placeholder="Website"
                name="website"
                value={form.website}
                onChange={handleChange}
                ref={websiteInputRef}
              />
            </DescWrap>
          </InputWrap>
        </SpaceInputs>
        <SpaceInputs>
          <InputWrap>
            <p className={poppins.className}>Twitter</p>
            <DescWrap>
              <IoLogoTwitter size={22} />
              <DescInput
                className={poppins.className}
                placeholder="Your Twitter link"
                value={form.twitter_url}
                name="twitter_url"
                onChange={handleChange}
                ref={twitterInputRef}
              />
            </DescWrap>
          </InputWrap>
          <InputWrap>
            <p className={poppins.className}>Linkedin</p>
            <DescWrap>
              <IoLogoLinkedin size={22} />
              <DescInput
                className={poppins.className}
                placeholder="Your Linkedin profile"
                value={form.linkedin_url}
                name="linkedin_url"
                onChange={handleChange}
                ref={linkedinInputRef}
              />
            </DescWrap>
          </InputWrap>
        </SpaceInputs>
      </StyledInputWrapper>
      <EditButtonWrap>
        <Button
          label="Save"
          variant="primary"
          width="100%"
          radius="sm"
          Loading={isLoading}
          disabled={isLoading}
          onActionClick={update}
        />
      </EditButtonWrap>
    </StyledEditContainer>
  );

  return (
    <Backdrop>
      <PopupEdit />
    </Backdrop>
  );
};

export default ProfileEdit;
