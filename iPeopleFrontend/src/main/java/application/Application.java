package application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
public class Application {
	
/*	@RequestMapping("/")
	String home() {
		return "Hello World!";
	}*/

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

	}
}
