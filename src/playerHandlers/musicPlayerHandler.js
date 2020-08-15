export default class noteifyPlayerHandler {
  constructor() {}

  playSong(audio) {
    audio.play();
  }

  pauseSong(audio) {
    audio.pause();
  }

  updateProgressBar(audio, progressBar) {
    if (audio) {
      var length = audio.duration;
      var timeElapsed = audio.currentTime;

      var current = this.calculateCurrentValue(timeElapsed);
      var ctx = progressBar.getContext("2d");
      progressBar.width = window.innerWidth;
      ctx.clearRect(0, 0, progressBar.clientWidth, progressBar.clientHeight);
      ctx.fillStyle = "#222f3e";
      var barWidth = (timeElapsed / length) * progressBar.clientWidth;
      ctx.fillRect(0, 0, barWidth, progressBar.clientHeight);
      return current;
    }
  }

  barGoTo(audio, progressBar, event) {
    var percent = event.offsetX / event.target.offsetWidth;
    audio.currentTime = percent * audio.duration;
    progressBar.value = percent;
  }

  calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2),
      time = minutes + ":" + seconds;

    return time;
  }

  calculateCurrentValue(currentTime) {
    var current_minute = parseInt(currentTime / 60) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed();

    if (current_seconds == 60) {
      current_seconds = 0;
      current_minute += 1;
    }

    var current_time =
      (current_minute < 10 ? current_minute : current_minute) +
      ":" +
      (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
  }
}

export const playlist = [
  {
    id: 1,
    author: "Kings of leon",
    title: "Pyro",
    album: "Come around sundown",
    duration: "4:12",
    img: "kings-of-leon.jpg",
    url: "Kings Of Leon - Pyro.mp3"
  },
  {
    id: 2,
    author: "The Cranberries",
    title: "Dreams",
    album: "Everybody Else Is Doing It So Why Can't We",
    duration: "4:13",
    img: "everybody-else-is-doing-it-so-why-can-t-we-w-iext47669720.jpg",
    url: "The Cranberries - Dreams.mp3"
  },
  {
    id: 3,
    author: "The Police",
    title: "Every breath you take",
    album: "The Synchronicity",
    duration: "3:58",
    img: "Police-album-synchronicity.jpg",
    url: "The Police - Every Breath You Take.mp3"
  },
  {
    id: 4,
    author: "AC/DC",
    title: "Thunderstruck",
    album: "The Razor's edge",
    duration: "4:52",
    img: "the-razor-s-edge-w-iext43236895.jpg",
    url: "ACDC - Thunderstruck.mp3"
  },
  {
    id: 5,
    author: "Bronski Beat",
    title: "Smalltown Boy",
    album: "The age of consent",
    duration: "5:03",
    img: "the-age-of-consent-1.jpg",
    url: "Bronski Beat - Smalltown Boy.mp3"
  },
  {
    id: 6,
    author: "Kavinsky",
    title: "Nightcall",
    album: "Outrun",
    duration: "4:15",
    img: "kavinsky.jpg",
    url: "Kavinsky - Nightcall (Drive Original Movie Soundtrack).mp3"
  },
  {
    id: 7,
    author: "Bryan Adams",
    title: "Summer of '69",
    album: "Reckless",
    duration: "3:32",
    img: "adams_reckless.jpg",
    url: "Bryan Adams - Summer of 69.mp3"
  },
  {
    id: 8,
    author: "M83",
    title: "Midnight City",
    album: "Hurry up, we're dreaming",
    duration: "4:03",
    img: "m83.jpg",
    url: "M83 Midnight City Official video.mp3"
  },
  {
    id: 9,
    author: "AC/DC",
    title: "You Shook Me All Night Long",
    album: "Back in black",
    duration: "3:28",
    img: "Acdc_backinblack_cover.jpg",
    url: "ACDC - You Shook Me All Night Long.mp3"
  },
  {
    id: 10,
    author: "Foster The People",
    title: "Pumped Up Kicks",
    album: "Pumped up kicks",
    duration: "4:16",
    img: "foster_the_people.jpg",
    url: "Foster The People - Pumped up Kicks.mp3"
  },
  {
    id: 11,
    author: "Nirvana",
    title: "Smells Like Teen Spirit",
    album: "Nevermind",
    duration: "4:38",
    img: "NirvanaNevermindalbumcover.jpg",
    url: "Nirvana - Smells Like Teen Spirit.mp3"
  },
  {
    id: 12,
    author: "Ice Cube",
    title: "It Was A Good Day",
    album: "Predator",
    duration: "4:20",
    img: "Ice_Cube_-_The_Predator_-_Album_Cover.jpg",
    url: "It Was A Good Day.mp3"
  },
  {
    id: 13,
    author: "Gorillaz",
    title: "Clint Eastwood",
    album: "Gorillaz",
    duration: "4:29",
    img: "GorillazAlbum.jpg",
    url: "Gorillaz - Clint Eastwood (Official Video).mp3"
  },
  {
    id: 14,
    author: "Kyle Dixon & Michael Stein",
    title: "Soldiers",
    album: "Stranger Things OST - Season 2",
    duration: "2:07",
    img: "stranger_things_season_1.jpg",
    url: "Kyle Dixon  Michael Stein - Soldiers.mp3"
  },
  {
    id: 15,
    author: "Kyle Dixon & Michael Stein",
    title: "Kids",
    album: "Stranger Things OST - Season 1",
    duration: "2:38",
    img: "stranger_things_season_1.jpg",
    url: "Kids.mp3"
  },
  {
    id: 16,
    author: "Łona i Webber",
    title: "Patrz Szerzej",
    album: "Cztery i pół",
    duration: "3:36",
    img: "lona_webber_4_i_pol.jpg",
    url: "Patrz Szerzej.mp3"
  },
  {
    id: 17,
    author: "Łona i Webber",
    title: "To Nic Nie Znaczy",
    album: "Cztery i pół",
    duration: "3:24",
    img: "lona_webber_4_i_pol.jpg",
    url: "Łona i Webber - To nic nie znaczy [www.dobrzewiesz.net].mp3"
  },
  {
    id: 18,
    author: "J. Cole",
    title: "No Role Modelz",
    album: "2014 Forest Hills Drive",
    duration: "4:52",
    img: "j_cole_2014_forest_hills_drive.jpg",
    url: "No Role Modelz.mp3"
  },
  {
    id: 19,
    author: "J. Cole",
    title: "Love Yourz",
    album: "2014 Forest Hills Drive",
    duration: "3:31",
    img: "j_cole_2014_forest_hills_drive.jpg",
    url: "Love Yourz.mp3"
  },
  {
    id: 20,
    author: "Childish Gambino",
    title: "Redbone",
    album: "Awaken, my love !",
    duration: "5:26",
    img: "awaken-my-love-b-iext53739565.jpg",
    url: "Childish Gambino - Redbone (Official Audio).mp3"
  },
  {
    id: 21,
    author: "Mac Miller",
    title: "2009",
    album: "Swimming",
    duration: "5:48",
    img: "swimming-w-iext53507004.jpg",
    url: "Mac Miller - 2009 (Audio).mp3"
  },
  {
    id: 22,
    author: "Mac Miller",
    title: "Self Care",
    album: "Swimming",
    duration: "5:47",
    img: "swimming-w-iext53507004.jpg",
    url: "Mac Miller - Self Care.mp3"
  }
];
