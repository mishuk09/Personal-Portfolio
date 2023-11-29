import React from 'react';

class ProjectVideo extends React.Component {
    render() {
        return (
            <div className='projectvideo'>
                <iframe
                    className='rounded-b-lg'
                    width="100%"
                    height="330"
                    src="https://www.youtube.com/embed/hNsn0CA94xg?autoplay=1" // Append "?autoplay=1" to the URL
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
}

export default ProjectVideo;
