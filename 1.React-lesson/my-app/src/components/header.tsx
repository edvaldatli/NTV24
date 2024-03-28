type Props = {
    name: string,
    imgUrl: string,
    subTitle: string
}

type NameHeaderProp = {
    name: string
}

type ImageProps = {
    imgUrl: string,
}

type SubTitleProp = {
    subTitle: string
}

function Image({ imgUrl }: ImageProps) {
    return (
        <img
            className="object-cover max-w-28 max-h-28 align-middle justify-end ml-auto my-auto rounded-full aspect-square"
            src={imgUrl}
            alt="Picture of me"
        />
    )
}

function NameHeader({ name }: NameHeaderProp) {
    return (
        <h1 className="text-3xl font-bold">{name}</h1>
    )
}

function SubTitle({ subTitle }: SubTitleProp) {
    return (
        <h3 className="text-lg">{subTitle}</h3>
    )
}



export default function Header({ name, imgUrl, subTitle }: Props) {
    return (
        <div className="flex flex-row border-b border-white p-2 bg-zinc-900">
            <div className="flex flex-col justify-center p-6">
                <NameHeader name={name} />
                <SubTitle subTitle={subTitle} />
            </div>
            <Image imgUrl={imgUrl} />
        </div>

    )
}