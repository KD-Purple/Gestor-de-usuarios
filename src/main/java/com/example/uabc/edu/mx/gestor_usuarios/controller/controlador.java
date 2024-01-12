package com.example.uabc.edu.mx.gestor_usuarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controlador {
    @GetMapping(value = "/")
    public String index(){        
            return "views/index";
        }

    @GetMapping(value = "/inicio")
    public String inicio(){
        return "views/inicio";
    }

    @GetMapping(value = "/inicio/notificaciones")
    public String notificacion(){
        return "views/notificacion";
    }
}
