import MonthList from "./MonthList";
import useFetch from "./useFetch";
import ReactLoading from 'react-loading';

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
        <div className="text-warning bg-dark text-center fs-1" style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh" }}><ReactLoading type="cylon" color="blue" height={100} width={100} /></div>
      )}
      {months && <MonthList months={months} />}
    </>
  );
}

export default Month;
