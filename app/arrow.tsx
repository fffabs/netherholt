export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg
      className={external ? 'arrow arrow-external' : 'arrow'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.043 0.957001L9.336 1.664L17.172 9.5H1V10.5H17.172L9.336 18.336L10.043 19.043L19.086 10L10.043 0.957001Z"
        fill="currentColor"
      />
    </svg>
  );
}
