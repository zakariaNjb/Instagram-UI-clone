import React, {useRef, useState ,useCallback} from "react";
import AvatarPost from "./AvatarPost";
import PostComment from "./PostComment";
import Comment from "./Comment";
import NbLikesIcon from "./NbLikesIcons";
import {BsFillHeartFill} from "react-icons/bs";
import "../Css/HpPost.css";
function HpPost({post}){
    //Post container in the home page

    //Ref
    const heart=useRef();
    const inputCommentRef=useRef();

    //States
    const [nbrLikes,setNbrLikes]=useState(parseInt(post.nbrLikes));
    const [nbrComments,setNbrComments]=useState(parseInt(post.nbrComments));
    const [comments,setComments]=useState(post.comments);
    const addComment=useCallback(()=>{
        const input=inputCommentRef.current;
        const value=input.value;
        if(value!==""){
            setComments([...comments,{
                userName:"zakaria najib",
                comment:value
            }]);
            setNbrComments(nbrComments+1);
        }
        input.value="";
    },[]);

    //Functions
    const like=()=>{
        setNbrLikes(parseInt(nbrLikes)+1);
        const ht=heart.current.firstChild;
        ht.style.visibility="visible";
        ht.style.transform="scale(1.5)";
        setTimeout(()=>{
            ht.style.visibility="hidden";
        },500);
    };

    return (
        <div className="post">
            <AvatarPost 
                userName={post.userName}
                profileImg={post.profileImg}
                place={post.place}
            ></AvatarPost>
            <div className="pict">
                <img src={"/Images/"+post.postImg} alt="pict"></img>
                <div className="heart" onClick={like} ref={heart}>
                    <BsFillHeartFill></BsFillHeartFill>
                </div>
            </div>
            <div className="nbLikesIcon__comments">
                <NbLikesIcon nbrLikes={nbrLikes}></NbLikesIcon>
                {/* Post description */}
                <p><span>{post.userName}</span>{post.postDescription}</p>
                <h5>Afficher les {nbrComments} commentaires</h5>
                {comments.map((element,index)=>{
                    return <Comment comment={element} key={index}></Comment>
                })}
                <h5>IL Y A 1HEUR </h5>
            </div>
            <PostComment addCommentFct={addComment} ref={inputCommentRef}></PostComment>
        </div>
    );
};
export default React.memo(HpPost);