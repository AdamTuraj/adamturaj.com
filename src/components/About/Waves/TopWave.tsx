const TopWave = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="relative -z-10 translate-y-[1px]"
            role="presentation"
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "rgb(22, 163, 74)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgb(22, 101, 52)", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path
                fill="url(#grad1)"
                fillOpacity="1"
                d="M0,256L34.3,240C68.6,224,137,192,206,186.7C274.3,181,343,203,411,202.7C480,203,549,181,617,170.7C685.7,160,754,160,823,181.3C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            />
        </svg>
    );
};

export default TopWave;
