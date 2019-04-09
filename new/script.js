const staff = [];
const terms = [];
const quotes = [];

function loaded()
{
  // writeQuotes();
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
        document.getElementById("content-section").innerHTML = allText;
      }
    }
  }

  rawFile.send(null);

  // if (file == "staff")
    // writeStaff();
  // if (file == "terms")
    // writeTerms();

  // writeQuotes();
}

/*
function writeStaff()
{
  var staffLength = staff.length;
  var i, j;
  var newHtml = "";

  for (i=0; i<staffLength; i+=2)
  {
    var memLen = staff[i+1].length;
    newHtml = newHtml + "<p class='staff'>" + staff[i] + "<br />";

    for (j=0; j<memLen; j++)
      newHtml += "<span class='name'><a href='" + staff[i+1][j][1] + "'>" + staff[i+1][j][0] + "</a></span><br />";

    newHtml += "</p>";
  }

  document.getElementById("staff-section").innerHTML = newHtml;
}

function writeTerms()
{
  var termsLength = terms.length;
  var i;
  var newHtml = "<dd>";

  for (i=0; i<termsLength; i++)
    newHtml += "<p><dt>" + terms[i][0] + "</dt><dd>" + terms[i][1] + ";<br />" + terms[i][2] + "</dd></p>";

  newHtml += "</dt>";

  document.getElementById("terms-section").innerHtml = newHtml;
}

function writeQuotes()
{
  var quote = document.getElementsByClassName("quote-section");
  var quoteNums = quote.length;
  var shuffled = quotes.sort(() => 0.5 - Math.random());
  var selected = shuffled.slice(0, quoteNums);
  var i;

  for (i=0; i<quoteNums; i++)
    quoute[i].innerHtml = "<em>&quot;" + quotes[i][0] + "&quot;</em><br />— " + quotes[i][1];
}
*/