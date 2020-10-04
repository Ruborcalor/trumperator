const realTweets = [
  "Today we express our deepest gratitude to all those who have served in our armed forces.",
  "The only thing that can stop this corrupt machine is YOU. The only force strong enough to save our country is US.",
  "Watching my beautiful wife, Melania, speak about our love of country and family. We will make you all very proud.",
  "I am in Colorado - big day planned - but nothing can be as big as yesterday!",
  "You should give the money back @HillaryClinton! #DrainTheSwamp",
  "Ready to lead. Ready to Make America Great Again. #Debate #MAGA",
  "Hillary is the most corrupt person to ever run for the presidency of the United States. #DrainTheSwamp",
  "Wow. Unbelievable.",
  "Is this really America? Terrible!",
  "In my administration, EVERY American will be treated equally, protected equally, and honored equally #Debate #BigLeagueTruth",
  "My team of deplorables will be taking over my Twitter account for tonights #debate #MakeAmericaGreatAgain",
  'Tremendous support (except for some Republican "leadership"). Thank you.',
  "Donald Trump: A President for All Americans",
  "Mike Pence won big. We should all be proud of Mike!",
  'Crooked Hillary Clinton is totally unfit to be our president-really bad judgement and a temperament, according to new book, which is a mess!',
  '"I believe in God who can change people- he can make any of us better."',
  'We are going to WIN and MAKE AMERICA GREAT AGAIN, maybe better than ever before!I am attracting the biggest crowds, by far, and the best poll numbers, also by far.',
  'The failing @nytimes should focus on fair and balanced reporting rather than constant hit jobs on me. Yesterday 3 boring articles, today 2!',
  'We need to secure our borders ASAP. No games, we must be smart, tough and vigilant. MAKE AMERICA GREAT AGAIN & MAKE AMERICA STRONG AGAIN!',
];

const fakeTweets = [
  "I am very smart. I will bring our jobs back to the U.S. and keep our companies from leaving. #MakeAmericaGreatAgain",
  "Going to Salt Lake City, Utah- big rally! We are going to WIN! I will make America safe again for everyone.",
  "Very few people read the National Review. BAD! I have never met @nytdavidbrooks of the NY Times. He should be fired!",
  "I am leading big in all polls. Polls are best ever! Easy win!",
  "Nobody else can do it. AMERICA GREAT AGAIN! MAKE AMERICA SAFE AGAIN!",
  "Hillary’s disastrous judgment gave us ISIS, rise of Iran, and the worst economic crisis in the last 50 years! I won۪t forget. People very unhappy with Crooked Hillary. #NeverHillaryCrooked",
  "There are thousands of victims of illegal immigration. They will do NOTHING to stop it. Clinton has been doing this for THIRTY YEARS...",
  "I am leading big in all polls. The Republican Party needs strong and committed leader. #Trump2016",
  "Great people on the spot. I wonder what CNN will do. The Veterans appreciate it!",
  "The failing @nytimes wrote yet another hit piece on me. FAKE NEWS!",
  "Many people are now saying I won South Carolina by big margins. Big shocker!",
  "Jeb Bush and Ted Cruz are not electable presidential candidates and that's what you'll get if you vote for them!",
  "Never bad judgment. It is fantastic- everybody loves it!",
  "#MakeAmericaGreatAgain",
  "Really good night! AMERICA GREAT AGAIN! MAKE AMERICA SAFE AGAIN!",
  "So many veterans groups are supporting me! The Veterans appreciate it!",
  "Sleepy Joe Biden day plaining to go to New Hampshire. His record = BAD! #MakeAmericaGreatAgain",
];

export const tweetData = realTweets
  .map((tweet) => ({
    real: true,
    user: {
      nickname: "realDonaldTrump",
      name: "Donald J. Trump",
      avatar:
        "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
      verified: true,
      locked: false,
    },
    display: "default",
    text: tweet,
    image: "",
    date: "3:32 PM · Feb 14, 2016",
    app: "Twitter for iPhone",
    retweets: 1017,
    retweetsWithComments: 103,
    likes: 2313,
  }))
  .concat(
    fakeTweets.map((tweet) => ({
      real: false,
      user: {
        nickname: "realDonaldTrump",
        name: "Donald J. Trump",
        avatar:
          "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
        verified: true,
        locked: false,
      },
      display: "default",
      text: tweet,
      image: "",
      date: "3:32 PM · Feb 14, 2016",
      app: "Twitter for iPhone",
      retweets: 1017,
      retweetsWithComments: 103,
      likes: 2313,
    }))
  );
