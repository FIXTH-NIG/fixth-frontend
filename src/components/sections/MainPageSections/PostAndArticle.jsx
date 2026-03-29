import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from '../../ui/PostCard'
import dummyProfile from '../../../assets/Images/dummyProfile.png'
import videoIcon from '../../../assets/Icons/videoIcon.svg'
import photoIcon from '../../../assets/Icons/photoIcon.svg'
import plusIcon from '../../../assets/Icons/plusIcon.svg'
import xWhiteIcon from '../../../assets/Icons/whiteCancelIcon.svg'
import xIcon from '../../../assets/Icons/cancelIcon.svg'
import mediaIcon from "../../../assets/Icons/blackMediaIcon.svg"

import leftArrowIcon from '../../../assets/Icons/leftArrowIcon.svg'
import { useIsMobile } from '../../../hooks'
import { BREAKPOINTS, NOTIFICATION_TIMEOUT } from '../../../constants'

const COMPOSER_CONFIG = {
    post: {
        title: 'Create post',
        placeholder: 'Share your thoughts...',
        ctaLabel: 'Post',
    },
    article: {
        title: 'Create article',
        placeholder: 'Start writing your article...',
        ctaLabel: 'Publish',
    },
}

export default function PostAndArticle() {
    const isMobile = useIsMobile(BREAKPOINTS.TABLET_LARGE)
    const [newPost, setNewPost] = useState(false)
    const [isDesktopPickerOpen, setDesktopPickerOpen] = useState(false)
    const [isMobilePickerOpen, setMobilePickerOpen] = useState(false)
    const [composerType, setComposerType] = useState(null)
    const [composerText, setComposerText] = useState('')

    const openCreatePicker = () => {
        if (isMobile) {
            setMobilePickerOpen(true)
            return
        }

        setDesktopPickerOpen(true)
    }

    const closeCreatePicker = () => {
        setDesktopPickerOpen(false)
        setMobilePickerOpen(false)
    }

    const handleSelectComposer = (type) => {
        closeCreatePicker()
        setComposerType(type)
    }

    const closeComposer = () => {
        setComposerType(null)
        setComposerText('')
    }

    const handlePublish = () => {
        setNewPost(true)
        closeComposer()
    }

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key !== 'Escape') {
                return
            }

            closeCreatePicker()
            closeComposer()
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [])

    useEffect(() => {
        if (!newPost) {
            return
        }

        const timer = setTimeout(() => {
            setNewPost(false)
        }, NOTIFICATION_TIMEOUT)

        return () => clearTimeout(timer)
    }, [newPost])

    useEffect(() => {
        const shouldLockScroll =
            isDesktopPickerOpen || isMobilePickerOpen || Boolean(composerType)

        if (!shouldLockScroll) {
            return
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [composerType, isDesktopPickerOpen, isMobilePickerOpen])

    const composerConfig = composerType ? COMPOSER_CONFIG[composerType] : null

    return (
        <PostAndArticleContainer>
            <PostOrArticleContainer className="postOrArticleContainer">
                <button id="post">Post</button>
                <button id="article">Articles</button>
            </PostOrArticleContainer>
            <CreatePostTab>
                <div className="startPost">
                    <div className="profileImg">
                        <img src={dummyProfile} alt="user profile image" />
                    </div>
                    <button onClick={openCreatePicker}>Start a post....</button>
                </div>
                <div className="mediaType">
                    <button onClick={() => handleSelectComposer('post')}>
                        <img src={videoIcon} alt="video icon" />
                        Photo
                    </button>
                    <button onClick={() => handleSelectComposer('post')}>
                        <img src={photoIcon} alt="photo icon" />
                        Video
                    </button>
                </div>
            </CreatePostTab>
            {newPost == true ? (
                <NewPostAlert>
                    <span className="blue-dot"></span>
                    New Post
                </NewPostAlert>
            ) : null}
            <Feed>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </Feed>

            {isMobile && composerType === null && !isMobilePickerOpen ? (
                <MobileCreateButton
                    type="button"
                    aria-label="create post or article"
                    onClick={() => setMobilePickerOpen((previousValue) => !previousValue)}
                >
                    <img src={plusIcon} alt="create post icon" />
                </MobileCreateButton>
            ) : null}

            {isMobile && isMobilePickerOpen ? (
                <MobileActionOverlay onClick={closeCreatePicker}>
                    <MobileActionSheet onClick={(event) => event.stopPropagation()}>
                        <MobileOptionButton
                            type="button"
                            onClick={() => handleSelectComposer('article')}
                        >
                            Articles
                        </MobileOptionButton>
                        <MobileOptionButton
                            type="button"
                            onClick={() => handleSelectComposer('post')}
                        >
                            Post
                        </MobileOptionButton>
                        <MobileCloseButton
                            type="button"
                            aria-label="close create options"
                            onClick={closeCreatePicker}
                        >
                            <img src={xWhiteIcon} alt="close create options" />
                        </MobileCloseButton>
                    </MobileActionSheet>
                </MobileActionOverlay>
            ) : null}

            {!isMobile && isDesktopPickerOpen ? (
                <DesktopBackdrop onClick={closeCreatePicker}>
                    <DesktopPickerCard onClick={(event) => event.stopPropagation()}>
                        <h3>Create</h3>
                        <p>Choose what you want to create.</p>
                        <div className="actions">
                            <button
                                type="button"
                                onClick={() => handleSelectComposer('post')}
                            >
                                Post
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSelectComposer('article')}
                            >
                                Article
                            </button>
                        </div>
                    </DesktopPickerCard>
                </DesktopBackdrop>
            ) : null}

            {composerConfig && isMobile ? (
                <MobileComposer>
                    <header>
                        <button
                            type="button"
                            aria-label="close composer"
                            onClick={closeComposer}
                        >
                            <img src={leftArrowIcon} alt="go back" />
                        </button>
                        <span className="audience">Anyone</span>
                        <span className="drafts">Drafts</span>
                        <button
                            type="button"
                            className="postBtn"
                            onClick={handlePublish}
                        >
                            {composerConfig.ctaLabel}
                        </button>
                    </header>
                    <section>
                        <img src={dummyProfile} alt="user profile image" />
                        <textarea
                            value={composerText}
                            placeholder={composerConfig.placeholder}
                            onChange={(event) => setComposerText(event.target.value)}
                        />
                    </section>
                    <footer>
                        <div className="buttonContainer">
                            <button type="button" className="media">
                                <img src={mediaIcon} alt="media icon" />
                            </button>
                            Media
                        </div>
                        <div className="buttonContainer">
                            <button type="button" className="cancel" onClick={closeComposer}>
                                <img src={xIcon} alt="cancel icon" />
                            </button>
                            Cancel
                        </div>
                    </footer>
                </MobileComposer>
            ) : null}

            {composerConfig && !isMobile ? (
                <DesktopBackdrop onClick={closeComposer}>
                    <DesktopComposerCard onClick={(event) => event.stopPropagation()}>
                        <div className="topBar">
                            <h3>{composerConfig.title}</h3>
                            <button
                                type="button"
                                className="closeComposer"
                                onClick={closeComposer}
                            >
                                <img src={xIcon} alt="close composer" />
                            </button>
                        </div>
                        <div className="content">
                            <div className="identity">
                                <img src={dummyProfile} alt="user profile image" />
                                <span>Anyone</span>
                            </div>
                            <textarea
                                value={composerText}
                                placeholder={composerConfig.placeholder}
                                onChange={(event) => setComposerText(event.target.value)}
                            />
                        </div>
                        <div className="bottomBar">
                            <button type="button" className="media">
                                <img src={photoIcon} alt="media icon" />
                                Media
                            </button>
                            <div className="rightButtons">
                                <button
                                    type="button"
                                    className="cancel"
                                    onClick={closeComposer}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="publish"
                                    onClick={handlePublish}
                                >
                                    {composerConfig.ctaLabel}
                                </button>
                            </div>
                        </div>
                    </DesktopComposerCard>
                </DesktopBackdrop>
            ) : null}
        </PostAndArticleContainer>
    )
}

const PostAndArticleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`

const PostOrArticleContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    height: 45px;
    align-items: center;
    @media (max-width: 480px){
        padding-left: 16px;
    }
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
    @media (max-width: 480px){
        display: none;
    }
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
            text-align: left;
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
    @media (max-width: 480px){
        border-top: 1px solid var(--light-ash);
        margin-top: 10px;
    }
`

const MobileCreateButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--white);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
    position: fixed;
    right: 18px;
    bottom: 84px;
    z-index: 20;
    display: none;
    align-items: center;
    justify-content: center;
    img{
        height: 16px;
        width: 16px;
    }
    @media (max-width: 850px){
        display: inline-flex;
    }
`

const MobileActionOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(31, 31, 31, 0.32);
    z-index: 40;
`

const MobileActionSheet = styled.div`
    position: fixed;
    right: 18px;
    bottom: 84px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    z-index: 41;
`

const MobileOptionButton = styled.button`
    width: fit-content;
    border-radius: 999px;
    padding: 8px 16px;
    background-color: var(--white);
    color: var(--blue);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
`

const MobileCloseButton = styled.button`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--blue);
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const DesktopBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(31, 31, 31, 0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 35;
`

const DesktopPickerCard = styled.div`
    width: min(380px, 92vw);
    border-radius: 16px;
    background-color: var(--white);
    border: 1px solid var(--light-ash);
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3{
        font-size: 20px;
        font-weight: 600;
        color: var(--black);
    }
    p{
        font-size: 14px;
        color: var(--primary-grey);
    }
    .actions{
        display: flex;
        gap: 10px;
        button{
            flex: 1;
            height: 40px;
            border-radius: 999px;
            border: 1px solid var(--light-ash);
            font-size: 14px;
            color: var(--black);
            background-color: var(--background-white);
        }
    }
`

