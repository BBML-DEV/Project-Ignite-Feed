interface AvatarProps {
    src: string;
}

export const Avatar = ({src}: AvatarProps) => {
    return (
        <div>
            <img className="avatar" src={src}/>
        </div>
    )
}