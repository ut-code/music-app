import { generateAccessToken } from "./token";
import { fetchFeatures } from "./fetchFeatures";
import { songsList } from "./songsList";

type Song = {
    id: string,
    preview_url: string,
    searchTerm: string,
    duration_ms?: number,
    artist?: string
}

type Feature = {
    preview_url: string,
    tempo: number,
    energy: number,
    speech: number,
    valence: number,
    mode: number,
    music_id: string,
    artist: string,
}


// 曲のidとプレビューのurlを取得する
export const searchSongs = async (token: string, searchTerms: string[]) => {
    const url = "https://api.spotify.com/v1/search"
    const songs = await Promise.all(searchTerms.map(async (searchTerm) => {
        const query = `q=${searchTerm}&type=track&limit=1`
        const response = await fetch(`${url}?${query}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (!data.tracks || !data.tracks.items || data.tracks.items.length === 0) {
            console.warn(`No tracks found for searchTerm: ${searchTerm}`);
            return {
                id: "",
                preview_url: "",
                searchTerm: searchTerm
            };
        }
        if (!data.tracks.items[0]) {
            return {
                id: "",
                preview_url: "",
                searchTerm: searchTerm
            }
        }
        const song: Song = {
            id: data.tracks.items[0].id,
            preview_url: data.tracks.items[0].preview_url,
            searchTerm: searchTerm,
            duration_ms: data.tracks.items[0].duration_ms,
            artist: data.tracks.items[0].artists[0].name
        }
        return song;
    }))
    console.log(songs)
    const features = await Promise.all(songs.map(async (song) => {
        const feature = await fetchFeatures(token, song.id, song.preview_url, song.duration_ms!, song.artist!);
        return feature;
    }))
    return features;
}