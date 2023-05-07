#!/usr/bin/env bash
# portfolio.sh
if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ] ; then
    (python manage.py createsuperuser --no-input)
fi
(gunicorn portfolio.wsgi --user www-data --bind 0.0.0.0:8001 --workers 3) &
nginx -g "daemon off;"