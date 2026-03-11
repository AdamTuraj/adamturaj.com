import { useEffect, useRef } from "react";

declare global {
    interface Window {
        Sketchfab: new (iframe: HTMLIFrameElement) => {
            init: (
                uid: string,
                options: {
                    success: (api: {
                        start: () => void;
                        addEventListener: (event: string, cb: () => void) => void;
                    }) => void;
                    error: () => void;
                }
            ) => void;
        };
    }
}

const SketchfabModal = ({
    uid,
    title,
    onClose,
}: {
    uid: string;
    title: string;
    onClose: () => void;
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const mouseContainer = document.getElementById("mouseContainer");
        if (mouseContainer) mouseContainer.style.display = "none";
        document.body.style.cursor = "auto";

        return () => {
            document.body.style.overflow = "";
            if (mouseContainer) mouseContainer.style.display = "";
            document.body.style.cursor = "";
        };
    }, []);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe || !window.Sketchfab) return;

        const client = new window.Sketchfab(iframe);
        client.init(uid, {
            success: (api) => {
                api.start();
            },
            error: () => {
                console.error("Sketchfab viewer failed to load");
            },
        });
    }, [uid]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm [&_*]:!cursor-auto"
            onClick={onClose}
        >
            <div
                className="relative mx-4 w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b px-5 py-3">
                    <h3 className="text-lg font-bold text-black">{title} — 3D Model</h3>
                    <button
                        onClick={onClose}
                        className="text-2xl leading-none font-bold text-gray-500 transition-colors hover:text-black"
                        aria-label="Close 3D model viewer"
                        title="Close"
                    >
                        &times;
                    </button>
                </div>
                <div className="aspect-video w-full">
                    <iframe
                        ref={iframeRef}
                        title={`${title} 3D Model`}
                        src=""
                        className="h-full w-full"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    />
                </div>
            </div>
        </div>
    );
};

export default SketchfabModal;
