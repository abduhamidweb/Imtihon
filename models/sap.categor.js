module.exports = {
  SAP: `SELECT sap_category.* FROM sap_category JOIN categories ON sap_category.catRefid = categories.catId WHERE categories.catName = $1;`,
  SAPALL: 'SELECT * FROM sap_category',
  SAPID: `SELECT sc.*, v.*, c.comment, u.username
FROM sap_category sc
LEFT JOIN videos v ON sc.spaId = v.sap_categoryId
LEFT JOIN comments c ON v.videoId = c.videoId
INNER JOIN users u ON c.userId = u.userId
WHERE sc.sapName = $1
AND v.videoId = $2;
`,
}

// SELECT v.videoId, v.userId, v.title, v.date, v.categoryId, s.sapName
// FROM videos v
//     JOIN sap_category s ON v.sapId = s.sapId
// WHERE v.videoId = $1SELECT v.videoId, v.userId, v.title, v.date, v.categoryId, s.sapName
// FROM videos v
// JOIN sap_category s ON v.sapId = s.sapId
// WHERE v.categoryId = s;


// SELECT sap_category.*, videos.*, comments.comment, users.username
//  FROM sap_category
//  LEFT JOIN videos ON sap_category.spaId = videos.sap_categoryId
//  LEFT JOIN comments ON videos.videoId = comments.videoId
//  INNER JOIN users ON comments.userId = users.userId
//  WHERE sap_category.sapName = $1
//  AND videos.videoId = $2;