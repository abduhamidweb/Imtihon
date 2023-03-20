module.exports = {
  VIDEOS: `SELECT *
FROM categories
JOIN sap_category ON categories.catId = sap_category.catRefId
JOIN videos ON sap_category.spaId = videos.sap_categoryId
WHERE categories.catName = $1 AND sap_category.sapName = $2;`,
  VIDEOID: 'SELECT * FROM sap_category',
}
// SELECT videos.* FROM videos
// INNER JOIN sap_category ON videos.sapId = sap_category.sapId
// WHERE sap_category.sapName = $1;

// add a condition to this request that it fetches videos with the category we entered and the video with the id we entered
