import { BASE_URL } from "../../../shared/env";
import { HomePageBanner } from "../model/types/banners";

export const mockedHomePageBanner: HomePageBanner = {
  id: '1',
  imageUrl: BASE_URL + '/movie_cover/inception.webp',
  title: 'Начало',
  description: 'An exciting psychological thriller where thieves close ranks to control dreams and break into the depths of the subconscious, creating illusions and solving mysteries.',
}