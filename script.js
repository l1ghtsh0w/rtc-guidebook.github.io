const staff = [
  "SHIP'S OFFICER (SHIPO)",
  [
    ["CDR Natalya Petrova", "secondlife:///app/agent/613997e7-f260-47ee-b63e-9110dbc0d130/about"]
  ],
  "RECRUIT DIVISION COMMANDERS", 
  [
    ["CMC Chester McFisticuffs", "secondlife:///app/agent/45883043-2dfa-4241-b8b1-64fb4318cb3c/about"],
    ["MAC Curgus", "secondlife:///app/agent/8010c57b-3d1f-4f8b-a616-5cc4cfd03de6/about"],
    ["MAC Jax Texas", "secondlife:///app/agent/6fd4d99a-0c3d-43a3-ae64-74026bb0d1f8/about"]
  ],
  "PHYSICAL TRAINING AND SWIM COACH",
  [
    ["CAPT Alli Eberdene", "secondlife:///app/agent/9ea0b3c7-6ea3-4438-848b-f5653c779720/about"],
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
    ["CAPT Alli Eberdene", "secondlife:///app/agent/9ea0b3c7-6ea3-4438-848b-f5653c779720/about"],
    ["CAPT Connie Mistwalker", "secondlife:///app/agent/842e03a9-3f43-4bb8-a96f-b7ef622673c2/about"],
    ["CDR Bambi Baxter", "secondlife:///app/agent/f30b1bcc-6e0e-4d5f-a28c-9d4ef0dd8a94/about"],
    ["HMCS Jesse Hall", "secondlife:///app/agent/573d5a7d-a0e1-4acb-8dbf-a8e49f202ef1/about"],
    ["ABH2 Emily Strudel", "secondlife:///app/agent/1b0f7acd-272c-4e36-9aa6-dcfee0dc056c/about"]
  ]
]

const terms = [
  ["USNSL", "US Navy in SL"],
  ["IC", "In-Character"],
  ["OOC", "Out-Of-Character"],
  ["NSO", "Naval Station Oryx"],
  ["NSTC", "Naval Service Training Command"],
  ["RTC", "Recruit Training Command"],
  ["RDC", "Recruit Division Commander"],
  ["PQS", "Personal Qualification Standard"],
  ["NWU", "Navy Working Uniform"],
  ["Peanut Butters", "Enlisted Service Uniform"]
];

const quotes = [
  ["It is the function of the Navy to carry the war to the enemy so that it is not fought on U.S. soil.", "Fleet Admiral Chester W. Nimitz"],
  ["For much of my life, the Navy was the only world I knew. It is still the world I know best and love most.", "Captain John McCain"],
  ["I wouldn't trade those 10 years for anything. The Navy taught me a lot of things. It molded me as a man, and I made a lot of wonderful friends.", "GM1 Ernest Borgnine"],
  ["I was in World Ward II; I cried when they took me in the Navy. That's the last time I cried.", "Don Rickles"],
  ["A captain of the Navy ought to be a man of strong and well connected sense, with a tolerable good education, a gentleman, as well as a seaman both in theory and practice.", "John Paul Jones"],
  ["... Without a respectable Navy, alas America!", "John Paul Jones"],
  ["I wish to have no connection with any ship that does not sail fast for I intend to go in harm's way.", "John Paul Jones"],
  ["We have met the enemy and they are ours...", "Oliver Hazard Perry"],
  ["A good Navy is not a provocation to war. It is the surest guarantee of peace.", "President Theodore Roosevelt"],
  ["The Navy has both a tradition and a future - and we look with pride and confidence in both directions.", "Admiral George Anderson"],
  ["I can imagine no more rewarding a career. And any man who may be asked in this century what he did to make his life worthwhile, I think can respond with a good deal of pride and satisfaction: 'I served in the United States Navy.'", "President John F. Kennedy"]
]

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function loaded()
{
  writeTime();
  writeQuotes();
}

function writeTime()
{
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var offset = -7;
  var pst = utc + (3600000 * offset)
  var nd = new Date(pst);

  var dt = days[nd.getDay()] + ", " + nd.getDate().toString() + months[nd.getMonth()] + nd.getFullYear().toString();

  document.getElementById("dateTime").innerHTML = dt;
}

function writeQuotes()
{
  var quote = document.getElementsByClassName("quote");
  var quoteNums = quote.length;
  var shuffled = quotes.sort(() => 0.5 - Math.random());
  var selected = shuffled.slice(0, quoteNums);
  for (var i=0; i<quoteNums; i++)
    quote[i].innerHTML = '<em>' + quotes[i][0] + '"</em><br />— ' + quotes[i][1];
}

function writeTerms()
{
  // Change HTML to definition list?
  var termLen = terms.length;
  var i;
  var newHtml = "";
  for (i=0; i<termLen; i++)
  {
    newHtml += "<p class='term'><strong>" + terms[i][0] + "</strong> - " + terms[i][1] + "</p>";
  }
  document.getElementById("terms").innerHTML = newHtml;
}

function writeStaff()
{
  // Expand variable names
  var staffLen = staff.length;
  var i, j;
  var newHtml = "";
  for (i=0; i<staffLen; i+=2)
  {
    var memLen = staff[i+1].length;
    newHtml = newHtml + "<p class='staff'>" + staff[i] + "<br />";
    for (j=0; j<memLen; j++)
    {
      newHtml += "<span class='name'><a href='" + staff[i+1][j][1] + "'>" + staff[i+1][j][0] + "</a></span><br />";
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
  writeQuotes();
}

