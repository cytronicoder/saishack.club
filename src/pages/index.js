import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import {
  CodeIcon,
  PersonIcon,
  BackpackIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AvatarCircles from "@/components/magicui/avatar-circles";
import SparklesText from "@/components/magicui/sparkles-text";
import TypingAnimation from "@/components/magicui/typing-animation";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Join us today!",
    description: "Registration ends September 10th.",
    href: "https://docs.google.com/forms/u/6/d/e/1FAIpQLSfsicuEeQYi5Y5S6A5mTh9hAzrY-Rpbu3VlpmOCxGScDgXrig/viewform",
    cta: "Sign up",
    background: <Image className="absolute -right-20 -top-20 opacity-60" alt="" />,
    hoverMode: false,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 border-4 border-[#ec3750]",
  },
  {
    Icon: CodeIcon,
    name: "Weekly coding workshops",
    description: "Join hands-on workshops every week to sharpen your coding skills and learn new technologies.",
    href: "/",
    disabled: true,
    background: (
      <div className="relative">
        <Image
          src="https://cloud-28knnkcdt-hack-club-bot.vercel.app/3workshop.jpg"
          width={450}
          height={450}
          className="absolute -top-10 object-cover filter transition-all duration-300"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
          }}
          alt=""
        />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 hover:border-2 hover:border-[#ec3750]",
  },
  {
    Icon: PersonIcon,
    name: "Global community",
    description: "Connect with Hack Club members and leaders across the Asia-Pacific region and beyond.",
    href: "https://hackclub.com/slack/",
    cta: "Join the Slack",
    background: (
      <div className="relative">
        <Image
          src="https://cloud-28knnkcdt-hack-club-bot.vercel.app/0conference.jpg"
          width={450}
          height={450}
          className="absolute object-cover filter transition-all duration-300"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
          }}
          alt=""
        />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 hover:border-2 hover:border-[#ec3750]",
  },
  {
    Icon: BackpackIcon,
    name: "Hackathons & competitions",
    description: "Participate in exciting hackathons and tech competitions that challenge your creativity and problem-solving skills.",
    href: "/",
    disabled: true,
    background: (
      <div className="relative">
        <Image
          src="https://cloud-28knnkcdt-hack-club-bot.vercel.app/1lch.jpg"
          width={450}
          height={450}
          className="absolute -top-10 object-cover filter transition-all duration-300"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
          }}
          alt=""
        />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 hover:border-2 hover:border-[#ec3750]",
  },
  {
    Icon: LightningBoltIcon,
    name: "Leadership opportunities",
    description: "Take charge and lead workshops, events, or entire initiatives within the club.",
    href: "/",
    disabled: true,
    background: (
      <div className="relative">
        <Image
          src="https://cloud-28knnkcdt-hack-club-bot.vercel.app/2summit.jpg"
          width={450}
          height={450}
          className="absolute -top-20 lg:-top-40 object-cover filter transition-all duration-300"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
          }}
          alt=""
        />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 hover:border-2 hover:border-[#ec3750]",
  },
  {
    Icon: RocketIcon,
    name: "Funding & support",
    description: "Receive funding and resources to bring your tech projects and ideas to life.",
    href: "/",
    disabled: true,
    background: <Image className="absolute -right-20 -top-20 opacity-60" alt="" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-3 hover:border-2 hover:border-[#ec3750]",
  },
];

const avatarUrls = [
  "https://avatars.githubusercontent.com/cytronicoder",
  "https://avatars.githubusercontent.com/jcoding621",
  "https://avatars.githubusercontent.com/Twistedecoder",
  "https://avatars.githubusercontent.com/BickStronk",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SAIS Hack Club</title>
        <meta name="description" content="Join the SAIS Hack Club today! Participate in weekly coding workshops, hackathons, and leadership opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SAIS Hack Club" />
        <meta property="og:description" content="Inspiring future leaders in computer science through hands-on workshops, global community, and leadership opportunities." />
        <meta property="og:image" content="https://cloud-28knnkcdt-hack-club-bot.vercel.app/0conference.jpg" />
        <meta property="og:url" content="https://saishack.club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAIS Hack Club" />
        <meta name="twitter:description" content="Join the SAIS Hack Club today! Participate in weekly coding workshops, hackathons, and leadership opportunities." />
        <meta name="twitter:image" content="https://cloud-28knnkcdt-hack-club-bot.vercel.app/0conference.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={`flex min-h-screen flex-col items-center justify-center p-12 lg:p-24 ${inter.className}`}>
        <div className="w-full font-mono text-sm relative">
          {/* Title Section */}
          <div className="lg:absolute lg:top-0 lg:left-0 lg:text-left">
            <TypingAnimation
              className="text-4xl font-bold text-[#ec3750] dark:text-white"
              text="SAIS Hack Club"
            />
            <p className="max-w-sm mt-2 text-gray-400">
              Providing SAIS students with an experience that inspires, educates, and develops
            </p>
            <SparklesText className="text-sm mb-4 text-gray-400" sparklesCount={4} text="future leaders in computer science." />
            <AvatarCircles numPeople={20} avatarUrls={avatarUrls} />
          </div>
          {/* Grid Section */}
          <div className="mt-8 lg:mt-0 relative flex items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
            <BentoGrid className="lg:grid-rows-2 gap-4 place-content-center">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </main>
    </>
  );
}
