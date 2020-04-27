import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

const LoadingDot = props => {
  const maxDots = props.maxDot || 3;
  const timing = props.delay || 750;
  const [count, setCount] = useState([]);
  let cur = 0;
  useEffect(() => {
    console.log("TIMER START");
    const id = setInterval(() => {
      cur++;
      if (cur == 10) {
        clearInterval(id);
      }
      setCount(c => {
        if (c.length > maxDots) {
          return [0];
        }
        return [...c, 0];
      });
    }, timing);
    return () => clearInterval(id);
  }, []);
  const DOT = <View style={styles.DotStyle} />;
  return (
    <View style={styles.container}>
      {count.map((val, id) => (
        <View key={id}>{DOT}</View>
      ))}
    </View>
  );
};

export default LoadingDot;
const styles = StyleSheet.create({
  DotStyle: {
    borderWidth: 5,
    borderRadius: 5,
    width: 5,
    height: 5,
    margin: 5
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
