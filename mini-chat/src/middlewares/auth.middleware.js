function authMiddleware(req, res, next) {
	// Get the authorization header from the request
	// The auth header is in the format "Bearer <token>" 
	// eg: "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4NzQ3MDAwfQ.7k8vY2xjK8l5z5F1g5f5f5f5f5f5f5f5f5f5f5f5"
	const authHeader = req.headers.authorization;
	database = require("../database"); // Import the database module
	if (!authHeader) {
		const error = new Error("Authorization header is missing");
		error.status = 401;
		return next(error);
	}

	const token = authHeader.split(" ")[1];
	if (!token) {
		const error = new Error("Token is missing");
		error.status = 401;
		return next(error);
	}

	// Verify the token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded; // Attach the decoded user information to the request object
		// Check if user exists in the database
		if (!req.user || !req.user.id) {
			const error = new Error("User not found");
			error.status = 401;
			return next(error);
		}
		if (!database.getUserById(req.user.id)) {
			const error = new Error("User not found");
			error.status = 401;
			return next(error);
		}
	} catch (err) {
		const error = new Error("Invalid token");
		error.status = 401;
		return next(error);
	}
	next();
}

module.exports = {
	authMiddleware,
};
