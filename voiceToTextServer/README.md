## Get started

### Create a virtual environment and activate it:
```
python3 -m venv venv
source venv/bin/activate
```

### Install dependencies
```
pip install -r requirements.txt
```

### Run Flask Server
```
flask run
```
if you prefer, ensuring FLASK_APP=app.py is set in your environment
```
python app.py
```

### Freeze dependencies
```
pip freeze > requirements.txt
```