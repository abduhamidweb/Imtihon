module.exports = {
  COMMENT:
    'INSERT INTO comments (userId, videoId, comment) VALUES ($1,$2,$3) RETURNING *',
  COMMENTDeleteById: 'DELETE FROM comments WHERE userid=$1 and commentid =$2',
}
