import Config from "@/config";
import { FavoriteType } from "@/pages/app/ContentSlice";

// 定义请求主体的结构
interface CreateFavoritesRequestBody {
  email: string;
  favorites: FavoriteType[];
}

export async function createFavorites(
  email: string,
  token: string,
  favorites: FavoriteType[],
) {
  const requestBody: CreateFavoritesRequestBody = {
    email: email,
    favorites: favorites,
  };

  const response = await fetch(`${Config.BASE_URL}/favorites/favorite`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(requestBody),
    method: "POST",
  });

  return await response.json();
}

export async function getFavorites(email: string, token: string) {
  const response = await fetch(
    `${Config.BASE_URL}/favorites/favorite?email=${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    },
  );

  return await response.json();
}
