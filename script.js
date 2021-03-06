const staff = [
  "COMMANDING OFFICER (CO)",
  [
    ["CAPT Natalya Petrova [CNSTC]", "secondlife:///app/agent/613997e7-f260-47ee-b63e-9110dbc0d130/about"]
  ],
  "SHIP'S OFFICER (SHIPO)",
  [
    ["LT Chayton Coursey", "secondlife:///app/agent/4919b983-1974-48fb-8b7a-cdb614c9998d/about"]
  ],
  "RECRUIT DIVISION COMMANDERS (RDC)", 
  [
    ["CMC Chester McFisticuffs [LRDC]", "secondlife:///app/agent/45883043-2dfa-4241-b8b1-64fb4318cb3c/about"],
    ["HMCS Jesse Hall", "secondlife:///app/agent/573d5a7d-a0e1-4acb-8dbf-a8e49f202ef1/about"],
    ["BM1 Mia Trinity", "secondlife:///app/agent/efb5607c-d594-4e0d-8442-74da73c6a1c5/about"],
    ["NC2 Emily Strudel", "secondlife:///app/agent/1b0f7acd-272c-4e36-9aa6-dcfee0dc056c/about"]
  ],
  "MARKSMANSHIP RANGE MASTER",
  [
    ["GMC Fiona Goode", "secondlife:///app/agent/31d1e7b3-0de6-470f-a4c7-49349e74afef/about"]
  ],
  "MEDICAL OFFICER/STAFF",
  [
    ["LT Chayton Coursey", "secondlife:///app/agent/4919b983-1974-48fb-8b7a-cdb614c9998d/about"],
    ["ENS Sawyer Fallenwynter", "secondlife:///app/agent/f25b4a7e-dbbf-48f7-8ad7-7abda31e6bc9/about"]
  ],
  "INSTRUCTORS",
  [
    ["CAPT Connie Mistwalker", "secondlife:///app/agent/842e03a9-3f43-4bb8-a96f-b7ef622673c2/about"],
    ["CAPT Alli Eberdene", "secondlife:///app/agent/9ea0b3c7-6ea3-4438-848b-f5653c779720/about"],
    ["CAPT Chrissy Dehner", "secondlife:///app/agent/ed5ab8db-1775-4a9e-a3db-06c0416f29ef/about"],
    ["CDR Bambi Baxter", "secondlife:///app/agent/f30b1bcc-6e0e-4d5f-a28c-9d4ef0dd8a94/about"],
    ["CDR Dave Gaffer", "secondlife:///app/agent/9ff1dc8a-1cb8-4fd9-9e4a-58675f80c2ea/about"],
    ["LT Amara Quandry", "secondlife:///app/agent/aa1d463d-4341-4475-b61d-533218b7cacd/about"]
  ]
]

const terms = [
  ["USNSL", "US Navy in SL", "the United States Navy in Second Life."],
  ["IC", "In-Character", "when acting as your character in a role play."],
  ["OOC", "Out-Of-Character", "when NOT acting as your character in a role play."],
  ["NSO", "Naval Station Oryx", "a USNSL base on the continent of Corsica."],
  ["NSTC", "Naval Service Training Command", "where training for the USNSL occurs."],
  ["RTC", "Recruit Training Command", "the name of the training program for those applying to enlisted service."],
  ["Sailorization", "The goal of RTC", "the process of being transformed from a civilian to a basically trained sailor."],
  ["LRDC", "Lead Recruit Division Commander", "the leading/commanding RDC at RTC."],
  ["RDC", "Recruit Division Commander", "teachers and those in charge at RTC."],
  ["DEP", "Delayed Entry Program", "a program to introduce new applicants to the basics, in preparation for RTC."],
  ["PQS", "Personal Qualification Standard", "a collection of training objectives."]
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

function loaded()
{
  writeQuotes();
}

function writeQuotes()
{
  var quote = document.getElementsByClassName("quote");
  var quoteNums = quote.length;
  var shuffled = quotes.sort(() => 0.5 - Math.random());
  var selected = shuffled.slice(0, quoteNums);
  for (var i=0; i<quoteNums; i++)
    quote[i].innerHTML = '<em>"' + quotes[i][0] + '"</em><br />— ' + quotes[i][1];
}

function writeTerms()
{
  var termLen = terms.length;
  var i;
  var newHtml = "<dl>";
  for (i=0; i<termLen; i++)
  {
    newHtml += "<dt>" + terms[i][0] + "</dt><dd>" + terms[i][1] + ";<br/>" + terms[i][2] + "</dd>";
  }
  newHtml += "</dl>";
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

