CREATE EXTENSION IF NOT EXISTS pgcrypto;

create table if not exists users (
    username varchar(50) not null unique,
    email varchar(255) not null unique,
    password_hash text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY
);
