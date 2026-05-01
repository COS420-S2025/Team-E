import React from "react";
import { getLaptopById, Laptop } from "../DatabaseManager";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const LaptopPage = () => {
  const { id } = useParams<{ id: string }>();
  const [laptop, setLaptop] = useState<Laptop | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchLaptop = async () => {
      const laptopData = await getLaptopById(id);
      setLaptop(laptopData);
    };

    fetchLaptop();
  }, [id]);

  if (!id) {
    return <div>No Invalid ID provided.</div>;
  }

  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  return (
    <div>
      <div className="App-row">
        <div
          className="App-colBox"
          style={{
            width: "80vw",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
          data-testid="laptop-title"
        >
          <div style={{ flex: "1" }}></div>
          <h2 style={{ margin: "7px", alignSelf: "center" }}>
            {" "}
            {laptop.name}{" "}
          </h2>
          <div style={{ flex: "1" }}>
            <button style={{ fontSize: "26px" }}>☆</button>
          </div>
        </div>
      </div>

      <div className="App-row">
        <div
          className="App-colBox"
          style={{ width: "80vw", overflowX: "auto" }}
          data-testid="laptop-items"
        >
          <div className="App-row">
            <div className="App-colBox">
              <h3 style={{ margin: "2px", marginBottom: "17px" }}>Specs</h3>
              <ul
                style={{
                  listStyleType: "none",
                  marginLeft: "4vw",
                  textAlign: "left",
                  lineHeight: "30px",
                }}
              >
                <li>
                  {" "}
                  <b>CPU Type:</b> {laptop.cpuName}
                </li>
                <li>
                  {" "}
                  <b>Cores:</b> {laptop.cpuCoreCount}
                </li>
                <li>
                  {" "}
                  <b>Memory/RAM Size:</b> {laptop.memoryGb} GB
                </li>
                <li>
                  {" "}
                  <b>GPU Type:</b> {laptop.gpuName || "N/A"}
                </li>
                <li>
                  {" "}
                  <b>GPU VRAM Size:</b> {laptop.gpuVramMb} MB
                </li>
                <li>
                  {" "}
                  <b>Disk Storage Type:</b>{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {laptop.storageType}
                  </span>
                </li>
                <li>
                  {" "}
                  <b>Storage Size:</b> {laptop.storageCapacityGb} GB
                </li>
                <li>
                  {" "}
                  <b>Estimated Price:</b> ${laptop.priceCents / 100}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaptopPage;
