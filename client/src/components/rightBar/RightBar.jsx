import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions pour vous</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anniversaire-celebrite.com/upload/250x333/capitaine-flam-250.jpg"
                alt=""
              />
              <span>Capitain flam</span>
            </div>
            <div className="buttons">
              <button>Suivre</button>
              <button>Ignorer</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i41.servimg.com/u/f41/16/61/11/96/gavan_15.jpg"
                alt=""
              />
              <span>x-or</span>
            </div>
            <div className="buttons">
              <button>Suivre</button>
              <button>Ignorer</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Dernières activités</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png"
                alt=""
              />
              <p>
                <span>Bjork</span> a changé sa photo de couverture
              </p>
            </div>
            <span>il y a 1 minute</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://townsquare.media/site/164/files/2013/05/baeastie-boy.jpg?w=980&q=75"
                alt=""
              />
              <p>
                <span>Billy joe</span> a changé sa photo de couverture
              </p>
            </div>
            <span>il y a 1 minute</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://fr.web.img4.acsta.net/r_654_368/newsv7/20/09/24/15/36/1415597.jpg"
                alt=""
              />
              <p>
                <span>Dark Vador</span> a changé sa photo de couverture
              </p>
            </div>
            <span>il y a 1 minute</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.ouest-france.fr/v1/pictures/a3c43dece83f0cb046eed655cc37dd72-calimero-2014-serie-d-animation-programme-tv.jpg?width=1260&sign=b1850d3a1442df30ed8cdbde16399fd2b84ed60d9de52c6fd593e6a9feff9093&client_id=bpservices"
                alt=""
              />
              <p>
                <span>Calimero</span> a changé sa photo de couverture
              </p>
            </div>
            <span>il y a 1 minute</span>
          </div>
        </div>
        <div className="item">
          <span>Amis en ligne</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://fr.web.img4.acsta.net/r_654_368/newsv7/20/09/24/15/36/1415597.jpg"
                alt=""
              />
              <div className="online" />
              <span>Dark Vador</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Frank_Sinatra_by_Gottlieb_c1947-_2.jpg"
                alt=""
              />
              <div className="online" />
              <span>frank sinatra</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Oliver_Mark_-_Beck%2C_Hamburg_2000.jpg"
                alt=""
              />
              <div className="online" />
              <span>Beck</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anniversaire-celebrite.com/upload/250x333/capitaine-flam-250.jpg"
                alt=""
              />
              <div className="online" />
              <span>Capitain flam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png"
                alt=""
              />
              <div className="online" />
              <span>Bjork</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i41.servimg.com/u/f41/16/61/11/96/gavan_15.jpg"
                alt=""
              />
              <div className="online" />
              <span>x-or</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://sfractus-images.cleo.media/unsafe/0x0:2048x1024/2000x0/images/Tout-ce-qu-on-sait-sur-Transformers-8-9184.jpg"
                alt=""
              />
              <div className="online" />
              <span>Transformers</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://townsquare.media/site/164/files/2013/05/baeastie-boy.jpg?w=980&q=75"
                alt=""
              />
              <div className="online" />
              <span>Billy joe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.hebus.com/hebus_2007/09/22/preview/070922153229_25.jpg"
                alt=""
              />
              <div className="online" />
              <span>mc-solard</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static.cnews.fr/sites/default/files/saint_seiya_-_ce_superbe_anime_fait_par_des_fans_relance_la_serie_sur_youtube_64c508284cedf.jpg"
                alt=""
              />
              <div className="online" />
              <span>seiya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.francetvinfo.fr/pictures/6u8acphu3SHZMpzgcq1kkPmusbQ/111x0:1889x1000/2656x1494/filters:format(avif):quality(50)/2019/04/12/iam-2004sipa.jpg"
                alt=""
              />
              <div className="online" />
              <span>iam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
