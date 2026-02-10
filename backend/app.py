
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


wardrobe = []


# Dummy AI Outfit Generator
@app.route('/api/outfit', methods=['POST'])
def generate_outfit():
data = request.json
style = data.get('style')
occasion = data.get('occasion')


suggestion = "Casual neutral outfit"


if occasion == 'formal':
suggestion = "Black blazer + White shirt + Formal shoes"
elif occasion == 'party':
suggestion = "Trendy jacket + Dark jeans + Sneakers"
elif occasion == 'college':
suggestion = "Casual t-shirt + Jeans + Sneakers"


if style == 'minimal':
suggestion += " | Try neutral colors like beige, white, and black"


return jsonify({"suggestion": suggestion})




# Wardrobe Add
@app.route('/api/wardrobe', methods=['POST'])
def add_wardrobe():
item = request.json.get('item')
wardrobe.append(item)
return jsonify({"wardrobe": wardrobe})




# Wardrobe Get
@app.route('/api/wardrobe', methods=['GET'])
def get_wardrobe():
return jsonify({"wardrobe": wardrobe})




if __name__ == '__main__':
app.run(debug=True)

