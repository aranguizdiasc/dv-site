from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pickle # to load scaler to standardizes input data the same way as in training
from tensorflow.keras.models import load_model

app = FastAPI() # creates a web app API

# These are the websites allowed to make API calls to me
origins = [  # Vite servers
    "https://dv-predictor.com",
    "https://dv-site-carolina-aranguiz-dias-projects.vercel.app"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # allows only these origins
    allow_credentials=False, # we dont need authentication
    allow_methods=["POST"],  # allows only this method
    allow_headers=["Content-Type"],  # Allows all headers
)

model = load_model("best_model.h5") # load the trained model
with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f) # load the scaler used to standardize the input data

@app.post("/predict") # registers a new route (an endpoint) on website -- run these functions when a POST request is sent to /predict URL
def predict(data: dict):
    features = np.array([[data["age"], data["education"], data["employment_status"], data["income"], data["marital_status"]]])
    
    # convert categorical inputs to numbers
    education_map = {"none": 0, "primary": 1, "secondary": 2, "tertiary": 3}
    employment_map = {"unemployed": 0, "part time employed": 1, "full time employed": 2}
    marital_map = {"unmarried": 0, "married": 1}

    # apply the mapping to the user's data
    education = education_map[data["education"].lower()]
    employment_status = employment_map[data["employment_status"].lower()]
    marital_status = marital_map[data["marital_status"].lower()]

    # create feature array (in same order as training)
    features = np.array([[data["age"], education, employment_status, data["income"], marital_status]])

    # scale and predict
    features = scaler.transform(features)
    pred = model.predict(features)

    print(f"Prediction: {pred[0][0]}") # print to terminal for debugging


    # Send back both forms
    return {
        "probability": f"{float(pred[0][0] * 100):.2f}%",  # convert numpy float to regular float for JSON serialization
        "risk_level": "High Risk" if pred[0][0] > 0.5 else "Low Risk"
    }