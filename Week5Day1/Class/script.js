//DOM- querySelector
// const myHeader = document.querySelector("h1");

// console.log(myHeader.textContent);

// const myP = document.querySelector("p");

// console.log(myP.textContent);

// const myLi = document.querySelector("li");

// console.log(myLi);

// const myPs = document.querySelectorAll("li");
// console.log(myPs);

// for (let li of myPs) {
//   console.log(li.textContent);
// }

// const ul = document.querySelector("ul");
// console.log(ul.childNodes);;

// const myH2 = document.querySelector("h2");
// console.log(myH2);

// const myLi = document.querySelectorAll(".listItems");

// console.log(myLi);

// const myP = document.querySelector("#anotherP");

// console.log(myP.textContent);

// const againMyP = document.getElementById("anotherP");

// console.log(againMyP.textContent);

// const lis = document.getElementsByTagName("li");
// console.log(lis);

//exercise
// const div1 = document.querySelector("div");
// const div2 = document.querySelectorAll("div")[0];
// const div3 = document.querySelector("body").firstElementChild;

// console.log(div1);
// console.log(div2);
// console.log(div3);

// const ul = div1.nextElementSibling;
// const ul1 = document.querySelector("ul");

// console.log(ul);
// console.log(ul1);

// const li1 = document.querySelectorAll("li")[1];
// const li2 = ul.children[1];

// console.log(li1);
// console.log(li2);

// const li2nd = document.getElementById("2ndli");
// console.log(li2nd.textContent);

// console.log(ul);
// console.log(ul.innerHTML);
// const body = document.body;
// const myHeader = document.createElement("h1");
// const myP = document.createElement("p");

//with createtextnode
// const mytext = document.createTextNode("Dom Manipulation");
// myHeader.append(mytext);
// myHeader.style.backgroundColor = "blue";
// myHeader.style.color = "white";

// myHeader.innerText = "Dom Manipulation";
// myP.innerText =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quam illo ullam neque, a suscipit obcaecati, excepturi, ducimus eveniet sunt error voluptas. Exercitationem asperiores illo incidunt iusto similique facilis? Sunt.";
// myP.style.border = "4px dotted salmon";
// // console.log(myP.style);
// body.append(myHeader, myP);

// const h3 = document.querySelector("h3");
// h3.innerText = "h3h3h3h3";

// h3.remove();

// console.log(myHeader.matches("h1"));

// for (let element of body.children) {
//   if (element.matches("h1")) {
//     console.log(element);
//   }
// }
// console.log(body.children);

// console.log(h3.closest(".aDiv"));

//Attributes

// const div = document.querySelector("#elem");

// console.log(div.hasAttribute("id"));

// console.log(div.getAttribute("id"));
// console.log(div.getAttribute("src")); // will get null

// div.setAttribute("style", "border:5px solid blue");
// div.setAttribute("class", "myClass red allHeaders");

// console.log(div.hasAttribute("class"));

// div.removeAttribute("style");
// div.className = "newClass";
// console.log(div.className);

// const forms = document.forms;

// console.log(forms[1]);
// forms.dogform.elements.petname.value = "Mitzy";

// const myInput = document.getElementById("dogname");
// console.log(myInput.form);

// const form = document.forms[0];
// console.log(form.elements.age);
const select = document.getElementById("mySelect");
console.log(select.options);
console.log(select.value);
console.log(select.selectedIndex);
