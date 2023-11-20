import React from 'react';

class ProjectVideo extends React.Component {
    render() {
        return (
            <div>


                <iframe
                    className='rounded-b-lg'

                    width="100%"
                    height="330"
                    src="https://www.youtube.com/embed/hNsn0CA94xg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>

            </div>
        );
    }
}

export default ProjectVideo;
