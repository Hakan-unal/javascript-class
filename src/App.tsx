import { useState } from 'react';
import { Row, Typography, Col, Image, Switch, Space } from 'antd';
import {
  title1,
  title2,
  title3,
  title4,
  title5,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  paragraph7,
  paragraph8,
  paragraph9,
  paragraph10,
  paragraph11,
  paragraph12,
  paragraph13,
  paragraph14,
  paragraph15,
  paragraph16,
} from "./language/language"

const { Title, Paragraph, Text } = Typography;


const App = () => {
  const [translate, setTranslate] = useState<boolean>(true)

  return (<Row>
    <Col sm={24}>
      <Title level={1}>{title1(translate)}</Title>
    </Col>
    <Col sm={6}>
      <Image width={"80%"} src='https://cdn.dribbble.com/users/505482/screenshots/1776789/nodejs-dribbble_1.gif' />
    </Col>
    <Col sm={18}>
      <Paragraph>
        {paragraph1(translate)}
      </Paragraph>
      <Paragraph>
        {paragraph2(translate)}
        <ul>
          <li>
            {paragraph3(translate)}
          </li>
          <li>
            {paragraph4(translate)}
          </li>
          <li>
            {paragraph5(translate)}
          </li>
          <li>
            {paragraph6(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

    <Col sm={24}>
      <Title level={3}>{title2(translate)}</Title>
      <Paragraph>
        {paragraph7(translate)}
      </Paragraph>


      <Space direction='vertical' >
        <Text code>Math.random();</Text>
        <Text code>// Generates random numbers between 0 and 1</Text>
        <Text code>Math.sqrt(4);</Text>
        <Text code>// Operation: √4</Text>
        <Text code>// Output: 2</Text>
        <Text code>Math.pow(4,2);</Text>
        <Text code>// Operation: 42</Text>
        <Text code>// Output: 16</Text>
        <Text code>Math.abs(-5);</Text>
        <Text code>// Operation: |-5|</Text>
        <Text code>// Output: 5</Text>
        <Text code>// Math.min(5,3,1,4,2);</Text>
        <Text code>// Operation: Find the smallest value</Text>
        <Text code>// Output: 1</Text>
        <Text code>Math.max(5,3,1,4,2);</Text>
        <Text code>// Operation: Find the biggest value</Text>
        <Text code>// Output: 5</Text>
        <Text code>Math.floor(3.7);</Text>
        <Text code>// Operation: Rounds the number to the smallest integer</Text>
        <Text code>// Output: 3</Text>
        <Text code>Math.ceiling(3.3);</Text>
        <Text code>// Operation: Rounds the number to the biggest integer</Text>
        <Text code>// Output: 4</Text>
        <Text code>Math.round(3.4);</Text>
        <Text code>// Operation: Rounds the number to the near integer</Text>
        <Text code>// Output: 1</Text>
        <Text code>Math.sin(x);</Text>
        <Text code>// Operation: Returns the sinüs value of the x angle</Text>
        <Text code>Math.cos(x);</Text>
        <Text code>// Operation: Returns the cosinüs value of the x angle</Text>
        <Text code>Math.E;</Text>
        <Text code>// Operation: Returns Euler's number</Text>
        <Text code>Math.PI();</Text>
        <Text code>// Operation: Returns PI value</Text>
        <Text code>Math.SQRT2</Text>
        <Text code>// Operation: Returns the square root of 2</Text>
        <Text code>Math.SQRT1_2</Text>
        <Text code>// Operation: Returns the square root of 1/2</Text>
        <Text code>Math.LN2</Text>
        <Text code>// Operation: Returns the naturel logarithm of 2</Text>
        <Text code>Math.LN10</Text>
        <Text code>// Operation: Returns the naturel logarithm of 10</Text>
        <Text code>Math.LOG2E</Text>
        <Text code>// Operation: Returns base 2 logarithm of E</Text>
        <Text code>Math.LOG10E</Text>
        <Text code>// Operation: Returns base 10 logarithm of E</Text>
      </Space>

    </Col>

    <Col sm={24}>
      <Title level={3}>{title3(translate)}</Title>
      <Paragraph>
        {paragraph8(translate)}
      </Paragraph>
      <Paragraph>
        {paragraph2(translate)}
        <ul>
          <li>
            {paragraph9(translate)}
          </li>
          <li>
            {paragraph10(translate)}
          </li>
          <li>
            {paragraph11(translate)}
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        {paragraph12(translate)}
      </Paragraph>

      <Space direction='vertical' >
        <Text code>getTime();</Text>
        <Text code>// Operation: Returns the time elapsed since January 1, 1970 (miliseconds)</Text>
        <Text code>getDate();</Text>
        <Text code>// Operation: Returns the day of the month (1-31)</Text>
        <Text code>getDay();</Text>
        <Text code>// Operation: Returns the day of the week.0 and 7 are considered Sunday</Text>
        <Text code>getMonth();</Text>
        <Text code>// Operation: Returns the month of the year (0-11)</Text>
        <Text code>getHours();</Text>
        <Text code>// Operation: Returns the hour of day (0-23)</Text>
        <Text code>getMinutes();</Text>
        <Text code>// Operation: Returns the minute of hour (0-59)</Text>
        <Text code>getSeconds();</Text>
        <Text code>// Operation: Returns the second of date (0-59)</Text>
        <Text code>setDate();</Text>
        <Text code>// Operation: Sets the day of the month (1-31)</Text>
        <Text code>setMonth();</Text>
        <Text code>// Operation: Sets the month of the year (0-11)</Text>
        <Text code>setFullYear();</Text>
        <Text code>// Operation: Sets the year of the date</Text>
        <Text code>setHours();</Text>
        <Text code>// Operation: Sets the hour of the date (0-23)</Text>
      </Space>

    </Col>

    <Col sm={24}>
      <Title level={3}>{title4(translate)}</Title>
      <Paragraph>
        {paragraph13(translate)}
      </Paragraph>
      <Paragraph>
        {paragraph14(translate)}
      </Paragraph>


      <Space direction='vertical' >
        <Text code>let sentence = " AbCd aBcD ";</Text>
        <Text code>sentence.toUpperCase();</Text>
        <Text code>Output: " ABCD ABCD "</Text>
        <Text code>sentence.toLowerCase();</Text>
        <Text code>Output: " abcd abcd "</Text>
        <Text code>sentence.length;</Text>
        <Text code>Output: 11</Text>
        <Text code>sentence.trim();</Text>
        <Text code>Output: "AbCd aBcD"</Text>
        <Text code>sentence.bold();</Text>
        <Text code>Operation: Thickens the text</Text>
        <Text code>sentence.italic()</Text>
        <Text code>Operation: Makes the text italic</Text>
        <Text code>sentence.indexOf("aB")</Text>
        <Text code>Output: 6</Text>
        <Text code>sentence.search("Cd")</Text>
        <Text code>Output: 3</Text>
        <Text code>sentence.concat("" , "text");</Text>
        <Text code>Output: " AbCd aBcD text"</Text>
        <Text code>sentence.replace("AbCd" , "new text");</Text>
        <Text code>Output: " new text aBcD "</Text>
      </Space>

    </Col>


    <Col sm={24}>
      <Title level={3}>{title5(translate)}</Title>
      <Paragraph>
        {paragraph15(translate)}
      </Paragraph>
      <Paragraph>
        {paragraph16(translate)}
      </Paragraph>


      <Space direction='vertical' >
        <Text code>Number("123");</Text>
        <Text code>// Output: 123</Text>
        <Text code>parseFloat("1.123");</Text>
        <Text code>// Output: 1.234</Text>
        <Text code>toExponential(1.234);</Text>
        <Text code>// Operation: Converts to exponential number</Text>
        <Text code>const value = 1.2345;</Text>
        <Text code>value.toFixed(0);</Text>
        <Text code>// Output: 1</Text>
        <Text code>value.toFixed(2);</Text>
        <Text code>// Output: 1.23</Text>
        <Text code>value.toPrecision(2);</Text>
        <Text code>// Output: 1.2</Text>
        <Text code>value.toPrecision(3);</Text>
        <Text code>// Output: 1.23</Text>
      </Space>

    </Col>



  </Row>
  )
}


export default App;