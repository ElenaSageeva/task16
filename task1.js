const xml_data = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parse = new DOMParser;
let xml_str = parse.parseFromString(xml_data, 'text/xml');

function person(xml) {
    let student = xml.querySelectorAll('student')
    let student_data = {
        list: []
    };
    for (i = 0; i < student.lenght; i++) {
        let current_student = {
            name: `${student[i].querySelector('first').textContent} ${student[i].querySelector('second').textContent}`,
            age: student[i].querySelector('age').textContent,
            prof: student[i].querySelector('prof').textContent,
            lang: student[i].querySelector('name').getAttribute('lang')
                }
                student_data.list.push(current_student);
    }
    return student_data;
}
console.log(person(xml_str));
