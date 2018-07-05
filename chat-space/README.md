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

## message テーブル
## ・誰が送ったか (user_id ; integer)
## ・どのグループで送ったか(group_id; integer)
## ・どのような内容か（画像・テキスト)
## body、image は null: false,を外した。
## foreign_key は 他のテーブルと関係している場合
## foreign_keyがない場合は空白でもいいのか？
## いつ送ったかは自動的にデータに付与されるのでテーブルは必要ない

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|  |
|image|string|  |


## create account テーブル
##    ・name (null: false, foreign_key: true)
## Columnは自由につけられる
## Type が不安
## Email Password はdeviceにあるので必要ない

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|


## 新規チャットグループ テーブル
##  グループ名
##  チャットメンバー

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, foreign_key: true|
|member|string|null: false, foreign_key: true|


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
