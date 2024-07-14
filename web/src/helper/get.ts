import { DEV_URL } from "@/hooks/url";
import axios from "axios";

export async function getUnreadNot(userId: string | any) {
  const response = await axios.get(`${DEV_URL}/notification/unread/${userId}`);

  return response?.data;
}

export async function getUserById(id: string | any) {
  const user = await axios.get(`${DEV_URL}/users/find-by-id/${id}`);
  return user?.data?.data;
}

interface CurrentProps {
  connectionRequest: string | any;
  receiverId: string | any;
}

export async function getCurrentReq({
  receiverId,
  connectionRequest,
}: CurrentProps) {
  const rId = receiverId;
  const cId = connectionRequest;
  const response = await axios.get(
    `${DEV_URL}/request/current/${rId}/one/${cId}`
  );
  return response?.data;
}

export async function getUserCollections(userId: string) {
  const photos = await axios.get(
    `${DEV_URL}/article/user/collections/${userId}`
  );
  return photos.data;
}
export async function getUserArticles(userId: string) {
  const articles = await axios.get(
    `${DEV_URL}/article/user/articles/${userId}`
  );
  return articles.data;
}
