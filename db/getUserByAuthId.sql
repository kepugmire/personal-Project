SELECT users.username, favorites.userid, favorites.image_path 
FROM users
JOIN favorites ON users.password = favorites.userId
WHERE password = $1;