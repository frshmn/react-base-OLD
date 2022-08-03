import React from "react";
import work1 from '../images/work-1.png';
import work2 from '../images/work-2.png';
import work3 from '../images/work-3.png';
import work4 from '../images/work-4.png';

const devPath = "/projects/yodo";
const Projects = () => {
    return(
    <main className="content__container page__container">
        <section className="">
            <div className="projects__container">
                <ul className="projects__container-list">
                    <li className="projects__container-item">
                        <a href="#" className="projects__container-link">
                        <img src={work1} alt="" />
                        <div className="tags">
                            <a href="">#建築設計</a>
                            <a href="">#インテリアデザイン</a>
                            <a href="">#アート制作補助</a>
                        </div>
                        <h3>BnA Wall</h3>
                        </a>
                    </li>
                    <li className="projects__container-item">
                        <a href="#" className="projects__container-link">
                        <img src={work2} alt="" />
                        <div className="tags">
                            <a href="">#建築設計</a>
                            <a href="">#インテリアデザイン</a>
                            <a href="">#アート制作補助</a>
                        </div>
                        <h3>BnA Wall</h3>
                        </a>
                    </li>
                    <li className="projects__container-item">
                        <a href="#" className="projects__container-link">
                        <img src={work3} alt="" />
                        <div className="tags">
                            <a href="">#建築設計</a>
                            <a href="">#インテリアデザイン</a>
                            <a href="">#アート制作補助</a>
                        </div>
                        <h3>BnA Wall</h3>
                        </a>
                    </li>
                    <li className="projects__container-item">
                        <a href="#" className="projects__container-link">
                        <img src={work4} alt="" />
                        <div className="tags">
                            <a href="">#建築設計</a>
                            <a href="">#インテリアデザイン</a>
                            <a href="">#アート制作補助</a>
                        </div>
                        <h3>BnA Wall</h3>
                        </a>
                    </li>
                    <li className="projects__container-item">
                        <a href="#" className="projects__container-link">
                        <img src={work2} alt="" />
                        <div className="tags">
                            <a href="">#建築設計</a>
                            <a href="">#インテリアデザイン</a>
                            <a href="">#アート制作補助</a>
                        </div>
                        <h3>BnA Wall</h3>
                        </a>
                    </li>
                    <li className="projects__container-item">
                        <a href="#" className="projects__container-link">
                        <img src={work1} alt="" />
                        <div className="tags">
                            <a href="">#建築設計</a>
                            <a href="">#インテリアデザイン</a>
                            <a href="">#アート制作補助</a>
                        </div>
                        <h3>BnA Wall</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    )
}
export default Projects;