from flask import Flask
from flask_cors import CORS
from routers.create_route import create_bp

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from other origins

# Route registration
app.register_blueprint(create_bp, url_prefix="/create")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
