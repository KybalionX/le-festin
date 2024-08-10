interface Props {
  label: string;
}

function Button(props: Props) {
  return (
    <a href="#reservation">
      <button
        type="button"
        className="uppercase mb-2 me-2 rounded-lg bg-primary px-5 py-2.5 text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-rose-400 dark:hover:bg-rose-800 dark:focus:ring-rose-900"
      >
        {props.label}
      </button>
    </a>
  );
}

export default Button;
