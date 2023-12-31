import { PrismaClient } from "@prisma/client"
import { generateAccessToken } from "./token"
import { searchSongs } from "./searchSongs"
const prisma = new PrismaClient()
import dotenv from "dotenv"
import { songsList } from "./songsList"
dotenv.config()

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

const main = async () => {
  const token = await generateAccessToken(SPOTIFY_CLIENT_ID!, SPOTIFY_CLIENT_SECRET!)
  const searchTerms = songsList
  const songs = await searchSongs(token, searchTerms)
}

main()
