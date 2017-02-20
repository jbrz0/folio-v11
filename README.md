# Portfolio website template


## Sample nginx config
etc/nginx/sites-available/default

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/folio-v11;
    index index.html index.htm index.nginx-debian.html;
    server_name _;
    location / {
    proxy_pass http://138.197.93.234:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  gzip on;
  gzip_http_version 1.1;
  gzip_types text/plain text/css text/xml application/javascript image/svg+xml;
}
```