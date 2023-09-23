//Part 1
const hospital = {
  name: "Oakville General Hospital",
  patients: [
    {
      id: 1,
      name: "Joey Tribbiani",
      dateOfBirth: "July 25th, 1967",
      symptoms: ["headache", "back pain", "fever"],
    },
    {
      id: 2,
      name: "Chandler Bing",
      dateOfBirth: "August 19th, 1969",
      symptoms: ["memory loss", "cold", "shivering"],
    },
    {
      id: 3,
      name: "Ross Gellar",
      dateOfBirth: "November 2nd, 1966",
      symptoms: ["dizzyness", "shortness of breath", "headache"],
    },
  ],
};
//End of Part 1

//Part 2

function showPatients(hospitalData) {
  let finalOutput = "<h1>" + hospitalData.name + "</h1>";

  for (let i = 0; i < 3; i++) {
    finalOutput =
      finalOutput +
      "<h2>" +
      hospitalData.patients[i].name +
      ", " +
      hospitalData.patients[i].dateOfBirth +
      "</h2> \n";
    finalOutput = finalOutput + "<ul> \n";

    let symptoms = "";
    for (let j = 0; j < 3; j++) {
      symptoms =
        symptoms + "<li>" + hospitalData.patients[i].symptoms[j] + "</li>\n";
    }

    finalOutput = finalOutput + symptoms;
    finalOutput = finalOutput + "</ul> \n";
  }

  //   finalOutput = finalOutput + "<h2>" + hospitalData.patients[0].name + ", " + hospitalData.patients[0].dateOfBirth  + "</h2> \n";
  //     finalOutput = finalOutput + "<h2>" + hospitalData.patients[1].name + ", " + hospitalData.patients[1].dateOfBirth  + "</h2> \n";
  //     finalOutput = finalOutput + "<h2>" + hospitalData.patients[2].name + ", " + hospitalData.patients[2].dateOfBirth  + "</h2> \n";
  return finalOutput;
}

console.log(showPatients(hospital));

// End of Part 2

// patients.

// <h1>Oakville</h1>

//<h2>Joey Tribbiani, July 25th, 1967 </h2>
//<ul>
//<li>headache</li>
//<li>back pain</li>
//<li>fever</li>
//</ul>

//<h2>Joey Tribbiani, July 25th, 1967 </h2>
//<ul>
//<li>headache</li>
//<li>back pain</li>
//<li>fever</li>
//</ul>

//<h2>Joey Tribbiani, July 25th, 1967 </h2>
//<ul>
//<li>headache</li>
//<li>back pain</li>
//<li>fever</li>
//</ul>

// Part 3
function getPatient(patients) {
  return patients[Math.floor(Math.random() * patients.length)].id;
}
console.log(getPatient(hospital.patients))