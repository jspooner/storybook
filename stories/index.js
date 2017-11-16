import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import FooBar from '../src/FooBar'
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with input text', () => <Button onClick={action('clicked')}>😀 JS TEST 💯</Button>);

storiesOf('FooBar', module)
  .add("FooBar", () => <FooBar/>);

  // const data = [
  //       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  //       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  //       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  //       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  //       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  //       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  //       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  // ];
  const data = [{date:"2016-10-12",sessions:30294085,sightings:30294085},{date:"2016-10-13",sessions:34302708,sightings:34302708},{date:"2016-10-14",sessions:34128799,sightings:34128799},{date:"2016-10-15",sessions:32812342,sightings:32812342},{date:"2016-10-16",sessions:30288887,sightings:30288887},{date:"2016-10-17",sessions:30713482,sightings:30713482},{date:"2016-10-18",sessions:32697745,sightings:32697745},{date:"2016-10-19",sessions:28130200,sightings:28130200},{date:"2016-10-20",sessions:33126995,sightings:33126995},{date:"2016-10-21",sessions:30203491,sightings:30203491},{date:"2016-10-22",sessions:30372345,sightings:30372345},{date:"2016-10-23",sessions:31030203,sightings:31030203},{date:"2016-10-24",sessions:31874625,sightings:31874625},{date:"2016-10-25",sessions:30469534,sightings:30469534},{date:"2016-10-26",sessions:29491289,sightings:29491289},{date:"2016-11-06",sessions:33226744,sightings:33226744},{date:"2016-11-07",sessions:32128499,sightings:32128499},{date:"2016-11-08",sessions:29892544,sightings:29892544},{date:"2016-11-09",sessions:29641873,sightings:29641873},{date:"2016-11-10",sessions:33819900,sightings:33819900},{date:"2016-11-16",sessions:28783092,sightings:28783092},{date:"2016-11-17",sessions:28648734,sightings:28648734},{date:"2016-11-18",sessions:29977571,sightings:29977571},{date:"2016-11-19",sessions:29373574,sightings:29373574},{date:"2016-11-20",sessions:29039171,sightings:29039171},{date:"2016-11-26",sessions:27377191,sightings:27377191},{date:"2016-11-27",sessions:28594265,sightings:28594265},{date:"2016-11-28",sessions:30702868,sightings:30702868},{date:"2016-11-29",sessions:32356951,sightings:32356951},{date:"2016-11-30",sessions:39222080,sightings:39222080},{date:"2016-12-06",sessions:43661059,sightings:43661059},{date:"2016-12-07",sessions:44479879,sightings:44479879},{date:"2016-12-08",sessions:38824745,sightings:38824745},{date:"2016-12-09",sessions:39669484,sightings:39669484},{date:"2016-12-10",sessions:36405634,sightings:36405634},{date:"2016-12-26",sessions:39487594,sightings:39487594},{date:"2016-12-27",sessions:41863665,sightings:41863665},{date:"2016-12-28",sessions:38789905,sightings:38789905},{date:"2016-12-29",sessions:39330436,sightings:39330436},{date:"2016-12-30",sessions:41160343,sightings:41160343},{date:"2017-01-05",sessions:34624843,sightings:34624843},{date:"2017-01-06",sessions:34074552,sightings:34074552},{date:"2017-01-07",sessions:37064493,sightings:37064493},{date:"2017-01-08",sessions:36340556,sightings:36340556},{date:"2017-01-09",sessions:34190981,sightings:34190981},{date:"2017-01-15",sessions:29293585,sightings:29293585},{date:"2017-01-16",sessions:29621426,sightings:29621426},{date:"2017-01-17",sessions:28444702,sightings:28444702},{date:"2017-01-18",sessions:27895331,sightings:27895331},{date:"2017-01-19",sessions:28955324,sightings:28955324},{date:"2017-01-25",sessions:27051936,sightings:27051936},{date:"2017-01-26",sessions:28233207,sightings:28233207},{date:"2017-01-27",sessions:28506369,sightings:28506369},{date:"2017-01-28",sessions:24078451,sightings:24078451},{date:"2017-01-29",sessions:27393172,sightings:27393172},{date:"2017-01-30",sessions:25491753,sightings:25491753},{date:"2017-01-31",sessions:25609713,sightings:25609713},{date:"2017-02-01",sessions:27635980,sightings:27635980},{date:"2017-02-02",sessions:26533440,sightings:26533440},{date:"2017-02-03",sessions:26398846,sightings:26398846},{date:"2017-02-04",sessions:24643826,sightings:24643826},{date:"2017-02-05",sessions:24844629,sightings:24844629},{date:"2017-02-06",sessions:26864970,sightings:26864970},{date:"2017-02-07",sessions:29888681,sightings:29888681},{date:"2017-02-08",sessions:30183182,sightings:30183182},{date:"2017-02-19",sessions:26133993,sightings:26133993},{date:"2017-02-20",sessions:27194871,sightings:27194871},{date:"2017-02-21",sessions:28505545,sightings:28505545},{date:"2017-02-22",sessions:28302532,sightings:28302532},{date:"2017-02-23",sessions:28969720,sightings:28969720},{date:"2017-03-01",sessions:29900232,sightings:29900232},{date:"2017-03-02",sessions:28580215,sightings:28580215},{date:"2017-03-03",sessions:28194783,sightings:28194783},{date:"2017-03-04",sessions:28297799,sightings:28297799},{date:"2017-03-05",sessions:28987816,sightings:28987816},{date:"2017-03-06",sessions:26022803,sightings:26022803},{date:"2017-03-07",sessions:22157294,sightings:22157294},{date:"2017-03-08",sessions:27976208,sightings:27976208},{date:"2017-03-09",sessions:30220469,sightings:30220469},{date:"2017-03-10",sessions:31235360,sightings:31235360},{date:"2017-03-11",sessions:30610904,sightings:30610904},{date:"2017-03-12",sessions:31198878,sightings:31198878},{date:"2017-03-13",sessions:32747441,sightings:32747441},{date:"2017-03-14",sessions:30988118,sightings:30988118},{date:"2017-03-15",sessions:31527565,sightings:31527565},{date:"2017-03-26",sessions:28969409,sightings:28969409},{date:"2017-03-27",sessions:30710069,sightings:30710069},{date:"2017-03-28",sessions:30659783,sightings:30659783},{date:"2017-03-29",sessions:30105069,sightings:30105069},{date:"2017-03-30",sessions:32163270,sightings:32163270},{date:"2017-03-31",sessions:31449573,sightings:31449573},{date:"2017-03-31",sessions:31449573,sightings:31449573},{date:"2017-04-01",sessions:31223095,sightings:31223095},{date:"2017-04-01",sessions:31223095,sightings:31223095},{date:"2017-04-02",sessions:32447635,sightings:32447635},{date:"2017-04-02",sessions:32447635,sightings:32447635},{date:"2017-04-03",sessions:33143747,sightings:33143747},{date:"2017-04-03",sessions:33143747,sightings:33143747},{date:"2017-04-04",sessions:31956895,sightings:31956895},{date:"2017-04-04",sessions:31956895,sightings:31956895},{date:"2017-04-05",sessions:31435647,sightings:31435647},{date:"2017-04-05",sessions:31435647,sightings:31435647},{date:"2017-04-05",sessions:31435647,sightings:31435647},{date:"2017-04-05",sessions:31435646,sightings:31435646},{date:"2017-04-05",sessions:30778890,sightings:30778890},{date:"2017-04-05",sessions:30778890,sightings:30778890},{date:"2017-04-06",sessions:31689839,sightings:31689839},{date:"2017-04-06",sessions:31689839,sightings:31689839},{date:"2017-04-06",sessions:31018016,sightings:31018016},{date:"2017-04-06",sessions:31018016,sightings:31018016},{date:"2017-04-06",sessions:31689838,sightings:31689838},{date:"2017-04-06",sessions:31689839,sightings:31689839},{date:"2017-04-07",sessions:29784271,sightings:29784271},{date:"2017-04-07",sessions:30455637,sightings:30455637},{date:"2017-04-07",sessions:30455637,sightings:30455637},{date:"2017-04-07",sessions:29784271,sightings:29784271},{date:"2017-04-07",sessions:30455630,sightings:30455630},{date:"2017-04-07",sessions:30455637,sightings:30455637},{date:"2017-04-08",sessions:29627120,sightings:29627120},{date:"2017-04-08",sessions:28901619,sightings:28901619},{date:"2017-04-08",sessions:29627120,sightings:29627120},{date:"2017-04-08",sessions:28901619,sightings:28901619},{date:"2017-04-08",sessions:29627120,sightings:29627120},{date:"2017-04-09",sessions:30525768,sightings:30525768},{date:"2017-04-09",sessions:29380014,sightings:29380014},{date:"2017-04-09",sessions:29380014,sightings:29380014},{date:"2017-04-09",sessions:30525768,sightings:30525768},{date:"2017-04-09",sessions:30525768,sightings:30525768},{date:"2017-04-10",sessions:32431807,sightings:32431807},{date:"2017-04-11",sessions:30799315,sightings:30799315},{date:"2017-04-12",sessions:31154030,sightings:31154030},{date:"2017-04-13",sessions:30288952,sightings:30288952},{date:"2017-04-14",sessions:30069920,sightings:30069920},{date:"2017-04-15",sessions:29978345,sightings:29978345},{date:"2017-04-16",sessions:30572570,sightings:30572570},{date:"2017-04-17",sessions:31908347,sightings:31908347},{date:"2017-04-18",sessions:31300580,sightings:31300580},{date:"2017-04-19",sessions:31592222,sightings:31592222},{date:"2017-04-20",sessions:32312610,sightings:32312610},{date:"2017-04-21",sessions:31594112,sightings:31594112},{date:"2017-04-22",sessions:31176503,sightings:31176503},{date:"2017-04-23",sessions:31387000,sightings:31387000},{date:"2017-04-24",sessions:32145354,sightings:32145354},{date:"2017-04-25",sessions:32538684,sightings:32538684},{date:"2017-04-26",sessions:32216608,sightings:32216608},{date:"2017-04-27",sessions:29693547,sightings:29693547},{date:"2017-04-28",sessions:29795401,sightings:29795401},{date:"2017-04-29",sessions:30036594,sightings:30036594},{date:"2017-04-30",sessions:30197039,sightings:30197039},{date:"2017-05-01",sessions:32846103,sightings:32846103},{date:"2017-05-02",sessions:33135080,sightings:33135080},{date:"2017-05-03",sessions:36404514,sightings:36404514},{date:"2017-05-04",sessions:38873846,sightings:38873846},{date:"2017-05-05",sessions:40708883,sightings:40708883},{date:"2017-05-06",sessions:40629654,sightings:40629654},{date:"2017-05-07",sessions:38294913,sightings:38294913},{date:"2017-05-08",sessions:40541021,sightings:40541021},{date:"2017-05-09",sessions:40012621,sightings:40012621},{date:"2017-05-10",sessions:38904173,sightings:38904173},{date:"2017-05-11",sessions:38848311,sightings:38848311},{date:"2017-05-12",sessions:37686403,sightings:37686403},{date:"2017-05-13",sessions:34739573,sightings:34739573},{date:"2017-05-14",sessions:35481283,sightings:35481283}]

  function numberFormatter(x) {
    return x.split("")
  }
  function numberWithCommas(x) {
    return (x=x+'').replace(new RegExp('\\B(?=(\\d{3})+'+(~x.indexOf('.')?'\\.':'$')+')','g'),',');
  }
  
storiesOf('Charts', module)
  .add('LineChart', () => 
  <LineChart width={800} height={400} 
      data={data}
      margin={{top: 5, right: 30, left: 40, bottom: 5}}>
    <XAxis dataKey="date" />
    <YAxis tickFormatter={numberWithCommas}/>
    <Tooltip/>
    <Line type="monotone" dataKey="sessions" stroke="#ff0000" />
    <Line type="monotone" dataKey="sightings" stroke="#8324d5" />
  </LineChart>)
  .add('BarChart',() =>
    <BarChart width={900} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip/>
      <Legend />
      <Bar dataKey="sessions" fill="#8884d8" />
      <Bar dataKey="sightings" fill="#82ca9d" />
    </BarChart>)