type Feature = {
    preview_url: string,
    tempo: number,
    energy: number,
    instumentalness: number,
    valence: number,
    mode: number,
}

export const fetchFeatures = async (token: string, songId: string, preview_url: string) => {
    const url = `https://api.spotify.com/v1/audio-features/${songId}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await response.json();
    const features: Feature = {
        preview_url: preview_url,
        tempo: data.tempo,
        energy: data.energy,
        instumentalness: data.instumentalness,
        valence: data.valence,
        mode: data.mode
    }
    return features;    
} 