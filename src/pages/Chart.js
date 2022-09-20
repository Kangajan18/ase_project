import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("0", 0),
  createData("1", 0),
  createData("2", 3000),
  createData("3", 0),
  createData("4", 8000),
  createData("5", 0),
  createData("6", 10000),
  createData("7", undefined),
  createData("8", undefined),
  createData("9", undefined),
  createData("10", undefined),
  createData("11", undefined),
  createData("12", undefined),
  createData("13", undefined),
  createData("14", undefined),
  createData("15", undefined),
  createData("16", undefined),
  createData("17", undefined),
  createData("18", undefined),
  createData("19", undefined),
  createData("20", undefined),
  createData("21", undefined),
  createData("22", undefined),
  createData("23", undefined),
  createData("24", undefined),
  createData("25", undefined),
  createData("26", undefined),
  createData("27", undefined),
  createData("28", undefined),
  createData("29", undefined),
  createData("30", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>September</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Revenue ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
