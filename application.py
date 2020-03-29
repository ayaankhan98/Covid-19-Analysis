from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/api')
def api():
        res = requests.get('https://api.covid19api.com/summary')
        data = dict(res.json())
        LastUpdated = data["Date"]
        data = data['Countries']
        newDeath = {}
        newCases = {}
        newRecov = {}
        totalDeath = {}
        totalCases = {}
        totalRecov = {}
        for i in data:
                newDeath[i["Country"]] = i['NewDeaths']
                newCases[i["Country"]] = i['NewConfirmed']
                newRecov[i["Country"]] = i['NewRecovered']
                totalDeath[i["Country"]] = i['TotalDeaths']
                totalCases[i["Country"]] = i['TotalConfirmed']
                totalRecov[i["Country"]] = i['TotalRecovered']
        return requests.jsonify["Last Updated":LastUpdated, 'NewDeaths':newDeath ,"NewCases":newCases, "NewRecovered":newRecov, "TotalDeaths":totalDeath, "TotalCases":totalCases, "TotalRecovered":totalRecov]


@app.route('/')
def index():
        return render_template('index.html')


if __name__ == "__main__":
        app.run(debug=True)