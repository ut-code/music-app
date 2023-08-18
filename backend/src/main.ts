import express from "express";
import { generateAccessToken } from "./db/token";
import { searchSongs } from "./db/searchSongs";
import { songsList } from "./db/songsList";
import dotenv from "dotenv";

dotenv.config();
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/songs", async (req, res) => {
  const token = await generateAccessToken(SPOTIFY_CLIENT_ID!, SPOTIFY_CLIENT_SECRET!);
  // 取ってくる曲のリスト
  const searchTerms = songsList;
  const songs = await searchSongs(token, searchTerms);
  console.log(songs);
})

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
