import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ? 기호 생략
  });
  const showDetail = query.detail === 'true';

  console.log(query);

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초 실습</p>
      {showDetail && <p>detail 값을 true로 설정</p>}
    </div>
  );
};

export default About;
