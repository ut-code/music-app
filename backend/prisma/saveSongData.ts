import { PrismaClient } from "@prisma/client";
import { generateAccessToken } from "../src/db/token";
import { searchSongs } from "../src/db/searchSongs";
import { songsList } from "../src/db/songsList";
import dotenv from "dotenv";

const prisma = new PrismaClient();
dotenv.config({ path: "../.env"});
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

type Feature = {
    preview_url: string,
    tempo: number,
    energy: number,
    speech: number,
    valence: number,
    mode: number,
    music_id: string
}

const fetchSongFeatures = async (): Promise<Feature[]> => {
    const token = await generateAccessToken(SPOTIFY_CLIENT_ID!, SPOTIFY_CLIENT_SECRET!);
    const searchTerms = songsList;
    const songs = await searchSongs(token, searchTerms);
    return songs;
}

const saveMusicFeature = async () => {
    const features: Feature[] = await fetchSongFeatures();
    const formattedFeatures = features.map(feature => ({
        music_id: feature.music_id,  // Include the music_id here
        tempo: feature.tempo,
        energy: feature.energy,
        speech: feature.speech !== undefined ? feature.speech : 0,
        valence: feature.valence,
        mode: feature.mode,
        music_url: feature.preview_url,
    }));
    
    
    try {
        await prisma.music.createMany({
            data: formattedFeatures
        });
    } catch (err) {
        console.error("Error saving music features:", err);
    }
}

saveMusicFeature()