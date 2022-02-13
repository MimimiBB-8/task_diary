
let xmlContent = "";
let tablemain = document.getElementById("wrapper__main__table");
fetch("file.xml").then((response) => {

  response.text().then((xml) => {

    xmlContent = xml;
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, "application/xml");
    let item = xmlDOM.querySelectorAll("planner_item");

    item.forEach((dayXmlNode) => {
      let row = document.createElement("tr");

      let td = document.createElement("td");
      td.innerHTML = dayXmlNode.children[0].innerHTML;
      row.appendChild(td);

      td = document.createElement("td");
      td.innerHTML = dayXmlNode.children[1].innerHTML;
      row.appendChild(td);

      td = document.createElement("td");
      td.innerHTML = dayXmlNode.children[2].innerHTML;
      row.appendChild(td);

      tablemain.children[1].appendChild(row);
    });

  });
  
});