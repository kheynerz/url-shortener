import useHash from "src/hooks/useHash"
import { Tab, Tabs } from "./Tabs"
import TopUrls from "./TopUrls"
import PreviousUrls from "./PreviousUrls"
import { routes } from "src/enum/routes"

const UrlOverview = () => {
  const hash = useHash()

  return (
    <>
      <section>
          <Tabs>
              <Tab href={routes.TOP_URLS} text={"Top 100 URLs"} fallback/>
              <Tab href={routes.PREVIOUS_URL} text={"Previous URLs"}/>
          </Tabs>
      </section>
      <section>
        {hash === routes.TOP_URLS && <TopUrls/>}
        {hash === routes.PREVIOUS_URL && <PreviousUrls/>}
      </section>
    </>

  )
}

export default UrlOverview