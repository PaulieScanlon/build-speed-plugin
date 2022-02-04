import React, { useEffect, useState } from 'react';

import { formatDistance } from 'date-fns';

const Page = () => {
  const [report, setReport] = useState();

  useEffect(() => {
    const getJson = async () => {
      try {
        const response = await fetch('/static/report.json');
        const data = await response.json();

        const start = new Date(data.start);
        const end = new Date(data.end);

        console.log(typeof start);
        console.log(end);

        setReport({
          raw: data,
          start: `${start.toDateString()} | ${start.toLocaleTimeString()}`,
          end: `${end.toDateString()} | ${end.toLocaleTimeString()}`,
          diff: formatDistance(start, end)
        });
      } catch (error) {
        console.log(error);
      }
    };
    getJson();
  }, []);

  return <pre>{JSON.stringify(report, null, 2)}</pre>;
};

export default Page;
