const Matcher = {
   title: 'Find Your Match!',
   code: 'College',
   logo: 'images/Matcher.png',
   Girls: [
      { GrilNum: 0, name: 'Abby', Age: 21, FavFood: 'Pizza', HairColor: 'Blonde', FavBand: 'ColdPlay' },
      { GrilNum: 1, name: 'Maddie', Age: 20, FavFood: 'Cheeseburgers', HairColor: 'Red', FavBand: 'Twenty One Pilots' },
      { GrilNum: 2, name: 'Leah', Age: 24, FavFood: 'Nachos', HairColor: 'Brown', FavBand: 'Beatles' },
      { GrilNum: 3, name: 'Marry', Age: 19, FavFood: 'Chicken Nuggets', HairColor: 'Blonde', FavBand: 'Jon Bellion' },
      { GrilNum: 4, name: 'Mackenzie', Age: 21, FavFood: 'Pizza', HairColor: 'Blue', FavBand: 'ColdPlay' },
      { GrilNum: 5, name: 'Riley', Age: 20, FavFood: 'Sandwiches', HairColor: 'Brunette', FavBand: 'Illenium' },
      { GrilNum: 6, name: 'Haley', Age: 23, FavFood: 'Lasagna', HairColor: 'Black', FavBand: 'Chicago' },
      { GrilNum: 7, name: 'Kaley', Age: 19, FavFood: 'Spaghetti', HairColor: 'Blonde', FavBand: 'U2' },
      { GrilNum: 8, name: 'Anna', Age: 22, FavFood: '', HairColor: 'Blonde', FavBand: 'OneRepublic' },
      { GrilNum: 9, name: 'Bethany', Age: 18, FavFood: 'Tacos', HairColor: 'Red', FavBand: 'Daddy Yankey' },
    ],
    Boys: [
      { BoyNum: 0, name: 'Brian', Age: 21, FavFood: 'Apples', HairColor: 'Blonde', FavBand: 'ColdPlay' },
      { BoyNum: 1, name: 'Adam', Age: 20, FavFood: 'Cheeseburgers', HairColor: 'Brown', FavBand: 'Twenty One Pilots' },
      { BoyNum: 2, name: 'Luke', Age: 24, FavFood: 'Spaghetti', HairColor: 'Brown', FavBand: 'Beatles' },
      { BoyNum: 3, name: 'Garrett', Age: 19, FavFood: 'Chicken Nuggets', HairColor: 'Blonde', FavBand: 'Illenium' },
      { BoyNum: 4, name: 'Will', Age: 21, FavFood: 'Pizza', HairColor: 'Blonde', FavBand: 'U2' },
      { BoyNum: 5, name: 'Aiden', Age: 20, FavFood: 'Cereal', HairColor: 'Brunette', FavBand: 'Jon Bellion' },
      { BoyNum: 6, name: 'Henry', Age: 23, FavFood: 'Lasagna', HairColor: 'Blonde', FavBand: 'Chicago' },
      { BoyNum: 7, name: 'Larry', Age: 19, FavFood: 'Nachos', HairColor: 'Blacke', FavBand: 'U2' },
      { BoyNum: 8, name: 'Bob', Age: 22, FavFood: '', HairColor: 'Red', FavBand: 'Daddy Yankey' },
      { BoyNum: 9, name: 'Aaron', Age: 18, FavFood: 'Tacos', HairColor: 'Brown', FavBand: 'OneRepublic' }, 
    ]
 }

 document.querySelector('.title').textContent = Matcher.title;
 document.querySelector('#output').textContent = "Input Your Name Here";
 document.querySelector('img').setAttribute('src', Matcher.logo);

 const buttonElement = document.getElementById('submitButton');

 function makeAMatch() {
   const inputElement = document.getElementById('inputBox');
   let aBoy = Matcher['Boys']
   for(propertyName in aBoy){
      if (inputElement.value === aBoy[propertyName].name)
      {
         let aGirl = Matcher['Girls']
         for(propertyName in aGirl)
         {
            if (inputElement.value === aBoy[propertyName].name)
            {   
               let count = 0;
               var boolAge = false;
               var boolFavFood = false;
               var boolHairColor = false;
               var boolFavBand = false;
               if (aBoy[propertyName].Age === aGirl[propertyName].Age)
               {
                  count ++;
                  boolAge = true;
               }
               if (aBoy[propertyName].FavFood === aGirl[propertyName].FavFood)
               {
                  count ++;
                  boolFavFood = true;
               }
               if (aBoy[propertyName].HairColor === aGirl[propertyName].HairColor)
               {
                 count ++;
                 boolHairColor = true;
               }
               if (aBoy[propertyName].FavBand === aGirl[propertyName].FavBand)
               {
                  count ++;
                  boolFavBand = true;
               }
            if (count >= 2) 
            {
               document.querySelector('#Answer').textContent = "Congratulations! You have matched with: ";
               document.querySelector('#Girl').textContent = aGirl[propertyName].name;
               document.querySelector('#Text').textContent = "You Have in Common:";
               if (boolAge)
               {
                  const newSections = document.createElement('sections');
                  newSections.textContent =  "Age:";
                  document.body.appendChild(newSections);

                  const newSection = document.createElement('section');
                  newSection.textContent =  aGirl[propertyName].Age;
                  document.body.appendChild(newSection);
               }  
               if (boolFavFood)
               {
                  const newSections = document.createElement('sections');
                  newSections.textContent =  "Favorite Food:";
                  document.body.appendChild(newSections);

                  const newSection = document.createElement('section');
                  newSection.textContent =  aGirl[propertyName].FavFood;
                  document.body.appendChild(newSection);
               }  
               if (boolHairColor)
               {
                  const newSections = document.createElement('sections');
                  newSections.textContent =  "Your Hair Color:";
                  document.body.appendChild(newSections);

                  const newSection = document.createElement('section');
                  newSection.textContent =  aGirl[propertyName].HairColor;
                  document.body.appendChild(newSection);
               }  
               if (boolFavBand)
               {
                  const newSections = document.createElement('sections');
                  newSections.textContent =  "Your Favorite Band:";
                  document.body.appendChild(newSections);

                  const newSection = document.createElement('section');
                  newSection.textContent =  aGirl[propertyName].FavBand;
                  document.body.appendChild(newSection);
               }  
            console.log(aBoy[propertyName].name);
            console.log(aGirl[propertyName].name);
            console.log('match');
            console.log(count);
            }
            }
         }
      }
   }
 }
 buttonElement.addEventListener('click', makeAMatch);