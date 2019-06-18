var date;
var address;  
var schoolName; 
var schoolAddress; 
var leaveSubject;
var reason;
var dateFrom;
var dateTo;
var lastDate;
var stdName; 
var roll;

var result = document.getElementById('submit');
result.addEventListener('click', function (e) {

      function Insert(formInput ){
            //form ko data variable ma store gareko
            inputVar = document.getElementById(`${formInput}`);
            //form ko data ko value taneko
            var Inputvalue = inputVar.value;
            //span vanne element create gareko
            var span = document.createElement("span");
            //span ma input ko value ko value haleko 
            span.innerHTML = " " + Inputvalue;
            //input form lai span tag ley replace gardeko
            inputVar.replaceWith(span);
      };
      
      Insert('appdate');
      Insert('address');
      Insert('school-name');
      Insert('school-add');
      Insert('leavesubject');
      Insert('reason');
      Insert('day');
      Insert('date-from');
      Insert('date-to');
      Insert('lastdate');
      Insert('stdname');
      Insert('roll');

      e.preventDefault();
     
});

