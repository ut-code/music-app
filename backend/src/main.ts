import express from "express";
import { generateAccessToken } from "./db/token";
import { searchSongs } from "./db/searchSongs";
import { songsList } from "./db/songsList";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

dotenv.config();
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;


const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: process.env.WEB_ORIGIN }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*
/api/songsで取得するデータは以下のような形式
preview_urlがないデータもあるので、その場合はnullになる。どうしましょうか
type Feature = {
  preview_url: string,
  tempo: number,
  energy: number,
  instumentalness: number,
  valence: number,
  mode: number,
}
*/

app.get("/api/songs", async (req, res) => {
  const music = await prisma.music.findMany();
  res.send(music);
})

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
