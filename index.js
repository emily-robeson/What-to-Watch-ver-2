let movielist = [
    {
      idMovie: 1,
      movieName: "We're Back, A Dinosaur Story, Service: Amazon?, 🏴‍☠️"
      },
    {
        idMovie: 2,
        movieName: 'Nimona, Service: Netflix'
        },  
    {
        idMovie: 3,
        movieName: 'Next Marvel movie, currently: Ant-Man and the Wasp: Quantumania, Service: Disney+'
        },
    {
        idMovie: 4,
        movieName: 'Coco, Service: Disney+'
        },
    {
        idMovie: 5,
        movieName: 'Ghostbusters, Service: Amazon?, 🏴‍☠️'
        },
    {
        idMovie: 6,
        movieName: 'Fox and the Hound, Service: Disney+'
        },
   ];

function GetMovie()
{
  var random = movielist[Math.floor(Math.random() * movielist.length)];
  document.getElementById("message").innerHTML=random.movieName;
}



let showlist = [
    {
        idShow: 1,
        showName: 'Taskmaster New Zealand, Service: Channel 4'
        },
    {
        idShow: 2,
        showName: 'Sex Education, Service: Netflix'
        },
    {
        idShow: 3,
        showName: 'The Orville, Service: Disney+'
        },
    {
        idShow: 4,
        showName: 'Kipo, Service: Netflix'
        },
    {
        idShow: 5,
        showName: 'Unbreakable Kimmy Schmidt, Service: Netflix'
        },
    {
        idShow: 6,
        showName: 'Battlestar Galactica, Service: Peacock?, 🏴‍☠️'
        },
    {
        idShow: 7,
        showName: 'Dead Little Roosters, Service: RT site'
        },           
];

function GetShow()
{
  var random = showlist[Math.floor(Math.random() * showlist.length)];
  document.getElementById("message").innerHTML=random.showName;
}



let youtubelist = [
    {
        idYoutube: 1,
        youtubeName: 'Map Men'
        },
    {
        idYoutube: 2,
        youtubeName: 'Josh Strife'
        },
    {
        idYoutube: 3,
        youtubeName: 'Outside Xbox/Xtra'
        },
    {
        idYoutube: 4,
        youtubeName: 'Real Civil Engineer'
        },
    {
        idYoutube: 5,
        youtubeName: 'Taskmaster Compilations'
        },
    {
        idYoutube: 6,
        youtubeName: 'Who/TrekCulture'
        },        
];

function GetYoutube()
{
  var random = youtubelist[Math.floor(Math.random() * youtubelist.length)];
  document.getElementById("message").innerHTML=random.youtubeName;
}