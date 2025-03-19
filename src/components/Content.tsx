import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Content() {
  useEffect(() => {
    const $email = document.getElementById('sec-contact-email');
    const $phone = document.getElementById('sec-contact-phone');

    // set contents for email and phone
    if ($email) {
      $email.innerText = 'plutokor@gmail.com';
    }
    if ($phone) {
      $phone.innerText = '010-9380-8464';
    }
  });

  return (
    <div className="space-y-12 font-light">
      <section id="about">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg">
          안녕하세요, 웹 프론트엔드 개발자 박민흠입니다. React와 TypeScript를
          활용한 UI/UX 중심의 웹 서비스 구축 및 유지보수 경험을 보유하고
          있습니다. 사용자의 편의성과 직관적인 인터페이스를 고려한 개발을
          중요하게 생각하며, 최적의 사용자 경험을 제공하기 위해 지속적으로
          고민하고 개선해 나갑니다.
        </p>
        <p className="mt-4 text-lg">
          GitHub, Jira, Confluence 등 다양한 협업 도구를 능숙하게 활용하며, AI를
          활용한 코드 어시스트를 통해 개발 생산성을 높이고 있습니다.
        </p>
        <p className="mt-4 text-lg">
          한국어와 일본어를 능숙하게 구사하며, 일본에서의 워킹 홀리데이를 통해
          게임 번역 및 번역검수 업무를 수행하며 실무 능력을 키웠습니다.
        </p>
      </section>

      <section id="projects">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <ul className="mt-4 text-lg space-y-4">
          <li>
            <strong>
              영상반출 솔루션 웹 프론트엔드 개발{' '}
              <span className="text-zinc-500 text-xs">(2024.07 ~ 2024.09)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>영상반출 시스템 신청/ 관리 페이지 웹 UI/UX 개발</li>
              <li>React 기반 UI 수정 및 신규 기능 개발</li>
            </ul>
          </li>
          <li>
            <strong>
              사내 제품용 지도 라이브러리 제작{' '}
              <span className="text-zinc-500 text-xs">(2024.04 ~ 2024.08)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>지도 서비스 관련 사내 라이브러리 개발</li>
              <li>OpenLayers API를 사용한 지도 기능 개발</li>
            </ul>
          </li>
          <li>
            <strong>
              CCTV 관제 솔루션 관리 서비스{' '}
              <span className="text-zinc-500 text-xs">(2023.12 ~ 2024.04)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>CCTV 관제 시스템의 관리 웹 페이지 UI 개발 및 유지보수</li>
              <li>React 기반 서비스 유지보수 및 신규 기능 개발</li>
            </ul>
          </li>
          <li>
            <strong>
              CCTV 열람통제 시스템 관리 및 신청 페이지 UI 수정, 퍼블리싱, 신규
              로직 구현{' '}
              <span className="text-zinc-500 text-xs">(2023.11 ~ 2023.12)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>레거시 프로젝트의 신규 화면 퍼블리싱</li>
              <li>UI 수정 및 기능 개발 대응</li>
            </ul>
          </li>
          <li>
            <strong>
              영상반출 및 CCTV 관제 솔루션 프론트엔드 개발{' '}
              <span className="text-zinc-500 text-xs">(2023.09 ~ 2024.09)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>CCTV 관제 솔루션 관리 서비스 UI 개발 및 신규 로직 구현</li>
              <li>수술실 CCTV 영상반출 서비스 UI 리팩토링 및 API 연동</li>
            </ul>
          </li>
          <li>
            <strong>
              사내 지도 및 위치 기반 서비스 개발{' '}
              <span className="text-zinc-500 text-xs">(2023.08 ~ 2024.08)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>사내 제품용 지도 라이브러리 제작 및 React 기반 화면 개발</li>
              <li>
                PostgreSQL, OpenStreetMap Tile Server 기반 오프라인 지도 서버
                구축
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Docker 및 서버 관리 애플리케이션 개발{' '}
              <span className="text-zinc-500 text-xs">(2023.04 ~ 2023.07)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>Electron 기반 서버/Docker 관리 UI 개발</li>
              <li>Redux 및 Monaco Editor를 활용한 애플리케이션 구현</li>
            </ul>
          </li>
          <li>
            <strong>
              통계 및 대시보드 개발{' '}
              <span className="text-zinc-500 text-xs">(2023.01 ~ 2023.03)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>차량 인식 솔루션의 웹 통계 페이지 UI 구현</li>
              <li>Redux 및 ECharts를 활용한 데이터 시각화</li>
            </ul>
          </li>
          <li>
            <strong>
              메타버스와 인사 관리 시스템을 결합한 서비스{' '}
              <span className="text-zinc-500 text-xs">(2022.04 ~ 2022.12)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>
                메타버스와 인사 관리 시스템을 결합한 서비스의 프론트 엔드 구현
              </li>
              <li>Redux 기반 상태 관리 및 주요 화면 구현</li>
            </ul>
          </li>
          <li>
            <strong>
              내 손안에 강릉 모바일 애플리케이션 - React Native{' '}
              <span className="text-zinc-500 text-xs">(2022.03 ~ 2022.04)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>React Native 기반 모바일 앱 화면 개발</li>
              <li>Swift/Kotlin을 활용한 Native 모듈 구현</li>
            </ul>
          </li>
          <li>
            <strong>
              온라인 코딩 테스트 시스템 개발{' '}
              <span className="text-zinc-500 text-xs">(2021.12 ~ 2022.03)</span>
            </strong>
            <ul className="list-disc ml-6">
              <li>React 및 Monaco Editor를 활용한 코드 에디터 개발</li>
              <li>WebSocket, chokidar를 활용한 실시간 채점 시스템 구축</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2 className="text-4xl font-semibold">Contact</h2>
        <div className="mt-4 text-lg flex">
          <span className="w-12">📧</span>
          <motion.a
            href="mailto:plutokor@gmail.com"
            className="underline text-blue-400"
            id="sec-contact-email"
          >
            -
          </motion.a>
        </div>
        <div className="mt-4 text-lg flex">
          <span className="w-12">📞</span>
          <span id="sec-contact-phone">-</span>
        </div>
      </section>
    </div>
  );
}
