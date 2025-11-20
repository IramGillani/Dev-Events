export type EventItem = {
  slug: string;
  date: string;
  location: string;
  time: string;
  img: string;
  title: string;
};
export const events: EventItem[] = [
  {
    img: "/images/event1.png",
    location: "Las Vegas, USA",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    date: "Dec 1–5, 2025",
    time: "Full-day conference",
  },
  {
    img: "/images/event2.png",
    location: "Amsterdam, Netherlands",
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-europe-2026",
    date: "Mar 23–26, 2026",
    time: "Full-day conference",
  },
  {
    img: "/images/event3.png",
    location: "Buenos Aires, Argentina",
    title: "ETHGlobal Buenos Aires 2025",
    slug: "ethglobal-buenos-aires-2025",
    date: "Nov 21–23, 2025",
    time: "48-hour hackathon",
  },
  {
    img: "/images/event4.png",
    location: "Amsterdam, Netherlands",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    date: "Jun 11–12, 2026",
    time: "Full-day sessions + workshops",
  },
  {
    img: "/images/event5.png",
    location: "Cambridge, USA",
    title: "HackMIT 2025",
    slug: "hackmit-2025",
    date: "Sept 2025",
    time: "24-hour hackathon",
  },
  {
    img: "/images/event6.png",
    location: "Mountain View, USA",
    title: "Google I/O 2025",
    slug: "google-io-2025",
    date: "May 20–21, 2025",
    time: "Keynotes + technical sessions",
  },
  //   {
  //     img: "/images/event7.png",
  //     location: "Global (multiple cities)",
  //     title: "JSConf 2025",
  //     slug: "jsconf-2025",
  //     date: "2025",
  //     time: "Conference / community meetups",
  //   },
];
