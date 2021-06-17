const aCourse = {
   code: 'CSE121b',
   name: 'Javascript Language', 
   logo: 'images/jslogo.png',
   sections: [
      { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
      { sectionNum: 2, roomNum: 'STC 347', enrolled: 25, days: 'TTh', instructor: 'Sis A'},
     ], 
     createSection: function(section) {
      // find highest current section number
      const highSectionNum = this.sections.reduce((highest, current) => Math.max(highest, current.sectionNum));
      const newSection = { sectionNum: highSectionNum+1, enrolled: section.enrolled,};
      console.log(highSectionNum);
    } 
 }

 console.log(aCourse.code);

 document.querySelector('.title').textContent = aCourse.name;

 document.querySelector('img').setAttribute('src', aCourse.logo);

 document.querySelector('img').setAttribute('alt', aCourse.name);

 console.log(aCourse.createSection());

//document.querySelector('#sections').innerHTML = '<li>' + aCourse.sections[0].roomNum + '</li>';

// OR

const newListItem = document.createElement('li');
newListItem.innerText = aCourse.sections[0].roomNum;
document.querySelector('#sections').appendChild(newListItem);

aCourse.sections.forEach(function(item){
   const newListItem = document.createElement('li');
   newListItem.innerText = item.roomNum;
   document.querySelector('#sections').appendChild(newListItem);
})