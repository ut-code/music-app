import express from "express"
import { generateAccessToken } from "./db/token"
import { searchSongs } from "./db/searchSongs"
import { songsList } from "./db/songsList"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

dotenv.config()
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

const app = express()
const prisma = new PrismaClient()

app.use(cors({ origin: process.env.WEB_ORIGIN }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World!")
})

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
  const tolerance: number = 0.2

  // 楽曲パラメーター
  const tempo: number = Number(req.query.tempo)
  const energy = Number(req.query.energy)
  const speech = Number(req.query.speech)
  const valence = Number(req.query.valence)
  const mode = Number(req.query.mode)

  // prismで取得する楽曲のフィルター (modeを除く)
  const filters = {
    take: 8,
    where: {
      tempo: {
        gte: tempo - tolerance * 100,
        lte: tempo + tolerance * 100,
      },
      energy: {
        gte: energy - tolerance,
        lte: energy + tolerance,
      },
      speech: {
        gte: speech - tolerance,
        lte: speech + tolerance,
      },
      valence: {
        gte: valence - tolerance,
        lte: valence + tolerance,
      },
      mode: {
        gte: 0,
        lte: 1,
      },
    },
  }

  // modeが0以上の場合は 最小値、最大値を共にユーザーが指定した値とする (同値のもののみ)
  if (mode >= 0) {
    filters.where.mode.gte = mode
    filters.where.mode.lte = mode
  }

  // 取得
  const music = await prisma.music.findMany(filters)

  //返却
  res.send(music)
})

app.post("/api/create-playlist", async (req, res) => {
  console.log(req.body)
})

const PORT = 5050

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
