# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## messagesテーブル
## ・誰が送ったか (user_id ; integer)
## ・どのグループで送ったか(group_id; integer)
## ・どのような内容か（画像・テキスト)
## body、image は null: false,を外した。
## foreign_key は 他のテーブルと関係している場合
## foreign_keyがない場合は空白でもいいのか？
## いつ送ったかは自動的にデータに付与されるのでテーブルは必要ない
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|body|text|
|image|string|
### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
##    ・name (null: false)
## Columnは自由につけられる
## Email Password はdeviceにあるので必要ない
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :groups
- has_many :messages



## groupsテーブル
##  グループ名
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
### Association
- has_many :users
- has_many :messages




## membersテーブル
## 中間テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
