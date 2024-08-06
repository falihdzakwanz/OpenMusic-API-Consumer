import pg from 'pg';

const { Pool } = pg;

class PlaylistSongService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsFromPlaylist(userId) {
    const playlistQuery = {
      text: `
            SELECT 
                playlists.id AS id,
                playlists.name AS name, 
            FROM playlists
            JOIN users ON playlists.owner = users.id
            WHERE users.id = $1
        `,
      values: [userId],
    };

    const songsQuery = {
      text: `
            SELECT 
                songs.id, 
                songs.title, 
                songs.performer
            FROM songs
            JOIN playlist_songs ON songs.id = playlist_songs.song_id
            JOIN playlists ON playlist_songs.playlist_id = playlists.id
            WHERE playlists.owner = $1
        `,
      values: [userId],
    };

    const playlistResult = await this._pool.query(playlistQuery);
    const songsResult = await this._pool.query(songsQuery);

    return {
      playlist: playlistResult.rows[0],
      songs: songsResult.rows,
    };
  }
}

export default PlaylistSongService;
