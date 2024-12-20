import React from "react";
export interface JobDetailProps {
  title: string;
  description: React.ReactNode;
  location: string;
  type: string;
}

export interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  className?: string;
}

export interface FileUploadProps {
  label: string;
  acceptedFileTypes: string;
  maxSize: string;
}
