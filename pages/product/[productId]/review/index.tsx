import { useRouter } from "next/router";

const Review = () => {

    const router = useRouter()
    const {productId} = router.query

    return (
        <>
        <h1>Review</h1>
        </>
    );
}
 
export default Review;