import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({ selectedVideo, selectedVideo: {snippet} }) => (
    <section className={styles.detail}>
        <iframe
            className={styles.selectedVideo}
            type="text/html" 
            width="100%" 
            height="500"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            frameborder="0" 
            allowfullscreen
        ></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
    </section>
);

export default VideoDetail;