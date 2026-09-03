"use client";

type SketchfabModelProps = {
    modelUrl: string;
};

export default function SketchfabModel({
    modelUrl,
}: SketchfabModelProps) {
    return (
        <div className="h-64 w-full overflow-hidden">
            <iframe
                title="Retro computer"
                src={modelUrl}
                className="h-full w-full border-0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
            />
        </div>
    );
}