let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated": "Not authenticaed";

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level", accessLevel)

if (isLoggedIn){
    if (userRole == "admin"){
        userMessage = "Welcome, Admin!";
    }else {
        userMessage = "Welcome, User!";
    }
}else {
    userMessage = "Pleas log in to access the system.";
}

console.log("User Message", userMessage);

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory)
console.log("Authentication Status:", authenticationStatus);

switch(userCategory){
    case "Administrator":
        access_Lever_diataryService = "Full Access to Diatary Service";
        break;
    case "Manager":
        access_Lever_diataryService = "Full Access to Diatary Service";
        break;
    case "Enrolled Member":
        access_Lever_diataryService = "Full Access to Diatary Service plus one-on-one consultance";
        break;
    case "Subscriber":
        access_Lever_diataryService = "Partial Access to Diatary Service";
        break;
    case "Non-Subscriber":
        access_Lever_diataryService = "No Access to Diatary Service and enrollment is required";
        break;
    default:
        access_Lever_diataryService = "Unknown";
}

console.log("Access lever to Diatary Serice:", access_Lever_diataryService);