module.exports = {
  UpDateById: `UPDATE videos
SET  title = $1, categoriesid = $2,sap_categoryid =$3
WHERE videoid = $4 and userid= $5  returning *;`,
  SelectVideoById: `Select * from videos where videoid =$1;`,
}
