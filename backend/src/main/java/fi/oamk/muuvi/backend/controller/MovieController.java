package fi.oamk.muuvi.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import fi.oamk.muuvi.backend.Shemas.Movie;
import fi.oamk.muuvi.backend.Shemas.MovieResult;
import fi.oamk.muuvi.backend.controller.data.MovieData;
import fi.oamk.muuvi.backend.services.MovieService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
@RequestMapping("/movie")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieData>> searchMovies(@RequestParam(required = false) String query,
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) String language) {
        MovieResult result = movieService.search(query, genre, page, year, language);
        List<MovieData> movies = result.getResults().stream().map(apiMovie -> new MovieData(
            apiMovie.getId(),
            apiMovie.getTitle(), 
            apiMovie.getOverview(), 
            apiMovie.getGenre_ids().toString(), 
            apiMovie.getOriginal_language(), 
            null, 
            null, 
            apiMovie.getPoster_path(), 
            apiMovie.getRelease_date(), 
            apiMovie.getBackdrop_path(),
            null)).toList();
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/fetchDetails")
    public ResponseEntity<List<MovieData>> getMoviesByIDs(@RequestParam List<Integer> id) {
        MovieResult result = movieService.fetchDetails(id);
        List<MovieData> movies = result.getResults().stream().map(apiMovie -> new MovieData(
            apiMovie.getId(),
            apiMovie.getTitle(), 
            apiMovie.getOverview(), 
            apiMovie.getGenre_ids().toString(), 
            apiMovie.getOriginal_language(), 
            null, 
            null, 
            apiMovie.getPoster_path(), 
            apiMovie.getRelease_date(), 
            apiMovie.getBackdrop_path(),
            null)).toList();
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<MovieData> getMoviesByID(@PathVariable Integer id) {
        Movie result = movieService.fetchDetail(id);
        MovieData movie = new MovieData(
            result.getId(),
            result.getTitle(), 
            result.getOverview(), 
            result.getGenre_ids().toString(), 
            result.getOriginal_language(), 
            null, 
            null, 
            result.getPoster_path(), 
            result.getRelease_date(), 
            result.getBackdrop_path(),
            null);
        // voidaan ottaa listan eka, koska haettiin vain yksi elokuva                                                  
        return ResponseEntity.ok(movie);
    }
    
}