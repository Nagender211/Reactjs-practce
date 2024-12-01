import React, { Component } from 'react';
import ReactPlayer from "react-player";
import './VideoPlayer.css';

const videoIds = [
    // Pushpa Songs (2021-2022)
    'hcMzwMrr1tE',  // Oo Antava
    'gwjieGJYO00',  // Srivalli - Telugu Version
    'ySPKnRY56Cc',  // Saami Saami - Telugu Version
    
    // RRR Songs (2022)
    'OsU0CGZoV8E',  // Naatu Naatu Telugu
    'dNMe5oRfsCE',  // Komuram Bheemudo Telugu
    'CS7hBHVGWs0',  // Dosti Telugu Version
    
    // Kushi Songs (2023)
    'HZ_Q20ir-gg',  // Na Roja Nuvve
    'AAq06bS8UZM',  // Naa Pulamaipuna
    
    // Other Recent Telugu Songs
    'qaf4cDPsW68',  // Mastaru Mastaru from SIR/Vaathi
    'tOM-nWPcR4U',  // Inthandham from Sita Ramam
    'LK7-_dgAVQE'   // Kalaavathi from Sarkaru Vaari Paata
];
class VideoPlayer extends Component {
    state = {
        videos: [],
        currentVideo: null,
        playing: true
    }

    componentDidMount() {
        this.getAllVideosInfo();
    }

    getAllVideosInfo = async () => {
        try {
            const videosPromises = videoIds.map(id => 
                fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`)
                    .then(res => res.json())
            );
            
            const videosData = await Promise.all(videosPromises);
            const formattedVideos = videosData.map(data => ({
                id: data.url.split('v=')[1],
                title: data.title,
                authorName: data.author_name,
                thumbnailUrl: data.thumbnail_url,
                url: `https://www.youtube.com/watch?v=${data.url.split('v=')[1]}`  // Fixed URL format
            }));

            this.setState({
                videos: formattedVideos,
                currentVideo: formattedVideos[0]
            });
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }

    handleVideoSelect = (selectedVideo) => {
        this.setState({ 
            currentVideo: selectedVideo,
            playing: true 
        });
    }

    render() {
        const { videos, currentVideo, playing } = this.state;

        if (!currentVideo) return <div>Loading...</div>;

        return (
            <div className="video-player-container">
                <div className="main-content">
                    {currentVideo && (
                        <div className="video-player-wrapper">
                            <ReactPlayer
                                url={currentVideo.url}
                                width="100%"
                                height="100%"
                                playing={playing}
                                controls={true}
                                className="react-player"
                            />
                            <div className="video-info">
                                <h2>{currentVideo.title}</h2>
                                <p>{currentVideo.authorName}</p>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="video-list">
                    <h2>Next Videos</h2>
                    {videos.map(video => (
                        <div 
                            key={video.id}
                            className={`video-item ${currentVideo.id === video.id ? 'active' : ''}`}
                            onClick={() => this.handleVideoSelect(video)}
                        >
                            <div className="thumbnail">
                                <img src={video.thumbnailUrl} alt={video.title} />
                            </div>
                            <div className="video-details">
                                <h3>{video.title}</h3>
                                <p>{video.authorName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default VideoPlayer;