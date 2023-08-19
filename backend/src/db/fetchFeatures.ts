type Feature = {
  preview_url: string;
  tempo: number;
  energy: number;
  speech: number;
  valence: number;
  mode: number;
  music_id: string;
  duration_ms: number;
  artist?: string;
};

export const fetchFeatures = async (
  token: string,
  songId: string,
  preview_url: string,
  duration_ms: number,
  artist: string,
) => {
  const url = `https://api.spotify.com/v1/audio-features/${songId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const features: Feature = {
    preview_url: preview_url,
    tempo: data.tempo,
    energy: data.energy,
    speech: data.instumentalness,
    valence: data.valence,
    mode: data.mode,
    music_id: songId,
    duration_ms: duration_ms,
    artist: artist,
  };
  return features;
};
