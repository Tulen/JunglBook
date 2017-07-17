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

## Bios
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
work            | string    | not null
education       | string    | not null
current_city    | string    | not null
hometown        | string    | not null

## Friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
accepted    | boolean   | not null
user_id     | integer   | not null, foreign key (references users), indexed(unique with friend_id)
friend_id   | integer   | not null, foreign key (references users), indexed(unique with user_id)

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
body        | text      | not null
