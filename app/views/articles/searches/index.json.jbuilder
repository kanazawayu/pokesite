json.array! @articles do |article|
  json.id article.id
  json.title article.title
  json.body article.body
  json.user_id article.user_id
  json.name article.user.name
  json.user_sign_in current_user
end