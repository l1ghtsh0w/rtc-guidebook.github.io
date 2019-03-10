var staff = [
  "SHIP'S OFFICER (SHIPO)",
  [
    ["CDR Natalya Petrova", "secondlife:///app/agent/613997e7-f260-47ee-b63e-9110dbc0d130/about"]
  ],
  "RECRUIT DIVISION COMMANDERS", 
  [
    ["MACM Chester McFisticuffs", "secondlife:///app/agent/45883043-2dfa-4241-b8b1-64fb4318cb3c/about"],
    ["MAC Curgus", "secondlife:///app/agent/8010c57b-3d1f-4f8b-a616-5cc4cfd03de6/about"],
    ["MAC Jax Texas", "secondlife:///app/agent/6fd4d99a-0c3d-43a3-ae64-74026bb0d1f8/about"]
  ],
  "PHYSICAL TRAINING AND SWIM COACH",
  [
    ["LTJG Antonio Tophat", "secondlife:///app/agent/d25cd2ce-3703-4ae2-89c2-9492a63b49b4/about"]
  ],
  "MARKSMANSHIP RANGE MASTER",
  [
    ["GMC Fiona Goode", "secondlife:///app/agent/31d1e7b3-0de6-470f-a4c7-49349e74afef/about"]
  ],
  "MEDICAL OFFICER/STAFF",
  [
    ["CPT Chayton Coursey (US Army)", "secondlife:///app/agent/4919b983-1974-48fb-8b7a-cdb614c9998d/about"],
    ["HM3 Sawyer Fallenwynter", "secondlife:///app/agent/f25b4a7e-dbbf-48f7-8ad7-7abda31e6bc9/about"]
  ],
  "INSTRUCTORS",
  [
    ["CAPT Connie Mistwalker", "secondlife:///app/agent/842e03a9-3f43-4bb8-a96f-b7ef622673c2/about"],
    ["CAPT Alli Eberdene", "secondlife:///app/agent/9ea0b3c7-6ea3-4438-848b-f5653c779720/about"],
    ["HMCS Jesse Hall", "secondlife:///app/agent/573d5a7d-a0e1-4acb-8dbf-a8e49f202ef1/about"],
    ["ABH2 Emily Strudel", "secondlife:///app/agent/1b0f7acd-272c-4e36-9aa6-dcfee0dc056c/about"]
  ]
]

var terms = [
  ["IC", "In-Character"],
  ["OOC", "Out-Of-Character"],
  ["NSTC", "Naval Service Training Command"],
  ["RTC", "Recruit Training Command"],
  ["RDC", "Recruit Division Commander"],
  ["PQS", "Personal Qualification Standard"]
];

function writeTerms()
{
  var termLen = terms.length;
  var i;
  var newHtml = "";
  for (i=0; i<termLen; i++)
  {
    newHtml += "<p><b>" + terms[i][0] + "</b> - " + terms[i][1] + "</p>";
  }
  document.getElementById("terms").innerHTML = newHtml;
}

function writeStaff()
{
  var staffLen = staff.length;
  var i, j;
  var newHtml = "";
  for (i=0; i<staffLen; i+=2)
  {
    var memLen = staff[i+1].length;
    newHtml = newHtml + "<p class='staff'><span class='job'>" + staff[i] + "</span><br/>";
    for (j=0; j<memLen; j++)
    {
      newHtml += "<span class='name'><a href='" + staff[i+1][j][1] + "'>" + staff[i+1][j][0] + "</a></span><br/>";
    }
    newHtml += "</p>";
  }
  document.getElementById("staff").innerHTML = newHtml;
}


function changeContent(file)
{
  fileNew = "pages/" + file + ".html";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fileNew, false);
  rawFile.onreadystatechange = function ()
  {
    if (rawFile.readyState === 4)
    {
      if (rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        document.getElementById("content").innerHTML = allText;
      }
    }
  }
  rawFile.send(null);

  if (file == "staff")
  {
    writeStaff();
  }
  if (file == "terms")
  {
    writeTerms();
  }
}