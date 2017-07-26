# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
fname           | string    | not null
lname           | string    | not null
birthday        | date      | not null
sex             | string    | not null
work            | string    |
education       | string    |
current_city    | string    |
hometown        | string    |
relationship    | string    |
nickname        | string    |
favorite_quote  | string    |


## FriendRequests
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
status       | string   | not null
sender_id    | integer   | not null, foreign key (references users), indexed(unique with friend_id)
recipient_id | integer   | not null, foreign key (references users), indexed(unique with user_id)

## Posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references users), indexed
parent_id   | integer   | foreign key (references users), indexed
body        | text      | not null

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
img_url     | text      | not null
