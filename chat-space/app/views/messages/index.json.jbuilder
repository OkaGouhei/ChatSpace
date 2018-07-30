json.array! @new_message do |message|
  json.user_name  message.user.name
  json.created_at  message.created_at.to_s
  json.content  message.content
  joson.image  message.image.url
  json.user_id  message.user_id
end
