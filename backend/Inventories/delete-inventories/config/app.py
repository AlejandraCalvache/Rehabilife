import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from routers.delete_route import delete_bp

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS

# Register routes
app.register_blueprint(delete_bp, url_prefix="/delete")

if __name__ == "__main__":
    PORT = int(os.getenv("PORT", 5002))
    app.run(debug=True, host="0.0.0.0", port=PORT)
