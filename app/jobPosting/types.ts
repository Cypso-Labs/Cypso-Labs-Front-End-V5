export interface JobDetailProps {
  title: string;
  description: string;
  location: string;
  type: string;
}

export interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

export interface FileUploadProps {
  label: string;
  acceptedFileTypes: string;
  maxSize: string;
}
