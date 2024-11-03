Scoreboard_collections = ["Scoreboard_easy", "Scoreboard_medium", "Scoreboard_hard", "Scoreboard_expert", "Scoreboard_many"]

def create_response_error(message: str, details: str = ""):
    return {
        "type": "error",
        "message": message,
        "details": details,
    }

def create_response_success(message: str):
    return {
        "type": "success",
        "message": message,
    }
