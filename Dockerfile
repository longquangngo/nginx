FROM httpd:2.4
COPY ./build/ /usr/local/apache2/htdocs/
COPY mywebserverdeploy.yml /usr/local/apache/htdocs/
