const YOUTUBE_PLAYLIST_ITEMS_API="https://www.googleapis.com/youtube/v3/playlistItems"

const YOUTUBE_API_KEY = "AIzaSyDWMX3Imj4cTss5PiMHA7P6f7ogLAzFu6M"
export async function getrecentList(params){
    let res;
    if(params.nextButtonToken){
        res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${params.nextButtonToken}&key=${YOUTUBE_API_KEY}`);
    }else if (params.prevButtonToken){
        res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${params.prevButtonToken}&key=${YOUTUBE_API_KEY}`);
    }else{
        res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&key=${YOUTUBE_API_KEY}`);
    }
    const data = await res.json()
    return data
}