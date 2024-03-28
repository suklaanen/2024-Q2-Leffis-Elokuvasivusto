package fi.oamk.muuvi.backend.controller.data;

public class MovieData {

    private int id;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private String title;
    private String description;
    private String genre;
    private String language;
    private String director;
    private String actors;
    private String poster;
    private String year;
    private String imdbRating;
    private String backdrop;


    public MovieData(int id, String title, String description, String genre, String language, String director, String actors, String poster, String year, String imdbRating, String backdrop) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.language = language;
        this.director = director;
        this.actors = actors;
        this.poster = poster;
        this.year = year;
        this.imdbRating = imdbRating;
        this.backdrop = backdrop;
    }

    public MovieData() {
    }

    public String getBackdrop() {
        return "https://image.tmdb.org/t/p/w500/" + this.backdrop;
    }

    public void setBackdrop(String backdrop) {
        this.backdrop = backdrop;
    }

    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    public String getPoster() {
        return "https://image.tmdb.org/t/p/w342/" + this.poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(String imdbRating) {
        this.imdbRating = imdbRating;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGenre() {
        return this.genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLanguage() {
        return this.language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getDirector() {
        return this.director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

}