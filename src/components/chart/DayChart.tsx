import instance from '@/instance';
import { ChartDateState } from '@/store/ChartDateState';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import PeriodSelector from './PeriodSelector';
import StudyHistory from './StudyHistory';
import StudyTime from './StudyTime';

export interface StudySession {
  startTime: string;
  studyTime: number;
  endTime: string;
}

const DayChart = () => {
  const [allStudyTime, setAllStudyTime] = useState<number>(0);
  const requestDay = useRecoilValue(ChartDateState);

  console.log('requestDay', requestDay);

  const { data: dayRecord } = useQuery(
    ['dayRecord', requestDay.theDay],
    async () => {
      const response = await instance.get(
        `api/calculate/dayRecord?theDay=${requestDay.theDay}`,
      );
      return response.data;
    },
  );

  function sumStudyTime(arr: StudySession[]) {
    return arr.reduce((acc, cur) => acc + cur.studyTime, 0);
  }

  useEffect(() => {
    if (dayRecord) {
      const studyTime = sumStudyTime(dayRecord);
      setAllStudyTime(studyTime);
    }
  }, [requestDay, dayRecord]);

  useEffect(() => {
    console.log(dayRecord);
    console.log(allStudyTime);
    console.log(requestDay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestDay]);
  // const setStudyTime = () => {
  //   dayRecord.map(()=>)
  // }

  return (
    <>
      <PeriodSelector period="day" />
      <StudyTime period="day" studyTime={allStudyTime} />
      <SubTitle>공부 기록</SubTitle>
      <DayRecordContainer>
        {dayRecord && dayRecord.length !== 0 ? (
          <>
            {dayRecord?.map((record: StudySession) => {
              return <StudyHistory dayRecord={record} />;
            })}
          </>
        ) : (
          <StudyHistory />
        )}
      </DayRecordContainer>
    </>
  );
};

export default DayChart;

const SubTitle = styled.p`
  color: #111;
  font-weight: 600;
  margin-bottom: 26px;
`;

const DayRecordContainer = styled.div`
  margin-bottom: 100px;
`;
