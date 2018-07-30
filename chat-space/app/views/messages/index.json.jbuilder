json.messages @new_message.each do |message|
  json.user_name  message.user.name
  json.created_at  message.created_at.to_s
  json.content  message.content
  json.image  message.image.url
  json.id  message.id
end
