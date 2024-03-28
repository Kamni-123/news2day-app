"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NewsCarausal() {
  const [mynews, setMyNews] = useState([]);
  const jsonData = [
    {
      status: "ok",
      totalResults: 38,
      articles: [
        {
          source: {
            id: null,
            name: "Livemint",
          },
          author: "Deepak Upadhyay",
          title:
            "Lok Sabha Polls 2024: Congress releases 7th list; Shashi Singh, Menka Devi Singh among candidates named | Mint - Mint",
          description:
            "Lok Sabha Polls 2024: The Chief Election Committee of Congress on Tuesday released its seventh list of five candidates, four from Chhattisgarh and one from Tamil Nadu, for the Lok Sabha elections 2024.",
          url: "https://www.livemint.com/news/india/lok-sabha-polls-2024-congress-7th-list-shashi-singh-menka-devi-singh-congress-cwc-chhattisgarh-tamil-nadu-11711467705478.html",
          urlToImage:
            "https://www.livemint.com/lm-img/img/2024/03/26/1600x900/Congress_1711469779841_1711469780043.jpg",
          publishedAt: "2024-03-26T15:49:11Z",
          content:
            "The Chief Election Committee of Congress on Tuesday released its seventh list of five candidates, four from Chhattisgarh and one from Tamil Nadu, for the Lok Sabha elections 2024. The four candidates… [+5955 chars]",
        },
        {
          source: {
            id: "the-hindu",
            name: "The Hindu",
          },
          author: "Sportstar",
          title:
            "CSK vs GT Live Score, IPL 2024: Gujarat Titans 7/0 (1 over); Needs 207 runs to win against Chennai Super Kings - Sportstar",
          description: null,
          url: "https://sportstar.thehindu.com/cricket/ipl/ipl-news/csk-vs-gt-live-score-ipl-2024-chennai-super-kings-gujarat-titans-match-updates-streaming-info-highlights/article67994133.ece",
          urlToImage: null,
          publishedAt: "2024-03-26T15:34:50Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "Moneycontrol",
          },
          author: "Moneycontrol News",
          title:
            "21-year-old student dies of bird flu in Vietnam. How the disease spreads to humans - Moneycontrol",
          description:
            "The victim had initially developed symptoms of fever and cough following which he went to seek medical help.",
          url: "https://www.moneycontrol.com/news/trends/21-year-old-student-dies-of-bird-flu-in-vietnam-how-the-disease-spreads-to-humans-12526431.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2022/04/6-bird-flu-770x433.jpg",
          publishedAt: "2024-03-26T15:17:03Z",
          content:
            "A 21-year-old student died of avian influenza or bird flu in Vietnam marking the nation's first documented human fatality from the virus. Vietnams Ministry of Health verified the death, disclosing th… [+2150 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "HT Entertainment Desk",
          title:
            "Salman Khan hopes Bade Miyan Chote Miyan ‘break record’ of Tiger and Sultan; check out Akshay Kumar's response - Hindustan Times",
          description:
            "Salman Khan shared that he loved the trailer of Akshay Kumar and Tiger Shroff's Bade Miyan Chote Miyan. The film releases in April, on the occasion of Eid. | Bollywood",
          url: "https://www.hindustantimes.com/entertainment/bollywood/salman-khan-hopes-bade-miyan-chote-miyan-break-record-of-tiger-and-sultan-check-out-akshay-kumars-response-101711463036136.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/Akshay_Kumar_Salman_Khan_1671206720081_1711464418394.JPG",
          publishedAt: "2024-03-26T15:11:58Z",
          content:
            "Salman Khan has reacted to the trailer of Bade Miyan Chote Miyan, starring Akshay Kumar and Tiger Shroff. The actor took to his X account to share that he loved the trailer and hopes that the film br… [+2301 chars]",
        },
        {
          source: {
            id: null,
            name: "India Today",
          },
          author: "India Today World Desk",
          title:
            "Indian crew of 22 were aboard ship that crashed into Baltimore Key bridge, all safe - India Today",
          description:
            "All 22 crew members onboard the container ship that collided into one of the columns of Francis Scott Key Bridge in Baltimore were Indians the ship management entity stated They are said to be safe and secure",
          url: "https://www.indiatoday.in/world/story/indian-crew-of-22-was-aboard-container-vessel-that-crashed-into-baltimore-key-bridge-all-safe-2519645-2024-03-26",
          urlToImage:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/baltimore-bridge-collapse-262345412-16x9_0.jpeg?VersionId=a.v6t1ydqVexZOV8l0PWsMXJ3WFPs7xP",
          publishedAt: "2024-03-26T14:18:15Z",
          content:
            "All 22 crew members who were aboard the container ship that crashed into Baltimore's Key Bridge were Indians, the charter management entity stated. They are said to be safe and secure. \r\nAll crew mem… [+1887 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "PTI",
          title:
            "India's current account deficit dips to $10.5 billion in October-December: RBI - Hindustan Times",
          description:
            "Net FDI inflow at USD 8.5 billion during April-December 2023 was lower than USD 21.6 billion during April-December 2022, it said.",
          url: "https://www.hindustantimes.com/business/indias-current-account-deficit-dips-to-10-5-bn-in-october-december-rbi-101711461120362.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/The-repo-rate-refers-to-the-rate-at-which-commerci_1691644874298_1711461332755.jpg",
          publishedAt: "2024-03-26T13:56:52Z",
          content:
            "India's current account deficit declined to USD 10.5 billion or 1.2 per cent of the GDP in October-December quarter from USD 11.4 billion in the previous three months and USD 16.8 billion a year back… [+1610 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "HT News Desk",
          title:
            "Karnataka woman ends life after husband loses ₹1.5 crore via betting: Report - Hindustan Times",
          description:
            "According to police, Ranjitha left behind a suicide note in which she talked of the harassment faced by the family from moneylenders. | Latest News India",
          url: "https://www.hindustantimes.com/india-news/karnataka-woman-ends-life-after-husband-loses-1-5-crore-via-betting-report-101711455472295.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/Matlauda-police-station-in-charge-Manpreet-Singh-s_1691607609864_1711458507247.jpg",
          publishedAt: "2024-03-26T13:47:44Z",
          content:
            "Ranjitha, a 24-year-old homemaker from Karnataka's Chitradurga, was found hanging at her residence recently. As authorities delved into her death, they uncovered a troubling narrative involving crick… [+2226 chars]",
        },
        {
          source: {
            id: null,
            name: "Livemint",
          },
          author: "Affiliate Desk",
          title:
            "Best Epson WiFi printer for wireless printing: Top 10 picks for exceptional quality for your daily needs | Mint - Mint",
          description:
            "With Epson WiFi printers, you can print from virtually anywhere in your home or office. It eliminates the need to be tethered to a specific location. These top Epson WiFi printers will make printing a breeze.",
          url: "https://www.livemint.com/technology/gadgets/best-epson-wifi-printer-for-wireless-printing-top-10-picks-for-exceptional-quality-for-your-daily-needs-11711446546438.html",
          urlToImage:
            "https://www.livemint.com/lm-img/img/2024/03/26/1600x900/best_epson_wifi_printer_1711446762896_1711446932758.jpg",
          publishedAt: "2024-03-26T13:34:41Z",
          content:
            "No wonder convenience and flexibility are key in printing. Epson WiFi Printers are revolutionising the way we print. They offer seamless wireless connectivity and advanced printing capabilities. Epso… [+20005 chars]",
        },
        {
          source: {
            id: null,
            name: "Moneycontrol",
          },
          author: "Moneycontrol News",
          title:
            "Sonam Wangchuk ends hunger strike over statehood for Ladakh - Moneycontrol",
          description:
            "Wangchuk said he is surviving on water and salt and 350 people have joined him in the fast despite temperatures dropping to -10 degrees Celsius.",
          url: "https://www.moneycontrol.com/news/india/sonam-wangchuk-ends-hunger-strike-over-statehood-for-ladakh-12526011.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2023/01/Sonam-Wangchuk2_Facebook_380-770x433.jpg",
          publishedAt: "2024-03-26T13:32:15Z",
          content:
            "Prominent climate activist and education reformer Sonam Wangchuk has ended his hunger strike to press for statehood for Ladakh and the protection of the fragile Himalayan ecology, but insisted that h… [+554 chars]",
        },
        {
          source: {
            id: null,
            name: "Bar & Bench - Indian Legal News",
          },
          author: "Prashant Jha",
          title:
            "Arvind Kejriwal arrest: AAP legal cell calls for massive protest in Delhi courts - Bar & Bench - Indian Legal News",
          description:
            "The Aam Aadmi Party (AAP) legal cell has called for a protest in all the district courts of the national capital against the arrest of Delhi Chief Minister Arvi",
          url: "https://www.barandbench.com/news/arvind-kejriwal-arrest-aap-legal-cell-massive-protest-delhi-courts",
          urlToImage:
            "https://media.assettype.com/barandbench%2F2023-04%2F7e16376f-16cd-41ce-8585-73f06570f5ea%2F33.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
          publishedAt: "2024-03-26T13:30:23Z",
          content:
            "Advocate Sanjeev Nasiar, State President of AAP's Legal Cell confirmed the development and said that the lawyers will gather in all the district courts at around 12:30 PM to protest Kejriwals arrest.… [+487 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "Abraham Thomas",
          title:
            "Legal experts on Delhi CM Arvind Kejriwal’s arrest, working out of ED custody - Hindustan Times",
          description:
            "Arvind Kejriwal has challenged his arrest and subsequent remand before the Delhi high court, which is expected to take up the matter on Wednesday | Latest News India",
          url: "https://www.hindustantimes.com/india-news/legal-experts-on-delhi-cm-arvind-kejriwal-s-arrest-working-out-of-edcustody-101711459746301.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/Delhi-chief-minister-Arvind-Kejriwal---ANI-_1711459698156.jpg",
          publishedAt: "2024-03-26T13:29:05Z",
          content:
            "New Delhi: Delhi chief minister Arvind Kejriwals insistence on running the Government from jail, if prolonged, could lead to imposition of Presidents rule as an elected chief minister has multifold t… [+8429 chars]",
        },
        {
          source: {
            id: null,
            name: "News18",
          },
          author: "Pragati Pal",
          title:
            "'Shakti Swaroopa': PM Modi Dials Sandeshkhali Protester Rekha Patra, BJP's Basirhat Candidate - News18",
          description:
            "BJP had released its candidate list for 19 seats in West Bengal on Sunday for the Lok Sabha elections, fielding protester Rekha Patra from the high-stakes Basirhat constituency under which falls the Sandeshkhali area",
          url: "https://www.news18.com/elections/pm-modi-dials-sandeshkhali-victim-rekha-patra-contesting-ls-polls-on-bjp-ticket-describes-her-as-shakti-swaroopa-8828713.html",
          urlToImage:
            "https://images.news18.com/ibnlive/uploads/2024/03/bjp-lok-sabha-candidate-basirhat-rekha-patra-sandeshkahli-victim-pm-modi-2024-03-375624c6c431c54d56a4f47b66269a58-16x9.jpg?impolicy=website&width=1200&height=675",
          publishedAt: "2024-03-26T13:09:48Z",
          content:
            "Prime Minister Narendra Modi on Tuesday dialled Rekha Patra, the BJP candidate from Basirhat and one of the Sandeshkhali victims, and spoke to her about campaign preparations. The Prime Minister also… [+1942 chars]",
        },
        {
          source: {
            id: null,
            name: "Thewire.in",
          },
          author: null,
          title:
            "No Alliance Between SAD and BJP In Punjab As Akalis Focus On Recovering Lost Ground Among Farmers - The Wire",
          description:
            "The regional party also wanted the centre’s intervention in the release of Bandi Sikhs — a major issue among section of Sikhs in Punjab — who had completed their jail term (Bandi Sikhs is a term used for Sikh prisoners languishing in various jails in India fo…",
          url: "https://thewire.in/politics/no-alliance-between-sad-and-bjp-in-punjab-as-akalis-focus-on-recovering-lost-ground-among-farmers",
          urlToImage:
            "https://cdn.thewire.in/wp-content/uploads/2024/03/26181904/Screenshot-2024-03-26-at-6.16.16-PM-800x400.png",
          publishedAt: "2024-03-26T13:00:48Z",
          content:
            "Chandigarh: As the alliance talks initiated with the Bharatiya Janata Party (BJP) failed, the Shiromani Akali Dal (SAD) will fight the Lok Sabha polls solo in Punjab. The recent farm protests and the… [+5090 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "Neha Yadav",
          title:
            "8 amazing images of black holes and quasars shared by NASA - Hindustan Times",
          description:
            "8 amazing images of black holes and quasars shared by NASA",
          url: "https://www.hindustantimes.com/web-stories/in-focus/8-amazing-images-of-black-holes-and-quasars-shared-by-nasa-101711452371839.html",
          urlToImage: null,
          publishedAt: "2024-03-26T12:47:05Z",
          content:
            "By Neha YadavPublished Mar 26, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA/G. Bacon",
        },
        {
          source: {
            id: null,
            name: "PINKVILLA",
          },
          author: "Apeksha Juneja",
          title:
            "WATCH: Priyanka Chopra-Nick Jonas return to Mumbai with daughter Malti Marie post Holi bash; wave at paps - PINKVILLA",
          description:
            "After Indulging In A Grand Celebration Of Holi In Noida, Priyanka Chopra And Nick Jonas, Accompanied By Their Daughter Malti Marie, Returned To Mumbai.",
          url: "https://www.pinkvilla.com/entertainment/news/watch-priyanka-chopra-nick-jonas-return-to-mumbai-with-daughter-malti-marie-post-holi-bash-wave-at-paps-1289667",
          urlToImage:
            "https://www.pinkvilla.com/images/2024-03/769549165_priyanka-chopra-nick-jonas-malti-marie.jpg",
          publishedAt: "2024-03-26T12:46:19Z",
          content:
            "Priyanka Chopra and Nick Jonas, renowned as one of the most beloved celebrity couples, are currently savoring their time in India alongside their adorable daughter, Malti Marie. The trio recently imm… [+1995 chars]",
        },
        {
          source: {
            id: null,
            name: "YouTube",
          },
          author: null,
          title:
            "Advocates, Lawmakers Embark on Awareness Walk to End Tuberculosis in Nigeria - TVC News Nigeria",
          description:
            "Lawmakers are joining the fight to end tuberculosis by 2030 as they seek government's effort to take the lead by providing the necessary funds to close the 7...",
          url: "https://www.youtube.com/watch?v=pd3Dp3u73eo",
          urlToImage:
            "https://i.ytimg.com/vi/pd3Dp3u73eo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEYgSShZMA8=&rs=AOn4CLDvTc2AeAa2SxlBJlYVPfKkjriRiw",
          publishedAt: "2024-03-26T12:44:01Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "NDTV News",
          },
          author: null,
          title:
            '"No Place For Such Language": Congress On Leader\'s Kangana Ranaut Remarks - NDTV',
          description:
            "Amid the row over controversial remarks on Kangana Ranaut posted on party leader Supriya Shrinate's social media handle, the Congress on Tuesday said it has always believed there is no place for such language in public discourse and the matter should",
          url: "https://www.ndtv.com/india-news/no-place-for-such-language-congress-on-supriya-shrinate-kangana-ranaut-remarks-5314384",
          urlToImage:
            "https://c.ndtvimg.com/2024-03/ho2ts24o_supriya-shrinate_625x300_26_March_24.jpg",
          publishedAt: "2024-03-26T12:40:29Z",
          content:
            "Supriya Shrinate said many people have access to her Facebook and Instagram accounts\r\nNew Delhi: Amid the row over controversial remarks on Kangana Ranaut posted on party leader Supriya Shrinate's so… [+1228 chars]",
        },
        {
          source: {
            id: "google-news",
            name: "Google News",
          },
          author: null,
          title:
            '"My Game Got Worse": Virender Sehwag Shreds IPL Franchise For Ruining His Form - NDTV Sports',
          description:
            "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
          url: "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2lwbC0yMDI0L215LWdhbWUtZ290LXdvcnNlLXZpcmVuZGVyLXNlaHdhZy1zaHJlZHMtaXBsLWZyYW5jaGlzZS1mb3ItcnVpbmluZy1oaXMtZm9ybS01MzE0MzI00gF6aHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaXBsLTIwMjQvbXktZ2FtZS1nb3Qtd29yc2UtdmlyZW5kZXItc2Vod2FnLXNocmVkcy1pcGwtZnJhbmNoaXNlLWZvci1ydWluaW5nLWhpcy1mb3JtLTUzMTQzMjQvYW1wLzE",
          urlToImage:
            "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
          publishedAt: "2024-03-26T12:34:30Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "Livemint",
          },
          author: "Arshdeep kaur",
          title:
            "Pakistan suicide bomb attack: Five Chinese nationals, local driver killed en route to Dasu | Mint - Mint",
          description:
            "The Chinese nationals killed in the Pakistan suicide bomb attack were on their way to the Dasu Dam, the biggest hydropower project in the country, being built under the China-Pakistan Economic Corridor",
          url: "https://www.livemint.com/news/world/pakistan-suicide-bomb-attack-5-chinese-nationals-killed-en-route-to-dasu-11711453286946.html",
          urlToImage:
            "https://www.livemint.com/lm-img/img/2024/03/26/1600x900/PAKISTAN-CHINA-UNREST-1_1711454396998_1711454414605.jpg",
          publishedAt: "2024-03-26T12:02:13Z",
          content:
            "Pakistan Suicide Bomb Attack: Five Chinese nationals and their Pakistani driver were killed after a suicide bomber rammed an explosives-laden car into the vehicle carrying Chinese engineers and worke… [+6201 chars]",
        },
        {
          source: {
            id: "the-hindu",
            name: "The Hindu",
          },
          author: "The Hindu",
          title: "Actor-comedian Seshu passes away at 60 - The Hindu",
          description: null,
          url: "https://www.thehindu.com/entertainment/movies/actor-comedian-seshu-passes-away-at-60/article67994167.ece",
          urlToImage: null,
          publishedAt: "2024-03-26T12:02:00Z",
          content: null,
        },
      ],
    },
  ];
  // console.log(jsonData[0].articles);
  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=061340a272864862b5d860161b76bec9"
    );

    if (!response.ok) {
      setMyNews(jsonData[0].articles);
    } else {
      let data = await response.json();
      // console.log(data.articles);
      setMyNews(data.articles);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel className="w-full ">
      <CarouselContent className="w-96">
        {mynews.map((ele, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className=" h-96 grid grid-cols-1">
                    <div className="flex justify-center items-center p-2 object-cover ">
                      <Image
                        src={
                          ele.urlToImage == null
                            ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                            : ele.urlToImage
                        }
                        className=""
                        alt="..."
                        width={800}
                        height={800}
                      />
                    </div>

                    <div className="p-2 grid grid-rows-3">
                      <h5 className="text-md font-light">
                        {ele.author === "" ? "Janelle Ash" : ele.author}
                      </h5>
                      <p className="text-sm font-medium ">{ele.title}</p>
                      <Link
                        href={ele.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

