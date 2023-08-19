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

  // 許容誤差
  const tolerance = 0.1

  // 楽曲パラメーター
  const tempo = 149;
  const energy = 0.28;
  const speech = 0;
  const valence = 0.85;
  const mode = 1;

  // prismで取得する楽曲のフィルター (modeを除く)
  const filters = {
    where: {
      tempo: {
        gte:tempo * (1-tolerance),
        lte:tempo * (1+tolerance)
      },
      energy: {
        gte:energy * (1-tolerance),
        lte:energy * (1+tolerance)
      },
      speech: {
        gte:speech * (1-tolerance),
        lte:speech * (1+tolerance)
      },
      valence: {
        gte:valence * (1-tolerance),
        lte:valence * (1+tolerance)
      },
      mode : {
        gte:0,
        lte:1
      }
    }
  }

  // modeが0以上の場合は 最小値、最大値を共にユーザーが指定した値とする (同値のもののみ)
  if(mode>=0){
    filters.where.mode.gte = mode;
    filters.where.mode.lte = mode;
  }

  // 取得
  const music = await prisma.music.findMany(filters);

  //返却
  res.send(music);
  console.log(music);
})


const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
