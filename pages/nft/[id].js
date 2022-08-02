import nftData from "../../data.json";

const NftDetails = ({ nft }) => {
  return <div>NftDetails</div>;
};

export default NftDetails;

export async function getStaticPaths() {
  const paths = nftData.pages.map((page) => {
    const slug = page.path.split("/").slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const currentPath = `/${params.slug.join("/")}`;
  const page = nftData.pages.find((page) => page.path === currentPath) || {
    notfound: true,
  };
  return { props: { page } };
}

// export const getStaticPaths = async () => {
//   const res = await fetch("../../data.json");
//   const data = await res.json();

//   const paths = data.map((nft) => {
//     return {
//       params: { id: nft.id.toString() },
//     };
//   });

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await import("../../data.json" + id);
//   const data = await res.json();

//   return {
//     props: {
//       nft: data,
//     },
//   };
// };
