import Navbar from "../../components/Navbar";
import nftData from "../../data.json";
import styles from "/styles/Marketplace.module.css";

const NftDetails = ({ nft_data }) => {
  console.log(nft_data);
  return (
    <div>
      <Navbar />

      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.productDetailContent}>
            <div className={styles.productDetailLeftCol}>
              <div className={styles.productDetailNftContainer}>
                <span className={styles.skeletonLoader}>
                  <span>
                    <img src={nft_data.images.png.primary.url} alt="" />
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.productDetailRightCol}>
              <div>
                <h1 className={styles.productNftHeading}>{nft_data.name}</h1>
                <div className={styles.rightColProductDetails}>
                  <div>
                    <div className={styles.undefined}>
                      <p>{nft_data.series}</p>
                    </div>
                    <div className={styles.nft_descriptionContainer}>
                      <div className={styles.nft_description_descr}>
                        <p>
                          Intelligent, sensitive and shy, Phoebe Heyerdahl is
                          Helga’s best friend (and possibly her only friend).
                          Helga will often take advantage of Phoebe, treating
                          her like a personal assistant or yelling or insulting
                          her. Despite that, Phoebe is one of the only people
                          who actually likes Helga. Trustworthy Phoebe can keep
                          a secret safe including knowing that Helga is in love
                          with Arnold.
                        </p>

                        <p>
                          <a href="https://paramount.xyz/license-agreement">
                            Paramount EULA
                          </a>
                        </p>

                        <p>
                          © 2022 Viacom International Inc. All Rights Reserved.
                          NICKELODEON and all related titles, logos and
                          characters are trademarks of Viacom International Inc.
                        </p>
                      </div>
                    </div>
                    <div className={styles.price_owner}>
                      <div>
                        <h3>OWNER</h3>
                        <div className={styles.ownerImg}>
                          <img
                            alt="lfg's avatar"
                            src="https://nickelodeon.xyz/nft-content/media/ORANGE/07c8bd2a-409c-448d-9041-518f2bbefa90/9df2fc7f622bb7c11faf448348a05ae5c35824cb6ea9ceb465516a0c2d61a0d7/pfp_2.png"
                            width="45"
                            height="45"
                            loading="lazy"
                            decoding="async"
                          />
                          <a href="/profile/lfg/">
                            <span>@lfg</span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.priceWrapper}>
                        <h3>PRICE</h3>
                        <p className={styles.price}>${nft_data.price_high}</p>
                      </div>
                      <div className={styles.priceCardBtn}>
                        <button
                          data-cypress="buy-now"
                          data-testid="buy-now"
                          type="button"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;

export async function getStaticPaths() {
  const paths = nftData.ask_summaries.map((item) => {
    return { params: { id: item.nft_data_id } };
  });
  // console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const nft_data = nftData.ask_summaries.find(
    (item) => item.nft_data_id === params.id
  ) || {
    notfound: true,
  };
  return { props: { nft_data } };
}
