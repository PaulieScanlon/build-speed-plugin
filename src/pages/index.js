import React, { useEffect, useState } from 'react';

import { formatDistance } from 'date-fns';

const Page = () => {
  const [report, setReport] = useState();

  useEffect(() => {
    const getJson = async () => {
      try {
        const response = await fetch('/static/report.json');
        const data = await response.json();

        setReport({
          raw: data,
          start: `${new Date(data.start).toDateString()} | ${new Date(data.start).toLocaleTimeString()}`,
          end: `${new Date(data.end).toDateString()} | ${new Date(data.end).toLocaleTimeString()}`,
          diff: formatDistance(new Date(data.start), new Date(data.end))
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
