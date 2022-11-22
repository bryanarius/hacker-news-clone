export default function checkFavorite(favorites, story) {
    favorites.some(favorite => favorite.id === story.id);
}