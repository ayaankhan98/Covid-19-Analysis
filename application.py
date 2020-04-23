from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)


@app.route('/api')
def api():
    res = requests.get('https://api.covid19api.com/summary')
    data = res.json()
    data = data['Countries']
    return jsonify(data)


@app.route('/')
def index():
    res = requests.get('https://api.covid19api.com/summary')
    data = res.json()
    NewDeaths = 0
    NewConfirmed = 0
    NewRecovered = 0
    TotalDeaths = 0
    TotalConfirmed = 0
    TotalRecovered = 0
    y = ""
    m = ""
    d = ""
    h = ""
    min = ""
    s = ""
    for i in data['Countries']:
        NewDeaths += i['NewDeaths']
        NewConfirmed += i['NewConfirmed']
        NewRecovered += i['NewRecovered']
        TotalDeaths += i['TotalDeaths']
        TotalConfirmed += i['TotalConfirmed']
        TotalRecovered += i['TotalRecovered']
    lastUpdated = data["Date"]
    i = 0
    while(i<len(lastUpdated)):
        if i<4:
            y += lastUpdated[i]
        elif i>4 and i<7:
            m += lastUpdated[i]
        elif i>7 and i<10:
            d += lastUpdated[i]
        elif i>10 and i<13:
            h += lastUpdated[i]
        elif i>13 and i<16:
            min += lastUpdated[i]
        elif i>16 and i<19:
            s += lastUpdated[i]
        i += 1

    lastUpdated = f'{y}/{m}/{d}  {h}:{min}:{s}                GMT + 00:00:00'
    return render_template('index.html',data=data,lastUpdated=lastUpdated, newDeaths=NewDeaths, newConfirmed=NewConfirmed, newRecovered=NewRecovered, totalDeaths=TotalDeaths, totalConfirmed=TotalConfirmed, totalRecovered=TotalRecovered)


@app.route('/world-map-data')
def world_data():
    res = requests.get('https://api.covid19api.com/summary')
    data = res.json()
    return (data)

if __name__ == "__main__":
    app.run(debug=True)