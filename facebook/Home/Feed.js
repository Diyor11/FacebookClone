import React from 'react';
import './feed.css';
import david from '../images/men.jpg';
import { data } from '../data'

import AddIcon from '@material-ui/icons/Add';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import VideoCallIcon from '@material-ui/icons/VideoCall';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const Feed = () => {
    return (
        <div className='container'>
            <div className='feed'>
                <div className='create-story'>
                    <span className='story-box'>
                        <AddIcon />
                        <div className='story-info'>
                            <h3>Create Story</h3>
                            <p>Share a photo writing something</p>
                        </div>
                    </span>
                </div>
                <div className='create-post'>
                    <div className='header'>
                        <img src={david} alt='david' />
                        <form>
                            <input type='text' placeholder="What's on your mind, David?" />
                        </form>
                    </div>
                    <div className='icons'>
                        <span>
                            <VideocamIcon />
                            <h4>Live video</h4>
                        </span>
                        <span>
                            <PhotoLibraryIcon />
                            <h4>Photo/Video</h4>
                        </span>
                        <span>
                            <InsertEmoticonIcon />
                            <h4>Feeling/Activity</h4>
                        </span>
                    </div>
                </div>
                <div className='create-room'>
                    <div className='icon'>
                        <VideoCallIcon />
                        <h4>Create room</h4>
                    </div>
                </div>
                <div className='feed-posts'>
                    {data.map((post, index) => {
                        return(
                            <div className='post-card' key={index}>
                        <div className='card-header'>
                            <div className='info'>
                                <div className='left'>
                                    <img src={post.groupImg} alt='some'/>
                                    <div className='group'>
                                        <h4>{post.group}</h4>
                                        <p>{post.writer} - {post.time}</p>
                                    </div>
                                </div>
                                <MoreHorizIcon />
                            </div>
                            <div className='title'>
                                <p>
                                    {post.title}
                                </p>
                            </div>
                        </div>
                        <img src={post.img} alt='img' className='card-img'/>
                        <footer>
                            <div className='static'>
                                <div className='like'>
                                    <ThumbUpAltIcon /> <p>{post.like}</p>
                                </div>
                                <div className='comment'>
                                    <p>{post.comment}</p> comment
                                </div>
                            </div>
                            <div className='border-bottom'></div>
                            <div className='icons'>
                                <span>
                                    <ThumbUpAltIcon />
                                    <p>Like</p>
                                </span>
                                <span>
                                    <MessageIcon />
                                    <p>Comment</p>
                                </span>
                                <span>
                                    <ShareIcon />
                                    <p>Share</p>
                                </span>
                            </div>
                            <div className='write-comment'>
                                <img src={david} alt='david' />
                                <form onSubmit={e => e.preventDefault()}>
                                    <input type='text' placeholder='Write a comment...' />
                                    <div className='emoje'>
                                        <InsertEmoticonIcon />
                                        <CameraAltIcon />
                                        <CardGiftcardIcon />
                                    </div>
                                </form>
                            </div>
                        </footer>
                    </div>
                        )
                    })}
                    
                </div>
            </div>


            <div className='edit'>
                <i class="fas fa-edit"></i>
            </div>
        </div>
    )
}

export default Feed;
