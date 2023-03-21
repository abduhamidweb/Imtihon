module.exports = {
  UpDateById: `UPDATE videos
SET  title = $1, categoriesid = $2,sap_categoryid =$3, path =$4
WHERE videoid = $5 and userid= $6  returning *;`,
  SelectVideoById: `Select * from videos where userid=$1 and videoid =$2;`,
  DELETEVideo: 'DELETE FROM videos WHERE userid=$1 and videoId =$2',
}
