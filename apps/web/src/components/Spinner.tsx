import './Spinner.css';

function Spinner({ additionalText }: { additionalText?: string }) {
  return (
    <div className="grid w-full place-items-center gap-4 py-20">
      <div className="spinner" />
      {additionalText && <p>{additionalText}</p>}
    </div>
  );
}

export default Spinner;
