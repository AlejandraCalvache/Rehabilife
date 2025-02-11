import os
import pymysql
from dotenv import load_dotenv

load_dotenv()

def get_db_connection():
    """Creates and returns a secure database connection using environment variables."""
    return pymysql.connect(
        host=os.getenv("MYSQL_HOST"),
        user=os.getenv("MYSQL_USER"),
        password=os.getenv("MYSQL_PASSWORD"),
        database=os.getenv("MYSQL_DB"),
        cursorclass=pymysql.cursors.DictCursor
    )
