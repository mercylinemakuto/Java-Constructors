//1. You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName  = featureName,
    this.isEnabled = isEnabled,
    this.userGroupAccess = userGroupAccess;
}
FeatureToggle.prototype.canAccess = function(userRole){
    return this.userGroupAccess.includes(userRole);
}
FeatureToggle.prototype.toggleFeature = function(flag){
    return this.isEnabled = flag
        
    
}

const feature = new FeatureToggle("Instasoko", false, ["betaTesters", "admins"]);
console.log(feature.toggleFeature(true));
console.log(feature.canAccess("testers"));



// 2.In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs){
    this.freelancerName = freelancerName,
    this.projectDetails = projectDetails,
    this.logs = logs;
}
TimeLog.prototype.calculateEarnings = function(){
    let earnings = this.projectDetails.hourlyRate * this.logs.hoursWorked
    return earnings
}
TimeLog.prototype.filterLogs = function(){

}
TimeLog.prototype.workHours = function(){
    if(this.hoursWorked > 40){
        console.log("Exceeded")
    }else{
        console.log("Working hours")
    }
}

// const log = new Log("Mike", {name:"Judy", hourlyRate:50}, {date:})

// 3. You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.
function Order(customer, items, status){
    this.customer = customer,
    this.items = items,
    this.status = status;
}
Order.prototype.totalCost = function(){
    let total = this.items.unitPrice * this.items.quantity
    return total
}
Order.prototype.updateStatus = function(paymentStatus){
    if(paymentStatus == this.total){
        return(this.status = "paid")
    }else{
        return this.status
    }
}
Order.prototype.OrderUrgency = function(){

};

const order = new Order({name: "Cyndy", email:"cyndy@gmail.com"}, {productName: "Cakes", quantity: "50", unitPrice:"500"}, "Not paid")
console.log(order.updateStatus())
console.log(order.totalCost())
console.log(order)


// 4.In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.
class Employee{
    constructor (id, name, performanceMetrics, feedback){
        this.id = id,
        this.name = name,
        this.performanceMetrics = performanceMetrics,
        this.feedback = feedback;
    }
}
    averageScore = function(){

    }
    performanceLevel = function(){

    }
    newFeedback = function(){

    }

// 5.Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.
class Course{
    constructor(title, instructor, students){
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }

    completedCourse(){
        let complete = this.students.filter(student => student.completeStatus ==="Complete");
        return complete
    }
    // countEnrolledStudents(){

    // }
}
const course = new Course("Machine learning", {name:"June", expertise: "Software engineering"}, [{name:"Jimmy", completeStatus: "Complete"}, {name:"Keith",completeStatus:"Complete"}, {name: "Merry", completeStatus:"Incomplete"}])
console.log(course.completedCourse());