module.exports = {
  SELECTID: "SELECT * FROM videos where id = $1",
  SELECTALL:
    "SELECT u.username , v.title, v.path, v.add_date  FROM videos v join users u on v.user_id = u.id ",
};
