import { UploadIcon } from '@heroicons/react/outline';
import { useState } from 'react';

interface IProps {}

function WarUpload({}: IProps) {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();

    if (!file) {
      return;
    }

    form.append('file', file);

    await fetch('http://localhost:5050/upload', {
      method: 'POST',
      body: form,
    });
  };

  return (
    <div className="grid grid-cols-2">
      <form onSubmit={post}>
        <div className="mx-auto max-w-md overflow-hidden rounded-lg p-2 md:max-w-xl">
          <div className="grid h-48 w-full grid-cols-1 grid-rows-1 place-items-center rounded border-2 border-dashed border-primary p-3">
            <div className="col-span-full row-span-full grid place-items-center">
              <UploadIcon className="h-20 w-20 text-primary" />
              <span className="block font-normal text-gray-400">
                Attach you files here
              </span>
            </div>
            <input
              className="z-10 col-span-full row-span-full h-full w-full opacity-0"
              type="file"
              name="screenshot"
              multiple={false}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button type="submit" className="btn btn-primary btn-sm px-6">
            send
          </button>
        </div>
      </form>
      <div>
        <img src={preview} className="" />
      </div>
    </div>
  );
}

export default WarUpload;
