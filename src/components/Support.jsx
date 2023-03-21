
export function Support() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count && (document.title = `${pageTitle}--${count}`)
  })
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? "Click to support": `Supported ${count} times`}
    </button>
  )
}