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
            className="object-cover min-w-24 min-h-24 max-w-24 max-h-24 align-middle justify-end ml-auto my-auto rounded-full"
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
        <div className="flex flex-row h-32 w-screen border-b border-white p-2">
            <div className="flex flex-col justify-center p-6">
                <NameHeader name={name} />
                <SubTitle subTitle={subTitle} />
            </div>
            <Image imgUrl={imgUrl} />
        </div>

    )
}