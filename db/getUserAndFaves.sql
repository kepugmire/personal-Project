SELECT favorites.image_path, favorites.id
FROM users
JOIN favorites ON users.password = favorites.userid
WHERE password = $1;