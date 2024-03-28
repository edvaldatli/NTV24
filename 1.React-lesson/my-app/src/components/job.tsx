type Props = {
    job: Job
}

type Job = {
    position: string,
    company: string,
    companyAddress: string,
    dateStart: string,
    dateEnd: string | null,
    descriptions: string[]
}

export default function Job({ job }: Props) {
    return (
        <div className="mb-10">
            <h1 className="text-3xl font-bold">{job.position}</h1>
            <h2 className="text-2xl font-semibold">{job.company}</h2>
            <h3 className="text-base text-zinc-400">{job.companyAddress}</h3>
            <h3 className="text-base text-blue-600">{job.dateStart} - {job.dateEnd ? job.dateEnd : 'Currently employed'}</h3>
            <ul className="list-disc mx-6">
                {job.descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </div>
    )
}