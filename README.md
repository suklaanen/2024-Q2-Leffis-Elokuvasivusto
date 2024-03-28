### OAMK Tietotekniikan opiskelijan web-ohjelmoinnin sovellusprojekti keväällä 2024. 
Tekijänä Rebecca Soisenniemi / @suklaanen .

Projekti jakautui projektiviikon 3. alussa. Siihen mennessä toteutusta oli tehty seuraavasti: 

- Suunnitteluvaiheessa oli mukana @suklaanen , @JuhoHackspace , @mkuja , @JannePaaso71 ja @taunojokinen
- Backend -pohjan valmisteli @suklaanen ja @JuhoHackspace
- Frontend -pohjan valmisteli @suklaanen
- Movie / TMDB -osuutta oli aloittamassa @JuhoHackspace
- Tietokannan skeemaa oli luomassa @mkuja ja @taunojokinen
- Tietokannan testidataa teki @suklaanen 
- Docker -alustusta teki @mkuja ja @taunojokinen 

### Paikalliseen testailuun? :)

**Lisää env-tiedosto backendin juureen tiedoilla:**
TMDB_API_KEY=apiavaimesi
DB_USER=leffisuser
DB_PASSWORD=salasanasi
DB_HOST=localhost

**Avaa docker desktop ja aja backendin-juuresta:**
docker compose up -d

**Aja springbootti käyntiin backendin-juuresta:**
mvn spring-boot:run 

**Kokeile selaimella, kun olet ajanut frontendin-juuresta:**
npm run dev
