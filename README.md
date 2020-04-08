# pokesite テーブル設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|email|string|null: false|
|name|string|null: false|
|password|string|null: false|
### Association
- has_many :articles
- has_many :comments

## articlesテーブル
|Column|Type|Option|
|------|----|------|
|title|string||
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Option|
|------|----|------|
|text|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|article_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :article