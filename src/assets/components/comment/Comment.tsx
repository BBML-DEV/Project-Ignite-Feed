import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "../avatar/Avatar"


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({content, onDeleteComment}: CommentProps) => {
 
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCount () {
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment () {
        onDeleteComment(content)
    }

    return (
        <div className="container">
            <Avatar src="https://github.com/zcurti.png" />

            <div className="container__comment">
                <div className="commentPost">
                    <header className="commentPost__header">
                        <div className="profile">
                            <p>Gabriel <span>(você)</span></p>
                            <time>Cerca de 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deleter comentário" className="btn__delete">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p className="commentPost__text">{content}</p>
                </div>
                
                <footer>
                    <button onClick={handleLikeCount} className="btn__like">
                        <ThumbsUp size={20}/> Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>   
            </div>
        </div>
    )
}