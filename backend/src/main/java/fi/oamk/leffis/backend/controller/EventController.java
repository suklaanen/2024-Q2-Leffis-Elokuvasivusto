package fi.oamk.leffis.backend.controller;

import com.fasterxml.jackson.databind.JsonNode;

import fi.oamk.leffis.backend.services.EventService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@RestController
@RequestMapping("/event")
public class EventController {
    private EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/theatreAreas")
    public JsonNode getTheatreAreas() throws JsonMappingException, JsonProcessingException {
        
        return this.eventService.getTheatreAreas();
    }
}
