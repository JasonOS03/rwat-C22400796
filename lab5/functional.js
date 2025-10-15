const STUDENT_DATA_JSON = '[' + 
'{"name": "Annie Apple","id": "X00111111","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' + 
'{"name": "Ben Bounce","id": "B00111111","address": "Rathmines, D6","grades": [44, 22, 77, 33, 41, 50]},' +
'{"name": "Charlie Curry","id": "B00222222","address": "Phibsboro, D7","grades": [80, 88, 75, 81, 90, 77]},' +
'{"name": "Dan Dreamer","id": "X00222222","address": "Cabra, D7","grades": [64, 55, 66, 65, 78, 62]},' +
'{"name": "Emmy Ember","id": "X00333333","address": "Stoneybatter, D7","grades": [53, 55, 55, 52, 51, 60]},' +
'{"name": "Fiona Falls","id": "C00111111","address": "Grangegorman, D7","grades": [90, 91, 88, 80, 81, 97]},' +
'{"name": "Georgina Gull","id": "C00222222","address": "City Centre, D1","grades": [76, 67, 63, 71, 55, 82]},' +
'{"name": "Harry Hops","id": "C00333333","address": "Cabra, D7","grades": [50, 33, 55, 11, 42, 61]},' +
'{"name": "Iris Indie","id": "X00444444","address": "Tallaght, D24","grades": [61, 71, 58, 70, 65, 67]},' +
'{"name": "Jack Jobs","id": "C00444444","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' +
'{"name": "Kat Kid","id": "C00555555","address": "Grangegorman, D7","grades": [41, 41, 50, 48, 55, 44]},' +
'{"name": "Lula Lock","id": "C00666666","address": "Cabra, D7","grades": [77, 80, 85, 80, 78, 81]}' + 
']';

const obj = JSON.parse(STUDENT_DATA_JSON);

const id_s = obj.map(student => student.id).join(",");

document.addEventListener("DOMContentLoaded", ()=>
{
    let paragraph = document.getElementById("pg1")
    paragraph.innerHTML = id_s
});

const student_data_revised = '[' + '{"name": "Annie Apple","id": "X00111111","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' + 
'{"firstname": "Ben","surname": "Bounce","id": "B00111111","address": "Rathmines, D6","grades": [44, 22, 77, 33, 41, 50]},' +
'{"firstname": "Charlie","surname": "Curry","id": "B00222222","address": "Phibsboro, D7","grades": [80, 88, 75, 81, 90, 77]},' +
'{"firstname": "Dan","surname": "Dreamer","id": "X00222222","address": "Cabra, D7","grades": [64, 55, 66, 65, 78, 62]},' +
'{"firstname": "Emmy","surname": "Ember","id": "X00333333","address": "Stoneybatter, D7","grades": [53, 55, 55, 52, 51, 60]},' +
'{"firstname": "Fiona","surname": "Falls","id": "C00111111","address": "Grangegorman, D7","grades": [90, 91, 88, 80, 81, 97]},' +
'{"firstname": "Georgina","surname":"Gull","id": "C00222222","address": "City Centre, D1","grades": [76, 67, 63, 71, 55, 82]},' +
'{"firstname": "Harry","surname": "Hops","id": "C00333333","address": "Cabra, D7","grades": [50, 33, 55, 11, 42, 61]},' +
'{"firstname": "Iris","surname: "Indie","id": "X00444444","address": "Tallaght, D24","grades": [61, 71, 58, 70, 65, 67]},' +
'{"firstname": "Jack","surname": "Jobs","id": "C00444444","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' +
'{"firstname": "Kat","surname": "Kid","id": "C00555555","address": "Grangegorman, D7","grades": [41, 41, 50, 48, 55, 44]},' +
'{"firstname": "Lula","surname":"Lock","id": "C00666666","address": "Cabra, D7","grades": [77, 80, 85, 80, 78, 81]}' + 
']';