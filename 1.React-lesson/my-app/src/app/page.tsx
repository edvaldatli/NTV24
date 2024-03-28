import Header from '../components/header'
import Job from '../components/job'
import DATA from '../data/data'


type JobType = {
  company: string,
  companyAddress: string,
  dateStart: string,
  dateEnd: string | null,
  position: string,
  descriptions: string[]
}

type DATAType = {
  name: string,
  subTitle: string,
  imgUrl: string,
  jobs: JobType[],

}


export default function Content() {
  const { name, subTitle, imgUrl, jobs } = DATA
  return (
    <div className='text-white' >
      <Header name={name} subTitle={subTitle} imgUrl={imgUrl} />
      <div className='p-4 m-6'>
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    </div >
  );
}
