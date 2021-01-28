FROM nginx 
#标准的nginx镜像,我们需要基于标准的nginx镜像制作自己的镜像
MAINTAINER wangxichun 
#设置生成镜像的Author 
COPY ./dist/ /usr/share/nginx/html/
#拷贝当前目录的文件到指定文件夹下，改文件夹为镜像中的文件夹
COPY nginx.conf /etc/nginx/nginx.conf
#拷贝.conf文件到镜像下，替换掉原有的nginx.conf
RUN echo 'build img ok!' 
#输出完