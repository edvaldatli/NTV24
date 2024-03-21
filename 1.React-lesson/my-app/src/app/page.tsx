import Header from '../components/header'

const DATA = {
  name: "John Johnsson",
  subTitle: "Experienced Project Manager & Sales Leader",
  imgUrl: "https://images.squarespace-cdn.com/content/v1/53e9e0eae4b07445d5a18989/1453216012069-G7PISJDIS1O5OSSD1YIK/SR-2.jpg",
  jobs: [
    {
      company: "Tech Innovations Inc",
      companyAddress: "San Francisco, CA",
      dateStart: "March 2020",
      dateEnd: null,
      position: "Senior Project Manager",
      descriptions: [
        "Led a team of 15 in developing a state-of-the-art AI-driven customer service platform, enhancing customer satisfaction by 35%.",
        "Managed cross-functional teams across four countries, fostering collaboration and ensuring timely project completion within budget, which saved the company over $2M annually.",
        "Spearheaded the Agile transformation initiative, resulting in a 50% increase in project delivery speed."
      ]
    },
    {
      company: "Dynamic Solutions",
      companyAddress: "New York, NY",
      dateStart: "June 2015",
      dateEnd: "February 2020",
      position: "Sales Manager",
      descriptions: [
        "Directed a sales team of 20+, achieving an unprecedented 40% growth in revenue within the first year.",
        "Implemented a strategic sales training program, increasing team sales performance by 25%.",
        "Developed and nurtured key client relationships, leading to a 60% increase in repeat business."
      ]
    }
  ]
}



export default function Content({ name, subTitle, imgUrl }: typeof DATA) {
  return (
    <body className='bg-slate-500 text-white' >
      <Header name={DATA.name} subTitle={DATA.subTitle} imgUrl={DATA.imgUrl} />
    </body >

  );
}
