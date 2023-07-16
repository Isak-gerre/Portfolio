import { useRef } from 'react';
import Head from "next/head";
import Spline from '@splinetool/react-spline';
import Styles from "@/styles/Menu.module.css";

export default function App() {
      const spline = useRef();

      function onLoad(splineApp) {
      spline.current = splineApp;
      }
      return (
            <div>
                  <Head>
				<title>Isak Gerre</title>
				<meta name="description" content="Gameflix Social Media application" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
					rel="stylesheet"
				/>
			</Head>
                  <Spline className={Styles.canvas } scene="https://prod.spline.design/BkUBStlxgh7JO3qO/scene.splinecode" onLoad={onLoad} />
                  <ul className={Styles.menu}>
                        <li className={Styles.item}>
                              <div className={Styles.container}>
                                    <a href="/" className={Styles.links}
                                    onMouseEnter={() => spline.current.emitEvent('mouseHover', 'Home')}
                                    onMouseLeave={() => spline.current.emitEventReverse('mouseHover', 'Home')}>
                                          <span className={Styles.number}>01</span> Home
                                    </a>
                              </div>
                        </li>
                        <li className={Styles.item}>
                              <div className={Styles.container}>
                                    <a href="/" className={Styles.links}
                                    onMouseEnter={() => spline.current.emitEvent('mouseHover', 'Projects')}
                                    onMouseLeave={() => spline.current.emitEventReverse('mouseHover', 'Projects')}>
                                          <span className={Styles.number}>02</span> Projects
                                    </a>
                              </div>
                        </li>
                        <li className={Styles.item}>
                              <div className={Styles.container}>
                                    <a href="/" className={Styles.links}
                                    onMouseEnter={() => spline.current.emitEvent('mouseHover', 'CV')}
                                    onMouseLeave={() => spline.current.emitEventReverse('mouseHover', 'CV')}>
                                          <span className={Styles.number}>03</span> CV/Resume
                                    </a>
                              </div>
                        </li>
                        <li className={Styles.item}>
                              <div className={Styles.container}>
                                    <a href="/" className={Styles.links}
                                    onMouseEnter={() => spline.current.emitEvent('mouseHover', 'LinkedIn')}
                                    onMouseLeave={() => spline.current.emitEventReverse('mouseHover', 'LinkedIn')}>
                                          <span className={Styles.number}>04</span> LinkedIn
                                    </a>
                              </div>
                        </li>
                        <li className={Styles.item}>
                              <div className={Styles.container}>
                                    <a href="/" className={Styles.links}
                                    onMouseEnter={() => spline.current.emitEvent('mouseHover', 'Github')}
                                    onMouseLeave={() => spline.current.emitEventReverse('mouseHover', 'Github')}>
                                          <span className={Styles.number}>05</span> GitHub
                                    </a>
                              </div>
                        </li>
                  </ul>
        </div>
  );
}
