import React from "react";
import "./style.css";
import { useState, useMemo, useEffect } from "react";
import { getSpellsData } from "../../service/Apiservice";
import { useSortableData } from "../../custom-hooks/useSortableData";

function SpellsTable({ spellsData, getClassNamesFor, requestSort }) {
  const headers = ["name", "incantation", "effect", "type", "light"];

  return (
    <div className="items">
      <table id="customers">
        <thead>
          <tr>
            {headers.map((h, i) => {
              return (
                <th
                  key={i}
                  onClick={() => requestSort(`${h}`)}
                  className={getClassNamesFor(`${h}`)}
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {spellsData.map((spell) => (
            <tr key={spell.id}>
              <td>{spell.name}</td>
              <td>{spell.incantation}</td>
              <td>{spell.effect}</td>
              <td>{spell.type}</td>
              <td>{spell.light}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ApiComp() {
  const [spellsData, setSpellsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSpellsData().then((response) => {
      setSpellsData(response.slice(0, 25));
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (spellsData.length !== 0) {
        setIsLoading(false);
      }
    }, 1500);
  }, [spellsData]);

  const { items, requestSort, sortConfig } = useSortableData(spellsData);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="api-comp">
      {isLoading ? (
        <h1 className="headApiLoad">Loading...</h1>
      ) : (
        <SpellsTable
          spellsData={items}
          getClassNamesFor={getClassNamesFor}
          requestSort={requestSort}
        />
      )}
      ;
    </div>
  );
}

export default ApiComp;
