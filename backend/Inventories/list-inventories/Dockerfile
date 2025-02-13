# 🐍 Use an optimized Python image
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
ARG MYSQL_USER
ARG MYQL_HOST
ARG MYSQL_DB
ARG MYSQL_PASSWORD
ENV MYSQL_USER=${MYSQL_USER}
ENV MYQL_HOST=${MYQL_HOST}
ENV MYSQL_DB=${MYSQL_DB}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}
# 📦 Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 📥 Copy application code
COPY . .

# 🔄 Expose the port the app runs on
EXPOSE 5003

# 🚀 Start the Flask app
CMD ["python", "main.py"]
