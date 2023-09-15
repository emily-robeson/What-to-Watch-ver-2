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

function GetValue()
{
  var random = movielist[Math.floor(Math.random() * movielist.length)];
  document.getElementById("message").innerHTML=random.movieName;
}

let showlist = [
    {
        idShow: 1,
        showName: ''
    }
]