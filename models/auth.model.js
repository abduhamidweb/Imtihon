module.exports = {
  REGIST:
    'INSERT INTO users (username, login, password) VALUES ($1,$2,$3) RETURNING *',
  LOGIN: 'SELECT userid FROM users WHERE login = $1 and password = $2',
  INSERTV:
    'INSERT INTO videos (userId, title,categoriesId,sap_categoryId, path ) VALUES ($1,$2,$3,$4,$5) RETURNING userId',
}
