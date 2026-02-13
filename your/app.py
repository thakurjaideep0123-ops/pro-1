from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/forgive")
def forgive():
    return jsonify({
        "message": "Sona smiled... 💗 She forgives you. Forever."
    })

if __name__ == "__main__":
    app.run(debug=True)
