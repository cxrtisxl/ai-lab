import Link from "next/link"

export function SeeTheFuture() {
  return (
    <>
      <p>
        This is a model that simulates a SaaS business in time and answers a question:<br />
        <i>
          "At what CAC and Churn Rate will the business show the target MRR in N months with the specified initial inputs?".
        </i>
      </p>
      <p>
        Read{" "}
        <Link href="/system-simulations-explained">
          &ldquo;See The Future&rdquo; article
        </Link>{" "}
        to learn about how dynamic systems simulation work and how it might
        help you to make the right descisions.
      </p>
      <iframe
        src="https://seethefuture.cxrtisxl.com"
        width="100%"
        height="1000"
        style={{ maxHeight: "910" }}
        scrolling="no"
        className="border rounded-md"
      />
      <p>
        Also available at <a target="_blank" href="https://seethefuture.cxrtisxl.com">seethefuture.cxrtisxl.com</a>
      </p>
    </>
  )
}
