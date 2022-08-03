import React from "react";
import { Map } from  '../parts';
import { Ohta, Sumomo } from '../images';

const devPath = "/projects/yodo";

const About = props => {
    return(
    <main className="about__container page__container">
        <section className="concept">
            <header className="concept__header page__header">
                <h2>About</h2>
            </header>
            <div className="concept__content page__content">
                <div className="concept__content-text">
                <p>
                    YODOは社会<br />
                    建築空間・WEB空間をデザインする事を得意としています。<br /><br />
                    web部門、建築部門という縦割りな組織では無く、お互いの領域を行き来する事で様々な諸問題を解決する新しい提案をしていければと考えています。
                </p>
                </div>
                <div className="concept__content-service">
                <p>
                    <span>Case. 1</span>
                    建築設計・インテリアデザイン
                </p>
                <p>
                    <span>Case. 2</span>
                    webデザイン、webアプリ開発
                </p>
                <p>
                    <span>Case. 3</span>
                    マーケティング
                </p>
                <p>
                    <span>Case. 4</span>
                    アートの制作
                </p>
                <p>
                    <span>Case. 5 </span>
                    新規事業の立ち上げ
                </p>
                </div>
            </div>
            {/* <Map positionLat={39} positionLng={139} centerLat={39} centerLng={139} zoom={10} infoWindow="草津温泉きむらや" /> */}
        </section>
        <section className="member">
            <header className="member__header page__header">
                <h2>Member</h2>
            </header>
            <div className="member__content">
                <ul className="member__content-list">
                <li className="member__content-item">
                    <a className="member__content-link" href="#">
                    <img src={Ohta} alt="" />
                    <div className="tags">
                        <span>#建築家</span>
                        <span>#ディレクター</span>
                    </div>
                    <h3>
                        <span>代表</span>
                        太田　雄太郎
                    </h3>
                    </a>
                </li>
                <li className="member__content-item">
                    <a className="member__content-link" href="#">
                    <img src={Sumomo} alt="" />
                    <div className="tags">
                        <span>#猫</span>
                        <span>#モデル</span>
                    </div>
                    <h3>
                        <span></span>
                        スモモ
                    </h3>
                    </a>
                </li>
                <li className="member__content-item">
                    <a className="member__content-link" href="#">
                    <img src={Ohta} alt="" />
                    <div className="tags">
                        <span>#建築家</span>
                        <span>#ディレクター</span>
                    </div>
                    <h3>
                        <span>代表</span>
                        太田　雄太郎
                    </h3>
                    </a>
                </li>
                </ul>
            </div>
        </section>
    </main>
    )
};
export default About;