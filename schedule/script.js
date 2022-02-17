let xmlContent = "";
let tablemain = document.getElementById("wrapper__main__table");

/*call fetch() method, passing it the URL of the resource */
fetch("file.xml").then((response) => {
  response.text().then((xml) => {
    xmlContent = xml;

    /* Creates a new DOMParser object */
    let parser = new DOMParser();   

    /* Parses a string using either the XML parser, returning an  XMLDocument */
    let xmlDOM = parser.parseFromString(xmlContent, "application/xml");

    let item = xmlDOM.querySelectorAll("planner_item");

    item.forEach((dayXmlNode) => { /* enumeration of values xml file  */
      /* create tr element */
      let row = document.createElement("tr");
      
      /* create td element for item day in xml*/
      let td = document.createElement("td");
      td.innerHTML = dayXmlNode.children[0].innerHTML;
      row.appendChild(td);

      /* create td element for item time in xml*/
      td = document.createElement("td");
      td.innerHTML = dayXmlNode.children[1].innerHTML;
      row.appendChild(td);
      
      /* create td element for item descriptions in xml*/
      td = document.createElement("td");
      td.innerHTML = dayXmlNode.children[2].innerHTML;
      row.appendChild(td);

      tablemain.children[1].appendChild(row);
    });
  });
});

const changeForm = document.querySelector(".wrapper__change-table");


function onclick(e) {
  /* selection first radio button */
  if (e.target.id == "first_style") {
    /*change background color for head and body */
    document.querySelector("table").style.background = '#D4E3E5'
    document.querySelector("thead").style.background = '#AEC5C8'
    
    /*change text color*/
    document.querySelectorAll("td").forEach(function (td) {
      td.style.color = 'white';
    });

    document.querySelectorAll("p").forEach(function (p) {
      p.style.color = 'white';
    });

  }

  /* selection second radio button */
  if (e.target.id == "second_style") {

    /*change background color for head and body */
    document.querySelector("table").style.background = '#DBF213'
    
    /*change text color*/
    document.querySelector("thead").style.background = '#C9D467'
    document.querySelectorAll("td").forEach(function (td) {
      td.style.color = 'white';
    });
    document.querySelectorAll("p").forEach(function (p) {
      p.style.color = 'white';
    });
  }
}

/* enumeration of radio button */
for (var i = 0; i < changeForm.style.length; i++) {
  changeForm.style[i].addEventListener("click", onclick);
}

const colorBackground = document.querySelector("#color__background");
const colorText = document.querySelector("#color__text");
const textSize = document.querySelector("#text__size");

window.addEventListener("load", startup);

function startup() {
  colorBackground.addEventListener("change", updateBackgroundColor);
  colorText.addEventListener("change", updateTextColor);
  textSize.addEventListener("click", updateTextSize);
}

function updateBackgroundColor(event) {

  document.querySelector("table").style.background = event.target.value;
  document.querySelector("thead").style.background = event.target.value;

}

function updateTextColor(event) {

  document.querySelectorAll("td").forEach(function (td) {
    td.style.color = event.target.value;
  });
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = event.target.value;
  });

}

function updateTextSize(event) {

  const tab = document.querySelector("table");
  tab.style.fontSize = event.target.value + "px";

}

