import Link from "next/link";
import React from "react";
import phoneNumberIcon from './img/phone number.png'
import emailIcon from './img/email.png'
import ttIcon from './img/tt.png'
import tgIcon from './img/tg.png'
import instIcon from './img/inst.png'
import Image from "next/image";

const Page = () => {
  return (
    <div className="pageContainer">
      <div className="petProfile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJG9meYae0Z07IqMfx4dUolsotANpG_y2EQ&s"
          alt=""
        />
        <button className="helpButton">Помочь волонтеру</button>
        <button className="editButton">редактировать профиль</button>
      </div>
      <div className="petDetails">
        <h2>Иван Иваныч</h2>
        <p>
          idem cum perspiciatis eius unde distinctio, a est! Beatae laudantium
          nisi magnam nam sit blanditiis voluptas odit modi perenderit, dolores,
          tempora accusamus suscipit possimus quae eaque hic quos voluptatibus
          repellendus libero? Quia nisi esse dicta. Maiores nostrum aliquid
          officiis perspiciatis placeat.
        </p><br />
        <ul className="petInfoList">
          <li>ялвяется волонтером 5 лет</li>
          <li>205 животных нашли дом</li>
        </ul><br />
        <div className="socialMedia">
          <div>
            <div>
              <Image src={phoneNumberIcon} alt="" />
              <p>+8875398497</p>
            </div>
            <div>
                <Image src={emailIcon} alt="" />
                <p>nfdk@mail.com</p>
            </div>
          </div>
          <div>
            <div>
            <Image src={instIcon} alt="" />
            <p>inst</p>
            </div>
            <div>
            <Image src={ttIcon} alt="" />
            <p>tiktok</p>
            </div>
            <div>
            <Image src={tgIcon} alt="" />
            <p>tg</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <Link href="#">Мои животные</Link>
        <br />
        <Link href="#">Добавить животное</Link>
      </div>
    </div>
  );
};

export default Page;
