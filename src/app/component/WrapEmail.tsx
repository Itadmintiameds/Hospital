/** Renders a value and, for an e-mail address, lets it wrap right after the "@" instead of widening its box. */
export default function WrapEmail({ value }: { value: string }) {
  const [local, domain] = value.split('@');
  return domain ? (
    <>
      {local}@<wbr />
      {domain}
    </>
  ) : (
    <>{value}</>
  );
}
