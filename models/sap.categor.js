module.exports = {
  SAP: `SELECT sap_category.* FROM sap_category JOIN categories ON sap_category.catRefid = categories.catId WHERE categories.catName = $1;`,
  SAPALL: 'SELECT * FROM sap_category',
  SAPID: `
SELECT v.*, s.sapName
FROM videos v
JOIN sap_category s ON v.sap_categoryId = s.spaId
WHERE s.sapName =$1
AND v.videoId =$2;

`,
  SPAINFO: `
  SELECT comment
FROM videos v
JOIN comments cm ON v.videoId = cm.videoid
WHERE  v.videoId = $1;
  `,
  SAPUSER: `
  SELECT u.username
FROM videos v
JOIN users u ON v.userId = u.userId
WHERE v.videoId = $1;
  `,
}

// SELECT *
// FROM videos v
// JOIN sap_category sc ON v.sap_categoryId = sc.spaId
// JOIN categories c ON v.categoriesId = c.catId
// JOIN comments cm ON v.videoId = cm.videoId
// WHERE sc.sapName =$1
//   AND v.videoId = $2;
