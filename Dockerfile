FROM python:3.10.11-buster

RUN apt-get update && apt-get install nginx vim -y --no-install-recommends
COPY nginx.default /etc/nginx/sites-available/default
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

RUN mkdir -p /opt/app
RUN mkdir -p /opt/app/pip_cache
COPY . /opt/app/
RUN chmod +x /opt/app/portfolio.sh
WORKDIR /opt/app
RUN pip install -r requirement.txt --cache-dir /opt/app/pip_cache
RUN chown -R www-data:www-data /opt/app

EXPOSE 8002
STOPSIGNAL SIGTERM
CMD ["/opt/app/portfolio.sh"]
