import { Avatar } from "../avatar/Avatar"
import { Comment } from "../comment/Comment"
import { format, formatDistanceToNow } from "date-fns"
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react"
import ptBr from "date-fns/locale/pt-BR"

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content [];
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;

}

export const PostContainer = ({ author, publishedAt, content }: PostProps) => {
    
    //Date and Hour to Post
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
      });



    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    });



    //State to array of comments
    const [comments, setComments] = useState([ 
        "Post muito bacana, hein?! 👏👏",
    ]);


    
    //Create the comment
    function handleCreateComment (event: FormEvent) {
        event.preventDefault(); 
        setComments([...comments, newCommentChangeText]); // destruction of comments
        setNewCommentChangeText("");
    }



    //State that stores the text of the input
    const [newCommentChangeText, setNewCommentChangeText] = useState("");



    //Change in content
    function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setNewCommentChangeText(event.target.value);
    }



    //Delete the comment
    function deleteComment(commentToDelete: String){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }
    


    //Validity the comment field
    function handleNewContentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esté campo é obrigatório, por favor preencha!");
    }



    return (
        <article className="post">
            <header className="post__header">
               <div className="post__header--author">
                    <Avatar src={author.avatarUrl}/>
                    <div className="authorInfo">
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
               </div>

               <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
               </time>
            </header>

            <div className="post__content">
                {content.map(line => {
                    if(line.type === "paragraph"){
                        return <p key={line.content}>{line.content}</p>
                    } else {
                        return <p key={line.content}><a>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateComment} className="post__form">
                <h5 className="post__form--title">Deixe seu feedback</h5>

                <textarea 
                    onInvalid={handleNewContentInvalid}
                    name="comment" 
                    onChange={handleNewCommentChange}
                    required
                    value={newCommentChangeText}  
                    className="post__form--text" 
                    placeholder="Deixe um comentário" 
                 />

                <footer className="post__form--btnContainer">
                    <button className="btn">Publicar</button>
                </footer>
            </form>

            <div className="post__comment">
                {comments.map(comment => {
                    return <Comment content={comment}  onDeleteComment={deleteComment} key={comment}/>
                })}
            </div>
        </article>
    )
}