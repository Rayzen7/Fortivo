const articleData = [
  {
    id: 1,
    date: 'January 24, 2025',
    title: 'Prabowo Orders War Against Online Gambling, Demands Fund Flow Investigation.',
    desc: 'President Prabowo Subianto instructed firm action against online gambling and requested further investigation...',
    img: './assets/images/home/article/img1.png'
  },
  {
    id: 2,
    date: 'February 17, 2024',
    title: 'Minister of Communications: Indonesia in Online Gambling Emergency, Money Circulation Reaches IDR 327 Trillion.',
    desc: 'The Minister of Communications and Informatics stated that Indonesia is in an online gambling emergency situation...',
    img: './assets/images/home/article/img2.png'
  },
  {
    id: 3,
    date: 'December 17, 2024',
    title: 'Police Warn South Jakarta Residents Not to Be Tempted by Online Gambling Account Sales.',
    desc: 'Police urged the public, especially in South Jakarta, not to be tempted by the offer of buying and selling bank accounts...',
    img: './assets/images/home/article/img3.png'
  },
  {
    id: 4,
    date: 'July 5, 2024',
    title: 'Prison Sentence for Ex-Principal Who Embezzled BOS Funds for Online Gambling.',
    desc: 'A former school principal and treasurer of SMPN 17 Bengkulu City were found guilty in a corruption case involving BOS funds...',
    img: './assets/images/home/article/img4.png'
  },
  {
    id: 5,
    date: 'August 19, 2024',
    title: 'Minister of Communications: Indonesia in Online Gambling Emergency, Money Circulation Reaches IDR 327 Trillion.',
    desc: 'The Minister of Communications and Informatics stated that Indonesia is in an online gambling emergency situation...',
    img: './assets/images/home/article/img5.png'
  },
  {
    id: 6,
    date: 'March 15, 2024',
    title: 'Police Arrest Broadcasters and Website Owners of Online Gambling in Cilincing.',
    desc: 'North Jakarta Metro Police arrested four perpetrators involved in operating online gambling websites, including...',
    img: './assets/images/home/article/img6.png'
  },
  {
    id: 7,
    date: 'January 24, 2025',
    title: 'PPATK Finds Gambling Transactions Reaching IDR 359 Trillion, IDR 28 Trillion Sent Abroad via Crypto.',
    desc: 'The Financial Transaction Reports and Analysis Center (PPATK) found online gambling-related money circulation reaching...',
    img: './assets/images/home/article/img7.png'
  },
  {
    id: 8,
    date: 'February 17, 2024',
    title: 'Bareskrim Seizes IDR 61 Billion from 3 International Online Gambling Sites.',
    desc: 'The Criminal Investigation Agency (Bareskrim) seized assets worth IDR 61 billion linked to three international online gambling sites...',
    img: './assets/images/home/article/img8.png'
  },
  {
    id: 9,
    date: 'December 17, 2024',
    title: 'Police Uncover International Online Gambling Syndicate, Seize IDR 61 Billion Assets.',
    desc: 'The Indonesian police exposed an international online gambling syndicate and seized assets worth IDR 61 billion...',
    img: './assets/images/home/article/img9.png'
  },
  {
    id: 10,
    date: 'July 5, 2024',
    title: 'PPATK Finds Village Head Embezzled Village Funds for Online Gambling.',
    desc: 'The Financial Transaction Reports and Analysis Center (PPATK) discovered a case where a village head misused village funds...',
    img: './assets/images/home/article/img10.png'
  },
  {
    id: 11,
    date: 'August 19, 2024',
    title: 'Yogyakarta Police Uncover Online Dice Gambling on Social Media, 7 People Held Captive.',
    desc: 'The Yogyakarta Regional Police successfully uncovered an online dice gambling case broadcast on social media...',
    img: './assets/images/home/article/img11.png'
  },
  {
    id: 12,
    date: 'January 15, 2024',
    title: 'Bareskrim Names 2 Suspects in Online Gambling Money Laundering to Build Hotel.',
    desc: 'The Criminal Investigation Agency (Bareskrim) named two suspects in a money laundering case related to online gambling...',
    img: './assets/images/home/article/img12.png'
  }
];  

const tipsData = [
    {
        id: 1,
        title: 'Block Gambling Sites',
        desc: 'You can use parental control features on your device or browser to block access to gambling sites. In addition, there are blocking applications such as BetBlocker and Gamban that can help block gambling sites automatically.',
        img: './assets/images/home/tips/img1.svg'
    },
    {
        id: 2,
        title: 'Online Gambling Risks',
        desc: 'The Second Step to Avoid Online Gambling is to be aware of its dangers. On gambling sites, many people who initially just try it out, but eventually become addicted because they continue to hope to win and return the money they lost.',
        img: './assets/images/home/tips/img2.svg'
    },
    {
        id: 3,
        title: 'Focus on Positivity',
        desc: 'Instead of spending time gambling, try to find more useful and productive activities. Like you can start by pursuing a new hobby such as sports, reading, learning new skills or others so as not to spend time gambling.',
        img: './assets/images/home/tips/img3.svg'
    },
    {
        id: 4,
        title: 'Manage Finances Wisely',
        desc: 'Gambling often makes someone lose money without realizing it. Therefore, it is important to manage finances wisely. Create a strict spending budget and keep your money in an account that is difficult to access for impulsive transactions.',
        img: './assets/images/home/tips/img4.svg'
    },
    {
        id: 5,
        title: 'Limit Environmental',
        desc: "The environment plays a big role in shaping a person's habits, including online gambling. If you have friends or groups who often discuss or invite you to gamble, it's better to start keeping your distance.",
        img: './assets/images/home/tips/img5.svg'
    },
    {
        id: 6,
        title: 'Seek Help if Addicted',
        desc: 'There are many communities and counseling services that are ready to help people who want to quit gambling. Seeking help is a very important first step in breaking the habit of gambling in ourselves.',
        img: './assets/images/home/tips/img6.svg'
    },
];

const accordionData = [
    {
        id: 1,
        title: 'Social Gambling vs Professional Gambling',
        desc: 'Social Gambling: Casual gambling for entertainment without addiction or harmful consequences. Professional Gambling: Some people gamble as a career with strict financial discipline, but they are at risk of developing an addiction.',
    },
    {
        id: 2,
        title: 'Compulsive Gambling',
        desc: 'An uncontrollable urge to keep gambling, even when it leads to financial ruin, strained relationships, or mental health issues. Often linked to impulsivity and the inability to resist betting.',
    },
    {
        id: 3,
        title: 'Binge Gambling',
        desc: 'Similar to compulsive gambling but occurs in episodes rather than continuously. The person might go weeks or months without gambling, but when they start, they lose control.',
    },
    {
        id: 4,
        title: 'Problem Gambling',
        desc: "A milder form of gambling disorder that still causes negative consequences in one's life. Individuals may gamble frequently or occasionally but struggle with financial or emotional harm.",
    },
    {
        id: 5,
        title: 'Impulse-Control Gambling Disorder',
        desc: 'A type of gambling disorder where a person has an intense urge to gamble and struggles with self-control. Often linked to other impulse-control disorders, such as kleptomania or compulsive buying',
    },
];