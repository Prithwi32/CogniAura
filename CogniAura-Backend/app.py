from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# Load the model and scaler
classifier = pickle.load(open('model.pkl', 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))

app = Flask(__name__)

# Allow CORS from the frontend application running on localhost:5173
CORS(app, resources={r"/predict": {"origins": "http://localhost:5173"}})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get features from the request body
        data = request.json.get('features')
        if not data:
            return jsonify({"error": "No features provided"}), 400

        print("Received input data:", data)  # Log received input data
        
        # Ensure that data has 14 features
        if len(data) != 14:
            return jsonify({"error": f"Expected 14 features, but got {len(data)}"}), 400
        
        input_data = np.array(data).reshape(1, -1)  # Reshape to match model input
        # print("Original input data shape:", input_data.shape)  # Log input data shape
        
        input_scaled = scaler.transform(input_data)  # Standardize input data
        # print("Scaled input data:", input_scaled)  # Log scaled input data

        # Make the prediction
        prediction = classifier.predict(input_scaled)[0]
        print("Prediction output:", prediction)  # Log prediction output

        result = "The person has ASD" if prediction == "Yes" else "The person does not have ASD"
        return jsonify({"prediction": result})

    except Exception as e:
        # Return error message if something goes wrong
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
