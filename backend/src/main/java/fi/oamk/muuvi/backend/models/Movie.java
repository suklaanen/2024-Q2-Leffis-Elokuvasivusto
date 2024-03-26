package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movie_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    private Long movieIdOnTmdb;

    public Long getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(Long movie_id) {
        this.movie_id = movie_id;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public Long getMovieIdOnTmdb() {
        return movieIdOnTmdb;
    }

    public void setMovieIdOnTmdb(Long movieIdOnTmdb) {
        this.movieIdOnTmdb = movieIdOnTmdb;
    }
}
