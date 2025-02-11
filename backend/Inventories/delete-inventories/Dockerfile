# 🐍 Use official Python image as base
FROM python:3.11-slim

# 🏗 Set environment variables
ENV PYTHONUNBUFFERED=1 \
    WORKDIR=/app

# 📂 Set working directory
WORKDIR $WORKDIR

# 🛠 Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

# 📥 Copy only requirements first (for better caching)
COPY requirements.txt .

# 📦 Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 📥 Copy application code
COPY . .

# 🔄 Expose the port the app runs on
EXPOSE 5002

# 🚀 Start the Flask app
CMD ["python", "config/app.py"]
