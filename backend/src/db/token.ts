import dotenv from "dotenv";
dotenv.config();

export const generateAccessToken = async (
  SPOTIFY_CLIENT_ID: string,
  SPOTIFY_CLIENT_SECRET: string,
) => {
  try {
    const url = "https://accounts.spotify.com/api/token";
    const grantType = "client_credentials";
    const params = { grant_type: grantType };
    const response = await fetch(url, {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.log(error);
  }
};
