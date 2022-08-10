const data = {
  results: [
    {
      mal_id: 16498,
      url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
      image_url:
        "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98",
      title: "Shingeki no Kyojin",
      airing: false,
      synopsis:
        "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly...",
      type: "TV",
      episodes: 25,
      score: 8.53,
      start_date: "2013-04-07T00:00:00+00:00",
      end_date: "2013-09-29T00:00:00+00:00",
      members: 3477937,
      rated: "R",
    },
    {
      mal_id: 1535,
      url: "https://myanimelist.net/anime/1535/Death_Note",
      image_url:
        "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
      title: "Death Note",
      airing: false,
      synopsis:
        "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Lig...",
      type: "TV",
      episodes: 37,
      score: 8.62,
      start_date: "2006-10-04T00:00:00+00:00",
      end_date: "2007-06-27T00:00:00+00:00",
      members: 3459619,
      rated: "R",
    },
    {
      mal_id: 5114,
      url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      title: "Fullmetal Alchemist: Brotherhood",
      airing: false,
      synopsis:
        "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutatio...",
      type: "TV",
      episodes: 64,
      score: 9.13,
      start_date: "2009-04-05T00:00:00+00:00",
      end_date: "2010-07-04T00:00:00+00:00",
      members: 2936122,
      rated: "R",
    },
    {
      mal_id: 30276,
      url: "https://myanimelist.net/anime/30276/One_Punch_Man",
      image_url:
        "https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
      title: "One Punch Man",
      airing: false,
      synopsis:
        "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process....",
      type: "TV",
      episodes: 12,
      score: 8.51,
      start_date: "2015-10-05T00:00:00+00:00",
      end_date: "2015-12-21T00:00:00+00:00",
      members: 2840432,
      rated: "R",
    },
    {
      mal_id: 11757,
      url: "https://myanimelist.net/anime/11757/Sword_Art_Online",
      image_url:
        "https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d",
      title: "Sword Art Online",
      airing: false,
      synopsis:
        "Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one o...",
      type: "TV",
      episodes: 25,
      score: 7.2,
      start_date: "2012-07-08T00:00:00+00:00",
      end_date: "2012-12-23T00:00:00+00:00",
      members: 2784601,
      rated: "PG-13",
    },
    {
      mal_id: 31964,
      url: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
      image_url:
        "https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2",
      title: "Boku no Hero Academia",
      airing: false,
      synopsis:
        'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapes...',
      type: "TV",
      episodes: 13,
      score: 7.93,
      start_date: "2016-04-03T00:00:00+00:00",
      end_date: "2016-06-26T00:00:00+00:00",
      members: 2672496,
      rated: "PG-13",
    },
    {
      mal_id: 22319,
      url: "https://myanimelist.net/anime/22319/Tokyo_Ghoul",
      image_url:
        "https://cdn.myanimelist.net/images/anime/5/64449.jpg?s=f1af76501ac3d4238170191d5e0679f2",
      title: "Tokyo Ghoul",
      airing: false,
      synopsis:
        'A sinister threat is invading Tokyo: flesh-eating "ghouls" who appear identical to humans and blend into their population. Reserved college student Ken Kaneki buries his nose in books and avoids the n...',
      type: "TV",
      episodes: 12,
      score: 7.79,
      start_date: "2014-07-04T00:00:00+00:00",
      end_date: "2014-09-19T00:00:00+00:00",
      members: 2525313,
      rated: "R",
    },
  ],
  last_page: 20,
};
export default (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 2000);
};
