import mysql.connector
from config import Config

def get_db():
    conn = mysql.connector.connect(
        host     = Config.DB_HOST,
        user     = Config.DB_USER,
        password = Config.DB_PASSWORD,
        database = Config.DB_NAME
    )
    return conn
$host   = getenv("DB_HOST");
$user   = getenv("DB_USER");
$pass   = getenv("DB_PASSWORD");
$dbname = getenv("DB_NAME");
$port   = getenv("DB_PORT") ?: 4000;