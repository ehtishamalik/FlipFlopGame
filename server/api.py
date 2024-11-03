from pymongo import MongoClient
from pymongo.database import Database
from pymongo.collection import Collection
from pymongo.errors import PyMongoError
from flask import request
from flask_restful import Resource
from werkzeug.security import generate_password_hash, check_password_hash
from typing import Dict, Any
from werkzeug.exceptions import BadRequest
from os import getenv
from server.helpers import Scoreboard_collections, create_response_error, create_response_success

client: MongoClient = MongoClient(getenv("DATABASE_URL"))
database: Database = client.get_database("flipflop")
users_collection: Collection = database.get_collection("users")


class Login(Resource):
    def post(self):
        try:
            data: Dict[str, str] = request.get_json()
        except BadRequest as e:
            return create_response_error("Request data must be in JSON format.", str(e)), 400
        
        username: str | None = data.get("username", None)
        password: str | None = data.get("password", None)

        if not all([username, password]):
            return create_response_error("Please provide all required fields."), 400
        
        try:
            # Check if username exists
            user = users_collection.find_one({"username": username})
            if not user:
                return create_response_error("Account does not exist."), 404

            # Check if user exists and password is correct
            if check_password_hash(user["password"], password):
                return create_response_success("Login successful."), 200
            else:
                return create_response_error("Invalid password."), 401
            
        except PyMongoError as e:
            return create_response_error("Database error occurred.", str(e)), 500


class Signup(Resource):
    def post(self):
        try:
            data: Dict[str, str] = request.get_json()
        except BadRequest as e:
            return create_response_error("Request data must be in JSON format.", str(e)), 400
        
        username: str | None = data.get("username", None)
        email: str | None = data.get("email", None)
        password: str | None = data.get("password", None)
        confirm_password: str | None = data.get("confirm_password", None)

        if not all([username, email, password, confirm_password]):
            return create_response_error("Please provide all required fields."), 400

        # Check if passwords match
        if password != confirm_password:
            return create_response_error("Passwords do not match."), 400
        
        try:
            # Check if username already exists
            if users_collection.find_one({"username": username}):
                return create_response_error("Username already exists."), 409
            
            hashed_password: str = generate_password_hash(password)
            
            # Create the user document
            user_data: Dict[str, str] = {
                "username": username,
                "email": email,
                "password": hashed_password
            }
            users_collection.insert_one(user_data)
        except PyMongoError as e:
            return create_response_error("Database error occurred.", str(e)), 500

        return create_response_success("User created successfully."), 201


class Scoreboard(Resource):
    def get(self, difficulty: str):
        collection_name: str = f"Scoreboard_{difficulty.lower()}"
        
        # Ensure the collection name is valid
        if collection_name not in Scoreboard_collections:
            return create_response_error("Invalid difficulty level."), 400

        try:
            # Fetch the scoreboard data from the collection
            scoreboard_collection: Collection = database.get_collection(collection_name)
            scores = list(scoreboard_collection.find({}, {"_id": 0}).sort("seconds", 1))  # Exclude the MongoDB ID field
            
            return scores, 200

        except PyMongoError as e:
            return create_response_error("Database error occurred.", str(e)), 500
    
    def post(self, difficulty: str):
        try:
            data: Dict[str, str | int] = request.get_json()
        except BadRequest as e:
            return create_response_error("Request data must be in JSON format.", str(e)), 400
        
        username: str = data.get("username", None)
        moves_count: int = data.get("moves_count", 0)
        seconds: int = data.get("seconds", 0)

        # Check if all fields are provided
        if not username or moves_count < 1 or seconds < 1:
            return create_response_error("Invalid input data."), 400
    
        collection_name: str = f"Scoreboard_{difficulty.lower()}"

        # Ensure the collection name is valid
        if collection_name not in Scoreboard_collections:
            return create_response_error("Invalid difficulty level."), 400
        
        new_score: Dict[str, str | int] = {
            "username": username,
            "moves_count": moves_count,
            "seconds": seconds
        }
        
        try:
            scoreboard_collection: Collection = database.get_collection(collection_name)
            scoreboard_collection.insert_one(new_score)
            total_scores: int = scoreboard_collection.count_documents({})
            if total_scores > 5:
                heighest_score: Dict[str, Any] = scoreboard_collection.find_one(sort=[("seconds", -1)])
                scoreboard_collection.delete_one({"_id": heighest_score.get("_id")})
            
            return create_response_success("Score added successfully."), 201
        except PyMongoError as e:
            return create_response_error("Database error occurred.", str(e)), 500

