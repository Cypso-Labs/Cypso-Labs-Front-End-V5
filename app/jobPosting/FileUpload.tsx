import * as React from "react";
import { FileUploadProps } from "./types";
import Image from "next/image";

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  acceptedFileTypes,
  maxSize,
}) => {
  const [error, setError] = React.useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      // Check file type
      const fileType = file.type.split("/")[1].toUpperCase();
      if (!acceptedFileTypes.includes(fileType)) {
        setError(`Only ${acceptedFileTypes} files are allowed.`);
        return;
      }

      // Check file size
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds the maximum limit of 5MB.");
        return;
      }

      setError(null); // Clear any previous error
    }
  };

  return (
    <div className="flex flex-col mt-8 w-full">
      <label
        htmlFor="fileUpload"
        className="text-lg tracking-normal text-black"
      >
        {label}
      </label>
      <div
        className="flex flex-col justify-center px-5 py-9 mt-3.5 w-full text-base tracking-normal leading-loose text-center bg-white rounded-xl border border-solid border-neutral-200 min-h-[169px] cursor-pointer"
        onClick={() => document.getElementById("fileUpload")?.click()}
      >
        <Image
          loading="lazy"
          src="/images/fileuploader.svg"
          alt=""
          width={24} // Provide the appropriate width
          height={24} // Provide the appropriate height
          className="object-contain self-center aspect-square"
        />
        <div className="mt-2.5 text-zinc-800">
          Click or drag and drop to upload your file
        </div>
        <div className="mt-2.5 text-neutral-500">
          {acceptedFileTypes} ({maxSize})
        </div>
        <input
          type="file"
          id="fileUpload"
          className="sr-only"
          accept={acceptedFileTypes.toLowerCase()}
          aria-label={`Upload ${label}`}
          onChange={handleFileChange}
        />
      </div>

      {error && <div className="mt-2 text-red-500">{error}</div>}
    </div>
  );
};
