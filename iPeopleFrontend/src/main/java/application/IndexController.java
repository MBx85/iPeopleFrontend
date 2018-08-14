package application;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexController {

	@GetMapping("/index")
	public String index(/*@RequestParam(name = "name", required = false, defaultValue = "World") String name,
			Model model*/) {
		//model.addAttribute("name", name);
		return "index";
	}
	
	@GetMapping("/greeting")
	public String greeting(/*@RequestParam(name = "name", required = false, defaultValue = "World") String name,
			Model model*/) {
		//model.addAttribute("name", name);
		return "greeting";
	}
}