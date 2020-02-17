function getAkanName(){
    var dayWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var dayOfTheWeek = document.getElementById("day").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    var male = document.getElementsById ("male"). value;
    var female = document.getElementsById ("female"). value;
    

    if (year == ""|| year.length >4) {alert('Kindly enter a valid year')

} else if (month < 0 || month > 31) { alert('enter a valid month')

    
} else if (dayOfTheWeek < 0 || dayOfTheWeek > 7) {alert('enter a valid date')
    
} else if (male.checked == false && female.checked == false ){ alert ('specifie')}
}