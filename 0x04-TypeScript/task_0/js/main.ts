interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Nelisiwe",
  lastName: "Mahlangu",
  age: 27,
  location: "Johanessburg",
}

const studentB: Student = {
  firstName: "Thando",
  lastName: "Khumalo",
  age: 25,
  location: "Pretoria",
}

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.map((item: Student) => {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  const tdElement = document.createElement('td');
  tdElement.innerHTML = item.firstName;
  tr.appendChild(tdElement);
  const tdElement2 = document.createElement('td');
  tdElement2.innerHTML = item.location;
  tr.appendChild(tdElement2);
  return tr;
});
