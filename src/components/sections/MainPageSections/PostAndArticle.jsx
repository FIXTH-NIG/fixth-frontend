import  { useState } from 'react'
import PostCard from '../../ui/PostCard'
import styled from 'styled-components'
import dummyProfile from "../../../assets/Images/dummyProfile.png"
import videoIcon from "../../../assets/Icons/videoIcon.svg"
import photoIcon from "../../../assets/Icons/photoIcon.svg"

export default function PostAndArticle() {
    const [newPost, setNewPost] = useState(true)
  return (
    <PostAndArticleContainer>
        <PostOrArticleContainer className="postOrArticleContainer">
            <button id="post">
                ✔ Post
            </button>
            <button id="article">
                Articles
            </button>
        </PostOrArticleContainer>
        <CreatePostTab>
            <div className="startPost">
                <div className="profileImg">
                    <img src={dummyProfile} alt="user profile image" />
                </div>
                <button>Start a post....</button>
            </div>
            <div className="mediaType">
                <button>
                    <img src={videoIcon} alt="video icon" />
                    Photo
                </button>
                <button>
                    <img src={photoIcon} alt="photo icon" />
                    Video
                </button>
            </div>
        </CreatePostTab>
        {
            newPost == true
                ?
            (
                <NewPostAlert>
                    <span className='blue-dot'></span>
                    New Post
                </NewPostAlert>
            )
                :
            null
        }
        <Feed>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </Feed>
    </PostAndArticleContainer>
  )
}


const PostAndArticleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const PostOrArticleContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    height: 45px;
    align-items: center;
    button{
        height: 31px;
        width: 60px;
        padding: auto;
        font-size: 12px;
        border-radius: 20px;
    }
    #post{
        background-color: var(--blue);
        color: var(--background-white);
    }
    #article{
        border: 1px solid var(--light-ash);
        color: var(--black);
        font-size: 12px;
    }
`
const CreatePostTab = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    border: 2px solid var(--light-ash);
    border-top-right-radius: 20px ;
    border-top-left-radius: 20px;
    gap: 18px;
    .startPost{
        display: flex;
        gap: 10px;
        align-items: center;
        .profileImg{
            height: 28px;
            width: 28px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        button{
            border: none;
            color: var(--grey);
            font-size: 14px;
        }
    }
    .mediaType{
            display: flex;
            gap: 200px;
            justify-content: center;
            button{
                display: flex;
                color: var(--blue);
                border: none;
                width: fit-content;
                gap: 6px;
                font-weight: 500;
            }
        }

`

const NewPostAlert = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--light-ash);
    border-top: none;
    font-size: 14px;
    gap: 5px;
    font-weight: 500;
    letter-spacing: -1px;
    span{
        height: 6px;
        width: 6px;
        background-color: var(--blue);
        border-radius: 50%;
    }
`

const Feed = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`