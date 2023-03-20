module.exports = {
  COMMENT:
    'INSERT INTO comments (userId, videoId, comment) VALUES ($1,$2,$3) RETURNING *',
}
