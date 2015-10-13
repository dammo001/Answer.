# Schema Information

## question
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | 
author_id   | integer   | not null, foreign key (references users), indexed
location    | string    | 
date        | datetime  | not null
views       | integer   | default value of 0 

## upvotes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed 

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
date        | datetime  | not null
body        | text      | not null 

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
date        | datetime  | not null
type        | string    | not null
text        | text      | not null 
question_id | integer   | foreign key (references questions), indexed 
answer_id   | integer   | foreign key (references answers), indexed 

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
bio             | text      | 
picture_url     | string    | 
session_token   | string    | not null, indexed, unique

