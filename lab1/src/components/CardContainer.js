import NameCard from "./NameCard";
import "./CardContainer.css";
function CardContainer() {
  const salesData = [
    {
      name: "Jack Mars",
      handle: "@jack",
      initials: "JM",
      trend: "3%",
      increasing: true,
      numOfSales: 68,
    },
    {
      name: "Irfan Veci",
      handle: "@veci",
      initials: "IV",
      trend: "63%",
      increasing: false,
      numOfSales: 12,
    },
    {
      name: "Ling Lee",
      handle: "@llee",
      initials: "LL",
      trend: "11%",
      increasing: true,
      numOfSales: 29,
    },
    {
      name: "Juan Bene",
      handle: "@juanb",
      initials: "JB",
      trend: "5%",
      increasing: true,
      numOfSales: 45,
    },
    {
      name: "Leona Curtis",
      handle: "@lecu",
      initials: "LC",
      trend: "4%",
      increasing: false,
      numOfSales: 50,
    },
  ];

  return (
    <div className="CardContainer">
      <NameCard objectPassed={salesData[0]} />
      <NameCard objectPassed={salesData[1]} />
      <NameCard objectPassed={salesData[2]} />
      <NameCard objectPassed={salesData[3]} />
      <NameCard objectPassed={salesData[4]} />
    </div>
  );
}

export default CardContainer;
