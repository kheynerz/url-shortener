import { Tab, Tabs } from "./Tabs"

const UrlOverview = () => {
  return (
    <section>
        <Tabs>
            <Tab href='#top-urls' text={"Top 100 URLs"}/>
            <Tab href='#previous-urls' text={"Previous URLs"}/>
        </Tabs>
    </section>
  )
}

export default UrlOverview