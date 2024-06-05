import React from 'react';

const Card = ({ iframeSrc, title, screenshotSrc, liveLink, githubLink }) => (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
        <iframe
            src={iframeSrc}
            className="w-full h-48"
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <img src={screenshotSrc} alt={`${title} screenshot`} className="w-full mb-4" />
            <div className="flex justify-between">
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Live
                </a>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    GitHub
                </a>
            </div>
        </div>
    </div>
);

const CardComponent = () => {
    const cardsData = [
        {
            iframeSrc: 'https://example.com/iframe1',
            title: 'Project 1',
            screenshotSrc: 'https://example.com/screenshot1.png',
            liveLink: 'https://example.com/live1',
            githubLink: 'https://github.com/example/repo1',
        },
        {
            iframeSrc: 'https://example.com/iframe2',
            title: 'Project 2',
            screenshotSrc: 'https://example.com/screenshot2.png',
            liveLink: 'https://example.com/live2',
            githubLink: 'https://github.com/example/repo2',
        },
        // Add more card objects here as needed
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardComponent;
