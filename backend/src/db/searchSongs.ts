import { generateAccessToken } from "./token";

type Song = {
    id: string,
    preview_url: string
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
        const song: Song = {
            id: data.tracks.items[0].id,
            preview_url: data.tracks.items[0].preview_url
        }
        return song;
    }))
    console.log(songs)
}