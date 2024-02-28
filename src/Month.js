import MonthList from "./MonthList";
import useFetch from "./useFetch";

function Month() {
  const {
    error,
    isPending,
    data: months,
  } = useFetch("https://myanmar-months-data-json.vercel.app/Tbl_Months");
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="text-warning text-center fs-1">Loading...</div>
      )}
      {months && <MonthList months={months} />}
    </>
  );
}

export default Month;
