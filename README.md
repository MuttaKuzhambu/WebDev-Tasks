# WebDev-Tasks

For setting up Database
    
    
    create a database under the name 'code_share'
    under that create two tables with following name
      1.users with attributes id(int 111 primary key),username(varchar 256),password(varchar 256)
      2.code_base with attributes id(int 111 primary key),username(varchar 256),code(varchar 2000)
      
      Requirements PHP above version 7.
      
      Incase while viewing phpmyadmin if you face any issues like "Access Denied" follow the steps in the link: 
      https://askubuntu.com/questions/820967/access-denied-for-user-phpmyadminlocalhost-while-installing-phpmyadmin
      if you face any issues like : apacher server not running ,execute the following commands 
                                          1.sudo /etc/init.d/apache2 stop
                                          2. sudo /opt/lampp/lampp start
        For SQL ERRORS:
            1.sudo /etc/init.d/mysql stop
            2.sudo /usr/sbin/mysqld --skip-grant-tables --skip-networking &
            3.mysql -u root
            4.FLUSH PRIVILEGES;
            5. SET PASSWORD FOR root@'localhost' = PASSWORD('');
            6.UPDATE mysql.user SET Password=PASSWORD('') WHERE User='root';
            7.FLUSH PRIVILEGES;
            8.sudo /etc/init.d/mysql stop
            9.sudo /etc/init.d/mysql start

      Commands for Creating databases and tables:

        CREATE DATABASE code_share;
        USE code_share;
        CREATE TABLE users (id int 111 auto_increment PRIMARY KEY,username varchar (256),password varchar (256));
        CREATE TABLE codebase (id int 111 auto_increment PRIMARY KEY,username varchar (256),code varchar (2000));
      
