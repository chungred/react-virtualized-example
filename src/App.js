import React from "react";
import "./App.css";
import { loremIpsum } from "lorem-ipsum";
import { List, AutoSizer } from "react-virtualized";

const rowCount = 10000;
const rowHeight = 50;
const listHeight = 500;

const App = () => {
  const list = Array(rowCount)
    .fill()
    .map((val, idx) => {
      return {
        id: idx,
        image: "http://via.placeholder.com/40",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });

  const renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row-list">
        <div className="image">
          <img src={list[index].image} alt="" />
        </div>
        <div className="content">
          <div>ID: {list[index].id}</div>
          <div>{list[index].text}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <AutoSizer disableWidth>
        {() => {
          return (
            <div>
              <div>
                <List
                  width={800}
                  height={listHeight}
                  rowHeight={rowHeight}
                  rowRenderer={renderRow}
                  rowCount={list.length}
                  overscanRowCount={3}
                  style={{ borderBottom: "1px solid #eee" }}
                />
              </div>
            </div>
          );
        }}
      </AutoSizer>
    </div>
  );
};
export default App;
