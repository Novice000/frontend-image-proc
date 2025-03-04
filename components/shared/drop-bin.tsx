import React from "react";
import { FileUploader } from "react-drag-drop-files";

type DropSpotProps = {
    fileType?: "jpeg"| "png"| "webp"| "tiff"| "pdf" | null;
    size?: {
        width: number;
        height: number;
    }
    onFileUpload: (file: any) => void;
}

function DropSpot({dropProps}:{dropProps: DropSpotProps}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <FileUploader
                title="Drop your image here"
                onFileUpload={dropProps.onFileUpload}
                types={dropProps.fileType}
                name="image"
                multiple={false}
                uploadLabel="Drop your image here"
            />
        </div>
    )
}