const MobileComposer = styled.div`
    position: fixed;
    inset: 0;
    background-color: var(--background-white);
    z-index: 45;
    display: flex;
    flex-direction: column;
    header{
        height: 74px;
        border-bottom: 1px solid var(--light-ash);
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 16px;
        button{
            flex-shrink: 0;
        }
        .audience{
            font-size: 14px;
            color: var(--black);
            font-weight: 500;
        }
        .drafts{
            margin-left: auto;
            color: var(--black);
            font-size: 14px;
        }
        .postBtn{
            background-color: var(--blue);
            color: var(--background-white);
            border-radius: 20px;
            min-width: 64px;
            height: 34px;
            padding: 0 16px;
            font-size: 14px;
        }
    }
    section{
        width: 100%;
        display: flex;
        gap: 10px;
        padding: 16px;
        img{
            width: 28px;
            height: 28px;
        }
        textarea{
            width: 100%;
            min-height: 280px;
            border: none;
            outline: none;
            resize: none;
            font-size: 14px;
            color: var(--black);
            background: transparent;
            &::placeholder{
                color: var(--grey);
            }
        }
    }
    footer{
        margin-top: auto;
        border-top: 1px solid var(--light-ash);
        padding: 14px 0 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 22px;
        .buttonContainer{
            font-size: 12px;
            text-align: center;
        }
        .media,
        .cancel{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 14px;
                height: 14px;
            }
        }
    }
`

const DesktopComposerCard = styled.div`
    width: min(560px, 92vw);
    min-height: 460px;
    border-radius: 16px;
    background-color: var(--white);
    border: 1px solid var(--light-ash);
    display: flex;
    flex-direction: column;
    .topBar{
        width: 100%;
        height: 68px;
        border-bottom: 1px solid var(--light-ash);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 18px;
        h3{
            font-size: 18px;
            color: var(--black);
        }
        .closeComposer{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--background-white);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    }
    .content{
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        flex: 1;
        .identity{
            display: flex;
            align-items: center;
            gap: 10px;
            img{
                width: 30px;
                height: 30px;
            }
            span{
                font-size: 13px;
                color: var(--black);
            }
        }
        textarea{
            width: 100%;
            flex: 1;
            min-height: 260px;
            border: none;
            outline: none;
            resize: none;
            font-size: 16px;
            color: var(--black);
            background: transparent;
            &::placeholder{
                color: var(--grey);
            }
        }
    }
    .bottomBar{
        width: 100%;
        border-top: 1px solid var(--light-ash);
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 18px;
        .media{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--blue);
            font-size: 14px;
        }
        .rightButtons{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .cancel{
            border-radius: 999px;
            border: 1px solid var(--light-ash);
            height: 38px;
            padding: 0 16px;
            color: var(--black);
            background: var(--background-white);
        }
        .publish{
            border-radius: 999px;
            height: 38px;
            padding: 0 16px;
            color: var(--background-white);
            background: var(--blue);
        }
    }
`
