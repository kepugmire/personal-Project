SELECT favorites.image_path 
FROM users
JOIN favorites ON users.password = favorites.userid
WHERE password = $1;