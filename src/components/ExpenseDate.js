import "./ExpenseDate.css";

function ExpenseDate(props){
    const month = props.date.toLocaleString("pt-BR", { month: "long" });
    const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
    const year = props.date.getFullYear();
return(
    <div className="expense-date">
        <div className="expense-month">{month}</div>
        <div className="expense-year">{year}</div>
        <div className="expense-day">{day}</div>
        
    </div>
)    

}


export default ExpenseDate;