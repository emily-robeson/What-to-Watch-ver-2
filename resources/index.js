let movielist = [
    {
      idMovie: 1,
      movieName: 'unavailable movie example, Service: 🏴‍☠️'
      },
    {
        idMovie: 2,
        movieName: 'Nimona, Service: Netflix'
        },  
    {
        idMovie: 3,
        movieName: 'Next Marvel movie, currently: Ant-Man and the Wasp: Quantumania, Service: Disney+'
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
];

function GetYoutube()
{
  var random = youtubelist[Math.floor(Math.random() * youtubelist.length)];
  document.getElementById("message").innerHTML=random.youtubeName;
}