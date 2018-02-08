[![Laravel](https://camo.githubusercontent.com/5ceadc94fd40688144b193fd8ece2b805d79ca9b/68747470733a2f2f6c61726176656c2e636f6d2f6173736574732f696d672f636f6d706f6e656e74732f6c6f676f2d6c61726176656c2e737667)](https://laravel.com)

# STARTER LARAVEL

## Requirments

- PHP >= 7.0.0
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- YARN / NPM

#### MacOSX update to PHP 7.0.0
```bash
curl -s http://php-osx.liip.ch/install.sh | bash -s 7.0
export PATH=/usr/local/php5/bin:$PATH
php -v
```

Comment line `LoadModule php5_module libexec/apache2/libphp5.so` in `httpd.conf`

## Features

- Laravel 5.5
- Assets managment conf with [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
- Auth login & dashboard with [AdminLTE](https://adminlte.io)

## Install depenencies

```bash
composer install
yarn install
```

## Dev

```bash
npm run dev
```

## Database

```bash
php artisan migrate
php artisan db:seed
```

## Auth

Admin user `admin@email.com` / `123456`
