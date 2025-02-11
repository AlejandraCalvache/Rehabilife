FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1 \
    WORKDIR=/app

WORKDIR $WORKDIR

RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5004

CMD ["python", "main.py"]
