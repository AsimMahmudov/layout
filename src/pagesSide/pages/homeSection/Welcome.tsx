import React from "react";
import scss from "./Welcome.module.scss";
import videoimg from "../../../assets/Video.svg";

import icon from "../../../assets/Icon.svg";
import icon1 from "../../../assets/Icon (1).svg";
import icon2 from "../../../assets/Icon (2).svg";
import icon3 from "../../../assets/Icon (3).svg";
import icon4 from "../../../assets/Icon (4).svg";
import icon5 from "../../../assets/Icon (5).svg";

import ill from "../../../assets/Illustration.svg";

import avatar from "../../../assets/Avatar.png";
import avatar1 from "../../../assets/Avatar (1).png";
import avatar2 from "../../../assets/Avatar (2).png";

const Welcome = () => {
  return (
    <>
      <section className={scss.Welcome}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.top}>
              <h1 className={scss.title}>Landing template for startups</h1>
              <p className={scss.text}>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className={scss.buttons}>
                <button className={scss.Start_free_trial}>
                  Start free trial
                </button>
                <button className={scss.leare_more}>Learn more</button>
              </div>
            </div>
            <div className={scss.bottom}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={scss.pley}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.pley_img}>
              <img src={videoimg} alt="" />
            </div>

            <div className={scss.pley_text}>
              <h1 className={scss.title}>
                The majority our customers do not understand their workflows.
              </h1>
              <p className={scss.text}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={scss.blocks}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.box}>
              <img src={icon} alt="" />
              <h2 className={scss.title}>Instant Features</h2>
              <p className={scss.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            <div className={scss.box}>
              <img src={icon1} alt="" />
              <h2 className={scss.title}>Instant Features</h2>
              <p className={scss.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            <div className={scss.box}>
              <img src={icon2} alt="" />
              <h2 className={scss.title}>Instant Features</h2>
              <p className={scss.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            <div className={scss.box}>
              <img src={icon3} alt="" />
              <h2 className={scss.title}>Instant Features</h2>
              <p className={scss.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            <div className={scss.box}>
              <img src={icon4} alt="" />
              <h2 className={scss.title}>Instant Features</h2>
              <p className={scss.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            <div className={scss.box}>
              <img src={icon5} alt="" />
              <h2 className={scss.title}>Instant Features</h2>
              <p className={scss.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={scss.line}></div>
        </div>
      </section>

      <section className={scss.product}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.product_text}>
              <h4>Reach goals that matter</h4>
              <h2>One product, unlimited solutions</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit laborum — semper quis lectus nulla.
              </p>
            </div>

            <div className={scss.pro_box}>
              <div className={scss.pro_text}>
                <h4>More speed. Less spend</h4>
                <h2>Keep projects on schedule</h2>
                <p className={scss.pro_p_tak}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="">
                  <p>✔️ Duis aute irure dolor in reprehenderit</p>
                  <p>✔️ Excepteur sint occaecat </p>
                  <p>✔️ Amet consectetur adipiscing elit</p>
                </div>
              </div>
              <div className={scss.pro_img}>
                <img src={ill} alt="" />
              </div>
            </div>

            <div className={scss.pro_box1}>
              <div className={scss.pro_img}>
                <img src={ill} alt="" />
              </div>
              <div className={scss.pro_text}>
                <h4>More speed. Less spend</h4>
                <h2>Keep projects on schedule</h2>
                <p className={scss.pro_p_tak}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="">
                  <p>✔️ Duis aute irure dolor in reprehenderit</p>
                  <p>✔️ Excepteur sint occaecat </p>
                  <p>✔️ Amet consectetur adipiscing elit</p>
                </div>
              </div>
            </div>

            <div className={scss.pro_box}>
              <div className={scss.pro_text}>
                <h4>More speed. Less spend</h4>
                <h2>Keep projects on schedule</h2>
                <p className={scss.pro_p_tak}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="">
                  <p>✔️ Duis aute irure dolor in reprehenderit</p>
                  <p>✔️ Excepteur sint occaecat </p>
                  <p>✔️ Amet consectetur adipiscing elit</p>
                </div>
              </div>
              <div className={scss.pro_img}>
                <img src={ill} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={scss.line}></div>
        </div>
      </section>

      <section className={scss.take}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.text_take}>
              <h1>Don't take our word for it</h1>
              <p>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                ornare.
              </p>
            </div>

            <div className={scss.take_block}>
              <div className={scss.take_box}>
                <img src={avatar} alt="" />
                <p>
                  — Open PRO lets me quickly get the insights I care about so
                  that I can focus on my productive work. I've had Open PRO for
                  about 24 hours now and I honestly don't know how I functioned
                  without it before.
                </p>
                <div className={scss.lin}></div>
                <h3>
                  Roman Level <span>AppNam</span>{" "}
                </h3>
              </div>

              <div className={scss.take_box}>
                <img src={avatar1} alt="" />
                <p>
                  — Open PRO lets me quickly get the insights I care about so
                  that I can focus on my productive work. I've had Open PRO for
                  about 24 hours now and I honestly don't know how I functioned
                  without it before.
                </p>
                <div className={scss.lin}></div>
                <h3>
                  Roman Level <span>AppNam</span>{" "}
                </h3>
              </div>

              <div className={scss.take_box}>
                <img src={avatar2} alt="" />
                <p>
                  — Open PRO lets me quickly get the insights I care about so
                  that I can focus on my productive work. I've had Open PRO for
                  about 24 hours now and I honestly don't know how I functioned
                  without it before.
                </p>
                <div className={scss.lin}></div>
                <h3>
                  Roman Level <span>AppNam</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={scss.stay}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.stay_text}>
              <h2>Stay in the loop</h2>
              <p>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className={scss.stay_btn}>
              <input
                className={scss.stayinp}
                placeholder="Your best email…"
                type="text"
              />
              <button className={scss.staybtn}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
