package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Events_")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "groupId")
    private Group group;

    private Long eventIdOnFinnkino;

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public Long getEventIdOnFinnkino() {
        return eventIdOnFinnkino;
    }

    public void setEventIdOnFinnkino(Long eventIdOnFinnkino) {
        this.eventIdOnFinnkino = eventIdOnFinnkino;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }
}
