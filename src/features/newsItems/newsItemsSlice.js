import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = [
    {
        id: "1", 
        title: "\"Nu verdwalen de nachten in jou\": Antwerps stadsdichter Lies Van Gasse brengt ode aan Reinhilde Decleir",
        description: "Antwerps stadsdichter Lies Van Gasse heeft een gedicht geschreven als eerbetoon aan Reinhilde Decleir, de actrice die eerder deze week stierf. Theatergezelschap Tutti Fratelli in Antwerpen, dat Decleir oprichtte, is nog de hele dag open voor wie haar wil gedenken.",
        subTitle: "Actrice en regisseur Reinhilde Decleir overleed eerder deze week. ",
        content: "Reinhilde Decleir, gevierd actrice in het theater en op televisie, overleed woensdag op haar 73e. Ze raakte vooral bekend van tv-series als \"Van vlees en bloed\" of \"Loslopend wild\". Haar echte levenswerk was het artistiek-sociaal theatergezelschap Tutti Fratelli in Antwerpen. Als eerbetoon aan Decleir, heeft Lies Van Gasse een gedicht over haar geschreven. Van Gasse is één van de vijf nieuwe Antwerpse stadsdichters naast Yannick Dangre, Lotte Dodion, Ruth Lasters en het collectief Proza-K. Af en toe schrijven ze \"actualiteitsgedichten\", zoals nu. Lees hier het gedicht van Lies Van Gasse: Zonder veren is er niets aan te doen: jij kon in deze stad verdwalen, maar nu verdwalen de nachten in jou. In de naden van je kleed, de panden van je jas, tussen enkele kriebelige briefjes, – een stukje Brecht, een grap van Erik Vlaminck, een vergeten programmaboekje, een in de haast verfrommeld gedicht – Kom maar langs, zei je en dat zeg je nog steeds, want je huis doet de ramen al open om weer in- en uit te ademen en wat in die bovenkamer geschilderd staat, moet spreken. Een klein dier is in zijn slaap op jouw lichaam gaan liggen, op die huid, ooit strakgespannen. Een meisje wou op je lijken. Ze schreef iets, plakte vleugels en stak op het eind van het stuk een donkere roos in haar haar. Onder het gewicht van het gordijn dat met rode zwaarte naar beneden zakte, smoorde het applaus. BEKIJK - Acteurs Nico Sturm en Els Dottermans drukten eerder al hun grote bewondering voor Reinhilde Decleir uit in \"Het journaal\" van 7 april 2022: Videospeler inladen... Podium Reinhilde Decleir (73) overleden: bekijk haar grootste rollen, van \"Van vlees en bloed\" tot bezieler Tutti Fratelli wo 06 apr 21:53 Het gebouw van Tutti Fratelli in Antwerpen staat nog tot vanavond 22 uur open voor iedereen die Decleir wil gedenken. Er ligt ook een rouwregister. \"Om elkander te omhelzen en te steunen, om te huilen en te lachen, te vechten en te zingen. Want treuren doen we samen,\" zegt Tutti Fratelli. Je vindt Tutti Fratelli in de Lange Gasthuisstraat 26 in hartje Antwerpen. Jij kon in deze stad verdwalen, maar nu verdwalen de nachten in jou",
        display_tag: "Podium",
        publication_date: "2022-04-10 12:02:56",
        last_modified_date: "2022-04-10 12:02:56",
        created_at: null,
        updated_at: null,
        images: [
            {
                id: 1,
                image_url: "//images.vrt.be/orig/2022/04/10/6960a378-b8a8-11ec-b07d-02b7b76bf47f.jpg",
                news_item_id: 1,
                created_at: null,
                updated_at: null
            }
        ]
    }
]

const newsItemsSlice = createSlice({
  name: 'newsItems',
  initialState,
  reducers: {
      newsItemAdded(state, action) {
          state.push(action.payload)
      },
      newsItemUpdated(state, action) {
          const { id, title, description, subTitle, content } = action.payload
          const existingNewsItem = state.find(newsItem => newsItem.id === id)
          if (existingNewsItem) {
            existingNewsItem.title = title
            existingNewsItem.description = description
            existingNewsItem.subTitle = subTitle
            existingNewsItem.content = content
            existingNewsItem.last_modified_date = new Date().toISOString()
          }
      }
  }
})

export const { newsItemAdded, newsItemUpdated } = newsItemsSlice.actions

export default newsItemsSlice.reducer

export const selectAllNewsItems = state => state.newsItems

export const selectNewsItemById = (state, newsItemId) => state.newsItems.find(newsItem => newsItem.id === newsItemId)