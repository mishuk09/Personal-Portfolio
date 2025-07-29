import { ExternalLink } from 'lucide-react';

const Seemore = ({ url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex no-underline items-center justify-center gap-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition duration-150 shadow-sm w-16 h-6 md:w-44 md:h-11"
        >
            <span className="hidden md:inline  ">See More</span>
            <span className="inline md:hidden">More</span>
            <ExternalLink className="w-4 h-4" />
        </a>
    );
};

export default Seemore;
