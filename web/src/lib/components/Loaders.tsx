import { FC } from "react";
import {
  BeatLoader,
  HashLoader,
  PuffLoader,
  RingLoader,
  SyncLoader,
} from "react-spinners";

type LoaderProps = {
  size: string | boolean | any;
  color: string;
};

export const SynLoader: FC<LoaderProps> = ({ size, color }) => {
  return <SyncLoader size={size} color={color} />;
};
export const PuffScaleLoader: FC<LoaderProps> = ({ size, color }) => {
  return <PuffLoader size={size} color={color} />;
};
export const RingSpinLoader: FC<LoaderProps> = ({ size, color }) => {
  return <RingLoader size={size} color={color} />;
};
export const HLoader: FC<LoaderProps> = ({ size, color }) => {
  return <HashLoader size={size} color={color} />;
};
export const Bounce: FC<LoaderProps> = ({ size, color }) => {
  return <BeatLoader size={size} color={color} />;
};
