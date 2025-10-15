const STUDENT_DATA_JSON = '[' + 
'{"firstname": "Annie","surname": "Apple","id": "X00111111","address": "Phibsboro, D7","grades": [60,71,55,53,44,62]},' + 
'{"firstname": "Ben","surname": "Bounce","id": "B00111111","address": "Rathmines, D6","grades": [44,22,77,33,41,50]},' +
'{"firstname": "Charlie","surname": "Curry","id": "B00222222","address": "Phibsboro, D7","grades": [80,88,75,81,90,77]},' +
'{"firstname": "Fiona","surname": "Falls","id": "C00111111","address": "Grangegorman, D7","grades": [90,91,88,80,81,97]}' +
']';

const obj = JSON.parse(STUDENT_DATA_JSON);

const id_s = obj.map(student => student.id).join(", ");

document.addEventListener("DOMContentLoaded", () => {
    // Display student IDs
    let paragraph = document.getElementById("pg1");
    paragraph.innerHTML = "<h1>Student ID's:</h1>" + id_s;

    // Find highest average
    const highest = Math.max(...obj.map(s => s.grades.reduce((a,b) => a+b, 0) / s.grades.length));

    
    const updated = obj.map(s => {
        const [town, p_code] = s.address.split(", ");
        const avg = s.grades.reduce((a,b) => a+b, 0) / s.grades.length;

        let result;
        if(avg === highest) {
            result = "A";
        } else if(avg >= 40) {
            result = "P";
        } else {
            result = "F";
        }

        return { ...s, town, postcode: +p_code.replace("D",""), average: +avg.toFixed(2), result };
    });

    
    let new_data_pg = document.getElementById("pg2");
    new_data_pg.innerHTML = updated
        .map(s => `firstname: ${s.firstname}, surname: ${s.surname}, Average: ${s.average}, result: (${s.result})`)
        .join(" ");
});
