from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)


@app.route('/api')
def api():
    res = requests.get('https://api.covid19api.com/summary')
    data = res.json()
    LastUpdated = data["Date"]
    data = data['Countries']
    newDeath = {}
    newCases = {}
    newRecov = {}
    totalDeath = {}
    totalCases = {}
    totalRecov = {}
    for i in data:
        if i["Country"] == "":
                continue
        newDeath[i["Country"]] = i['NewDeaths']
        newCases[i["Country"]] = i['NewConfirmed']
        newRecov[i["Country"]] = i['NewRecovered']
        totalDeath[i["Country"]] = i['TotalDeaths']
        totalCases[i["Country"]] = i['TotalConfirmed']
        totalRecov[i["Country"]] = i['TotalRecovered']  
   
    return jsonify(data)


@app.route('/')
def index():
    res = requests.get('https://api.covid19api.com/summary')
    data = res.json()
    lastUpdated = data["Date"]
    return render_template('index.html',data=data,lastUpdated=lastUpdated)


@app.route('/world-map-data')
def world_data():
    res = requests.get('https://api.covid19api.com/summary')
    data = res.json()
    return (data)

if __name__ == "__main__":
    app.run(debug=True, threaded=True)