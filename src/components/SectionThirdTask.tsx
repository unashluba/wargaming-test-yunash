import * as React from "react"

const SectionThirdTask = () => {
  return (
    <div className="section">
      <h2 className="title-second">
        Почему не рассматриваются заявки с жалобами на нарушение Правил игры?
      </h2>
      <div className="article-container">
        <p className="article-paragraph">
          После введения функционала «Пожаловаться» не рассматриваются заявки,
          созданные в Центр поддержки пользователей о нарушении Правил игры по
          следующим пунктам:
        </p>
        <ol className="article-list part-one">
          <li>
            <span className="article-list-title">
              «Оскорбления и провокации»
            </span>
            <div className="article-list-content">
              <p>В данный пункт входит:</p>
              <ul>
                <li>
                  - использование ненормативной лексики и оскорбление
                  собеседников, применение унизительных кличек и прозвищ по
                  расовому, национальному, религиозному либо половому признаку,
                  а также провоцирование собеседника к их использованию;
                </li>
                <li>
                  - клевета, размещение заведомо ложной информации об Игре,
                  Администрации, Модераторах или Пользователях;
                </li>
                <li>
                  - угрозы реальной расправы в отношенииили представителей
                  Администрации Проекта. Все виды соглашения.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span className="article-list-title">
              «Неинформативные сообщения»
            </span>
            <div className="article-list-content">
              <p>В данный пункт входит:</p>
              <ul>
                <li>
                  - размещение информации (сообщения, фразы, символов и пр.),
                  направленной на отвлечение Пользователей от темы беседы
                  (флуд);
                </li>
                <li>
                  - все виды рекламных сообщений, в частности ссылки на
                  интернет-ресурсы.
                </li>
              </ul>
            </div>
          </li>
        </ol>
        <p className="article-paragraph">
          Также не рассматриваются следующие заявки, созданные в Центр поддержки
          пользователей о нарушении Правил игры:
        </p>
        <ol className="article-list part-two">
          <li className="article-list-title">«Раскрытие позиций союзников»</li>
          <li className="article-list-title">«Выталкивание союзника»</li>
          <li className="article-list-title">«Неспортивное поведение»</li>
          <li className="article-list-title">«Повреждение союзников»</li>
        </ol>
      </div>
    </div>
  )
}

export default SectionThirdTask
