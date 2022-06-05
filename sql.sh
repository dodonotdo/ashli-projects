# Back up the database using the following command:
mysqldump --user=sqladmin -p9Qf2+kXrM@h9ZNhnL{Qnf --databases db_amazon | gzip > /opt/db_amazon.gz
mysqldump --user=sqladmin -p9Qf2+kXrM@h9ZNhnL{Qnf --databases ldm | gzip > /opt/ldm.gz

# scp (secure copy) command in Linux system is used to copy file(s) between servers in a secure way.
scp /home/ubuntu/Desktop/sql.sh crash@192.168.193.83:/home/crash/Desktop/ashli-project
